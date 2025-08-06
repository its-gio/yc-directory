import { auth } from "@/auth";
import { StartupCardSkeleton } from "@/components/StartupCard";
import UserStartups from "@/components/UserStartups";
import { SessionType } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { Author } from "@/sanity/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = (await auth()) as SessionType;

  const user = (await client.fetch(AUTHOR_BY_ID_QUERY, { id })) as Author;

  console.log({ user, id, session });

  if (!user) return notFound();

  return (
    <>
      <section className="profile_container">
        <div className="profile_card">
          <div className="profile_title">
            <h3 className="text-24-black uppercase text-center">{user.name}</h3>
          </div>

          {user?.image && (
            <Image
              className="profile_image"
              src={user?.image}
              alt={`${user.username} profile picture`}
              width={220}
              height={220}
            />
          )}

          <p className="text-30-extrabold mt-7 text-center">@{user.username}</p>

          <p className="mt-1 text-center text-14-normal">{user.bio}</p>
        </div>

        <div className="flex flex-1 flex-col gap-5 lg:-mt-5">
          <p className="text-30-bold">
            {session?.id === id ? "Your" : "All"} Posts
          </p>
          <ul className="card_grid-sm">
            <Suspense fallback={<StartupCardSkeleton />}>
              <UserStartups id={id} />
            </Suspense>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Page;
