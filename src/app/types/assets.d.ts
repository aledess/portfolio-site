// Permette l'importazione degli SVG come URL (es: `?url`)
declare module "*.svg?url" {
  const content: string;
  export default content;
}
