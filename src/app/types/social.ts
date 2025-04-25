export type SocialItem = {
  label: string;
  url: string;
  icon: {
    asset: {
      url: string;
    };
    alt?: string;
  };
};

export type SocialData = {
  items: SocialItem[];
  showSocialInContact: boolean;
  showSocialSidebar: boolean;
};
