import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ChannelType } from "@prisma/client";

import { currentProfile } from "@/lib/current-profile";
import { ChatHeader } from "@/components/chat/chat-header";
import { ChatInput } from "@/components/chat/chat-input";
import { ChatMessages } from "@/components/chat/chat-messages";
import { MediaRoom } from "@/components/media-room";
import { db } from "@/lib/db";

// ✅ Use APP_URL to ensure absolute paths (fixes Render issue)
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

interface ChannelIdPageProps {
  params: {
    serverId: string;
    channelId: string;
  };
}

const ChannelIdPage = async ({ params }: ChannelIdPageProps) => {
  const profile = await currentProfile();

  // 🔥 Fix: Redirect to sign-in with an absolute `returnBackUrl`
  if (!profile) {
    return redirectToSignIn({
      returnBackUrl: `${APP_URL}/servers/${params.serverId}/channels/${params.channelId}`,
    });
  }

  // ✅ Combine queries to reduce database calls
  const channelWithMember = await db.channel.findUnique({
    where: { id: params.channelId },
    include: {
      server: {
        select: {
          members: {
            where: { profileId: profile.id, serverId: params.serverId },
          },
        },
      },
    },
  });

  // ❌ If no channel or user is not a member, redirect
  if (!channelWithMember || channelWithMember.server.members.length === 0) {
    return redirect("/");
  }

  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader name={channelWithMember.name} serverId={params.serverId} type="channel" />

      {channelWithMember.type === ChannelType.TEXT && (
        <>
          <ChatMessages
            member={channelWithMember.server.members[0]}
            name={channelWithMember.name}
            chatId={channelWithMember.id}
            type="channel"
            apiUrl="/api/messages"
            socketUrl="/api/socket/messages"
            socketQuery={{
              channelId: channelWithMember.id,
              serverId: params.serverId,
            }}
            paramKey="channelId"
            paramValue={channelWithMember.id}
          />
          <ChatInput
            name={channelWithMember.name}
            type="channel"
            apiUrl="/api/socket/messages"
            query={{
              channelId: channelWithMember.id,
              serverId: params.serverId,
            }}
          />
        </>
      )}

      {channelWithMember.type === ChannelType.AUDIO && <MediaRoom chatId={channelWithMember.id} video={false} audio={true} />}
      {channelWithMember.type === ChannelType.VIDEO && <MediaRoom chatId={channelWithMember.id} video={true} audio={true} />}
    </div>
  );
};

export default ChannelIdPage;
