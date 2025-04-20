export type HeroData = {
  title: string;
  subtitle: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
  _id: string;
  _translations: {
    _id: string;
    title: string;
    subtitle: string;
    description: string;
    language: string;
  }[];
};
