import { Author, Startup } from "@/sanity/types";

export type PostType = Omit<Startup, "author"> & { author?: Author };
