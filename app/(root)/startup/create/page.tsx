import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

async function Page() {
  const session = await auth();

  console.log({ session });

  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">submit your start up</h1>
      </section>

      <StartupForm />
    </>
  );
}

export default Page;
