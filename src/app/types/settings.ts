export type SettingsData = {
  logoLight?: { asset: { url: string } };
  logoDark?: { asset: { url: string } };
  favicon?: { asset: { url: string } };
  maintenance?: boolean;
  hideContactSection?: boolean;
  defaultTheme?: "light" | "dark";
  analyticsId?: string;
};
