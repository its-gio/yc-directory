import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(
  `*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
      _id,
      title,
      slug,
      pitch,
      category,
      image,
      description,
      views,
      _createdAt,
      author -> {
        _id,
        bio,
        email,
        name,
        username,
        image
      }
  }`,
);
