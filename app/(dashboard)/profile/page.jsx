import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { UserProfile } from "@clerk/nextjs";

export default async function UserProfilePage() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserProfile />
    </HydrationBoundary>
  );
}
