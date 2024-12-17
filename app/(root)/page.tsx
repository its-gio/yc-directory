import SearchForm from "@/components/SearchForm/index";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your start up</h1>
        {/* [!]class-name overwrites style of utility class */}
        <p className="sub-heading !max-w-3xl">Get your start up funded</p>

        <SearchForm query={query} />
      </section>
    </>
  );
}
