import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";

// ✅ Get app URL dynamically (supports local + production)
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const profile = await currentProfile();

  // 🔥 Fix: Redirect to sign-in with absolute returnBackUrl
  if (!profile) {
    return redirectToSignIn({
      returnBackUrl: `${APP_URL}/invite/${params.inviteCode}`,
    });
  }

  // 🔍 Ensure invite code exists
  if (!params.inviteCode) {
    return redirect(`${APP_URL}/`);
  }

  // 🔍 Check if user already belongs to this server
  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: { profileId: profile.id },
      },
    },
  });

  // ✅ Redirect if user already joined the server
  if (existingServer) {
    return redirect(`${APP_URL}/servers/${existingServer.id}`);
  }

  // 🚀 Add user to the server and create membership
  const server = await db.server.update({
    where: { inviteCode: params.inviteCode },
    data: {
      members: { create: [{ profileId: profile.id }] },
    },
  });

  // ✅ Redirect to the newly joined server
  if (server) {
    return redirect(`${APP_URL}/servers/${server.id}`);
  }

  return null;
};

export default InviteCodePage;
