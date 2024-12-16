export default function Home() {
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your start up</h1>
        {/* [!]class-name overwrites style of utility class */}
        <p className="sub-heading !max-w-3xl">Get your start up funded</p>
      </section>
    </>
  );
}
