export type HeroData = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: {
    asset?: {
      url: string;
    };
    alt?: string;
  };
};
