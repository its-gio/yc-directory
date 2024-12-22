import SearchForm from "@/components/SearchForm/index";
import StartupCard from "@/components/StartupCard";
// import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { Author, Startup } from "@/sanity/types";

export type StartUpCardType = Omit<Startup, "author"> & { author?: Author };

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  // const posts = await client.fetch(STARTUP_QUERY);
  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your start up</h1>
        {/* [!]class-name overwrites style of utility class */}
        <p className="sub-heading !max-w-3xl">Get your start up funded</p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "Trending Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartUpCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
