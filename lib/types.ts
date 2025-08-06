import { Author, Startup } from "@/sanity/types";

export type PostType = Omit<Startup, "author"> & { author?: Author };

export type SessionType = {
  expires: string;
  id: string;
  user: {
    name: string;
    email: string;
    image: string;
  };
};
