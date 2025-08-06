import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();

  console.log({ session });

  return (
    <header className="px-5 py-3 bg-slate-50 shadow-sm">
      <nav className="flex justify-between items-center text-zink-800">
        <Link href="/">
          <Image src="/logo.png" alt="Stock YC Logo" width={144} height={30} />
        </Link>

        <div className="flex item-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">Logout</button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";

                await signIn("github");
              }}
            >
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
