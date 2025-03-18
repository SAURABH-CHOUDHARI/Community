import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getOrCreateConversation } from "@/lib/conversation";
import { currentProfile } from "@/lib/current-profile";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatMessages } from "@/components/chat/chat-messages";
import { ChatInput } from "@/components/chat/chat-input";
import { MediaRoom } from "@/components/media-room";

// ✅ Use absolute URL to prevent deployment issues
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

interface MemberIdPageProps {
  params: {
    memberId: string;
    serverId: string;
  };
  searchParams: {
    video?: boolean;
  };
}

const MemberIdPage = async ({ params, searchParams }: MemberIdPageProps) => {
  const profile = await currentProfile();

  // 🔥 Fix: Ensure absolute redirect URL
  if (!profile) {
    return redirectToSignIn({
      returnBackUrl: `${APP_URL}/servers/${params.serverId}/conversations/${params.memberId}`,
    });
  }

  // ✅ Optimize: Fetch currentMember and conversation in parallel
  const [currentMember, conversation] = await Promise.all([
    db.member.findFirst({
      where: {
        serverId: params.serverId,
        profileId: profile.id,
      },
      include: {
        profile: true,
      },
    }),
    getOrCreateConversation(profile.id, params.memberId),
  ]);

  // 🔥 Fix: Prevent further execution after redirect
  if (!currentMember) {
    return redirect(`${APP_URL}/servers/${params.serverId}`);
  }

  if (!conversation) {
    return redirect(`${APP_URL}/servers/${params.serverId}`);
  }

  const { memberOne, memberTwo } = conversation;
  const otherMember = memberOne.profileId === profile.id ? memberTwo : memberOne;

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader
        imageUrl={otherMember.profile.imageUrl}
        name={otherMember.profile.name}
        serverId={params.serverId}
        type="conversation"
      />

      {searchParams.video ? (
        <MediaRoom chatId={conversation.id} video={true} audio={true} />
      ) : (
        <>
          <ChatMessages
            member={currentMember}
            name={otherMember.profile.name}
            chatId={conversation.id}
            type="conversation"
            apiUrl="/api/direct-messages"
            paramKey="conversationId"
            paramValue={conversation.id}
            socketUrl="/api/socket/direct-messages"
            socketQuery={{
              conversationId: conversation.id,
            }}
          />
          <ChatInput
            name={otherMember.profile.name}
            type="conversation"
            apiUrl="/api/socket/direct-messages"
            query={{
              conversationId: conversation.id,
            }}
          />
        </>
      )}
    </div>
  );
};

export default MemberIdPage;
