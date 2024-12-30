import { defineQuery } from "next-sanity";

const paramsSearch = `!defined($search) || title match $search || description match $search || author->name match $search || category match $search || pitch match $search || description match $search`;

export const STARTUP_QUERY = defineQuery(
  `*[_type == "startup" && defined(slug.current) && ${paramsSearch}] | order(_createdAt desc) {
      _id,
      title,
      slug,
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

export const STARTUP_BY_ID_QUERY = defineQuery(
  `*[_type == "startup" && _id == $id][0] {
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
        name,
        username,
        image
      }
  }`,
);

export const STARTUP_VIEWS_QUERY = defineQuery(
  `*[_type == "startup" && _id == $id][0] {
      _id,
      views
      }`,
);

export const AUTHOR_BY_GITHUB_QUERY = defineQuery(
  `*[_type == "author" && id == $id][0] {
    _id,
    id,
    bio,
    email,
    name,
    username,
    image
  }`,
);
