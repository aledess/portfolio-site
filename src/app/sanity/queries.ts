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
      icon {
        asset->{url},
        alt
      },
      light {
        asset->{url},
        alt
      },
      dark {
        asset->{url},
        alt
      },
      iconClass, // 👈 questo è il nuovo nome per evitare conflitti
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

export const experienceQuery = /* groq */ `
  *[_type == "experience" && language == $lang][0]{
    _id,
    sectionTitle,
    items[]{
      date,
      company,
      description
    },
    "_translations": *[
      _type == "translation.metadata" && references(^._id)
    ][0].translations[].value->{
      _id,
      sectionTitle,
      items[]{
        date,
        company,
        description
      },
      language
    }
  }
`;

export const worksQuery = /* groq */ `
  *[_type == "works" && language == $lang][0]{
    _id,
    sectionTitle,
    items[]{
      title,
      description,
      tech,
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
      items[]{
        title,
        description,
        tech
      },
      language
    }
  }
`;

export const aboutQuery = /* groq */ `
  *[_type == "about" && language == $lang][0]{
    _id,
    sectionTitle,
    description,
    items[]{
      title,
      height,
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
      description,
      items[]{
        title,
        height
      },
      language
    }
  }
`;

export const contactQuery = /* groq */ `
  *[_type == "contact" && language == $lang][0]{
    _id,
    sectionTitle,
    description,
    "_translations": *[
      _type == "translation.metadata" && references(^._id)
    ][0].translations[].value->{
      _id,
      sectionTitle,
      description,
      language
    }
  }
`;

export const socialQuery = /* groq */ `
  *[_type == "social" && language == $lang][0]{
    socials[]{
      label,
      url,
      icon
    },
    showSocialInContact,
    showSocialSidebar,
    "_translations": *[
      _type == "translation.metadata" && references(^._id)
    ][0].translations[].value->{
      socials[]{
        label,
        url,
        icon
      },
      showSocialInContact,
      showSocialSidebar,
      language
    }
  }
`;
