import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import { ServerSidebar } from "@/components/server/server-sidebar";

// ✅ Get app URL dynamically (supports local + production)
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const profile = await currentProfile();

  // 🔥 Fix: Redirect to sign-in with absolute returnBackUrl
  if (!profile) {
    return redirectToSignIn({
      returnBackUrl: `${APP_URL}/servers/${params.serverId}`,
    });
  }

  // 🔍 Check if the server exists and the user is a member
  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: { profileId: profile.id },
      },
    },
  });

  // ❌ If the server doesn't exist, redirect home
  if (!server) {
    return redirect(`${APP_URL}/`);
  }

  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <ServerSidebar serverId={params.serverId} />
      </div>
      <main className="h-full md:pl-60">{children}</main>
    </div>
  );
};

export default ServerIdLayout;
