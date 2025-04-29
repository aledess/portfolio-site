export type SocialItem = {
  label: string;
  light?: {
    asset: { url: string };
    alt?: string;
  };
  dark?: {
    asset: { url: string };
    alt?: string;
  };
  url?: string;
  file?: {
    asset: { url: string };
  };
};

export type SocialData = {
  _id: string;
  items: SocialItem[];
  _translations?: Array<{
    _id: string;
    items: SocialItem[];
    language: string;
  }>;
};
