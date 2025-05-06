export const heroQuery = /* groq */ `
  *[_type == "hero" && language == $lang][0]{
    _id,
    title,
    subtitle,
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
      light {
        asset->{url},
        alt
      },
      dark {
        asset->{url},
        alt
      },
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
      images[]{
        asset->{url},
        alt
      }, 
      link, 
    },
    "_translations": *[
      _type == "translation.metadata" && references(^._id)
    ][0].translations[].value->{
      _id,
      sectionTitle,
      items[]{
        title,
        description,
        tech,
        images[]{
          asset->{url},
          alt
        },
      link, 
      },
      language
    }
  }
`;

export const aboutQuery = /* groq */ `
  *[_type == "about" && language == $lang][0]{
    _id,
    sectionTitle,
    steps[]{
      title,
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
      steps[]{
        title,
        image {
          asset->{url},
          alt
        }
      },
      language
    }
  }
`;

export const contactQuery = /* groq */ `
  *[_type == "contact" && language == $lang][0]{
    _id,
    sectionTitle,
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
    _id,
    items[] {
      label,
      light {
        asset->{
          url
        },
        alt
      },
      dark {
        asset->{
          url
        },
        alt
      },
      url,
      file {
        asset->{
          url
        }
      }
    },
    "_translations": *[
      _type == "translation.metadata" && references(^._id)
    ][0].translations[].value->{
      _id,
      items[] {
        label,
        light {
          asset->{
            url
          },
          alt
        },
        dark {
          asset->{
            url
          },
          alt
        },
        url,
        file {
          asset->{
            url
          }
        }
      },
      language
    }
  }
`;

export const settingsQuery = /* groq */ `
  *[_type == "settings"][0]{
    logoLight { asset->{url} },
    logoDark { asset->{url} },
    favicon { asset->{url} },
    maintenance,
    hiddenSections,
    defaultTheme,
    analyticsId
  }
`;
