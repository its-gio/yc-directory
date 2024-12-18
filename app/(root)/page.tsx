import SearchForm from "@/components/SearchForm/index";
import StartupCard from "@/components/StartupCard";

type StartCardType = {
  _id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  _createdAt: string;
  views: number;
  author: {
    _id: number;
    name: string;
  };
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date().toISOString(),
      views: 20,
      author: {
        _id: 1,
        name: "John Doe",
      },
      _id: 1,
      title: "Startup 1",
      description: "Description of startup 1",
      category: "Tech",
      image: "https://place.dog/300/200",
    },
  ];

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
            posts.map((post: StartCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
