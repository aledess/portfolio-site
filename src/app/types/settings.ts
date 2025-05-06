export type SettingsData = {
  logoLight?: { asset: { url: string } };
  logoDark?: { asset: { url: string } };
  favicon?: { asset: { url: string } };
  maintenance?: boolean;
  hiddenSections?: string[];
  defaultTheme?: "light" | "dark";
  analyticsId?: string;
};
