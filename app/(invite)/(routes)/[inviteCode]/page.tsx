import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import { initialProfile } from "@/lib/initial-profile";

// ✅ Get app URL dynamically (supports local + production)
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

interface InviteCodePageProps {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage = async ({ params }: InviteCodePageProps) => {
  const profile = await currentProfile();

  // 🔥 If no profile, initialize & redirect to sign-in with absolute return URL
  if (!profile) {
    await initialProfile();
    return redirectToSignIn({
      returnBackUrl: `${APP_URL}/invite/${params.inviteCode}`,
    });
  }

  // 🔥 Ensure invite code exists before continuing
  if (!params.inviteCode) {
    return redirect(`${APP_URL}/`);
  }

  // 🔍 Check if user is already a member of a server with this invite code
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

  // 🚀 Add user to server and create membership
  const server = await db.server.update({
    where: { inviteCode: params.inviteCode },
    data: {
      members: { create: [{ profileId: profile.id }] },
    },
  });

  // ✅ Redirect to the new server
  if (server) {
    return redirect(`${APP_URL}/servers/${server.id}`);
  }

  return null;
};

export default InviteCodePage;
