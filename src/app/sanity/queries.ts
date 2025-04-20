export const heroQuery = /* groq */ `
  *[_type == "hero" && language == $lang][0]{
    _id,
    title,
    subtitle,
    description,
    image {
      asset->{url},
      alt
    },
    "_translations": *[
      _type == "translation.metadata" && references(^._id)
    ][0].translations[].value->{
      _id,
      title,
      subtitle,
      description,
      language
    }
  }
`;

export const skillsQuery = /* groq */ `
  *[_type == "skills" && language == $lang][0]{
    _id,
    sectionTitle,
    items[]{
      label,
      icon,
      image {
        asset->{url},
        alt
      }
    },
    "_translations": *[
      _type == "translation.metadata" && references(^._id)
    ][0].translations[].value->{
      _id,
      sectionTitle,
      language
    }
  }
`;
