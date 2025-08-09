import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-slate-50 shadow-sm">
      <nav className="flex justify-between items-center text-zink-800">
        <Link href="/">
          <Image src="/logo.png" alt="Stock YC Logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";

                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <span className="max-sm:hidden">{session?.user?.name}</span>
                <Avatar className="size-10 sm:hidden">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={"Your image silly!"}
                  />
                  <AvatarFallback>Missing Avatar</AvatarFallback>
                </Avatar>
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
