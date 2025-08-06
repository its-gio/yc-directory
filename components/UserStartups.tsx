import { client } from "@/sanity/lib/client";
import { STARTUP_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import { StartupCardType } from "@/lib/types";
import StartupCard from "./StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUP_BY_AUTHOR_QUERY, {
    id,
  });

  console.log({ startups });
  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupCardType) => (
          <StartupCard key={startup._id} startup={startup} />
        ))
      ) : (
        <p className="no-results">No Startups Yet</p>
      )}
    </>
  );
};

export default UserStartups;
