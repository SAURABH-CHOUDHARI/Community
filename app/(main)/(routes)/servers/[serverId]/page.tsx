import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

// ✅ Use APP_URL to ensure absolute paths (local + production)
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const profile = await currentProfile();

  // 🔥 Fix: Redirect to sign-in with absolute returnBackUrl
  if (!profile) {
    return redirectToSignIn({
      returnBackUrl: `${APP_URL}/servers/${params.serverId}`,
    });
  }

  // 🔍 Find the server and ensure the user is a member
  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: { profileId: profile.id },
      },
    },
    include: {
      channels: {
        where: { name: "general" },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  // 🛑 If no "general" channel, prevent broken redirects
  const initialChannel = server?.channels[0];
  if (!initialChannel || initialChannel.name !== "general") {
    return null;
  }

  // ✅ Redirect to the first "general" channel
  return redirect(`${APP_URL}/servers/${params.serverId}/channels/${initialChannel.id}`);
};

export default ServerIdPage;
