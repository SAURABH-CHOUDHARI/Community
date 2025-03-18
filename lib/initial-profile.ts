import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";

// ✅ Ensure absolute URL for Clerk authentication redirect
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const initialProfile = async () => {
  const user = await currentUser();

  // 🔥 Fix: Redirect using absolute URL
  if (!user) {
    return redirectToSignIn({
      returnBackUrl: `${APP_URL}/dashboard`, // Adjust based on your app flow
    });
  }

  // ✅ Optimization: Fetch or create profile in a single transaction
  const profile = await db.profile.upsert({
    where: { userId: user.id },
    update: {}, // No need to update anything
    create: {
      userId: user.id,
      name: `${user.firstName || "User"} ${user.lastName || ""}`.trim(),
      imageUrl: user.imageUrl,
      email: user.emailAddresses?.[0]?.emailAddress || "", // Handle missing email
    },
  });

  return profile;
};
