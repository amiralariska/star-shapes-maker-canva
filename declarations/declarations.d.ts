declare module "*.css" {
  const styles: { [className: string]: string };
  export = styles;
  const imagelayoutstyles: { [className: string]: string };
  export = imagelayoutstyles;
  const maineditorstyles: { [className: string]: string };
  export = maineditorstyles;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: React.FunctionComponent<{
    size?: "tiny" | "small" | "medium" | "large";
    className?: string;
  }>;
  export default content;
}

declare const BACKEND_HOST: string;
