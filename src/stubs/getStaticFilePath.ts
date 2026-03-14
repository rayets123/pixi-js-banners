type StaticFileKind = "static" | "cdn";

interface StaticFileOptions {
  kind: StaticFileKind;
  type: "base" | "img" | "font" | "other";
}

export const getStaticFilePath = (relativePath: string, _options?: StaticFileOptions): string => {
  // In this demo setup we simply return the relative path so that
  // assets can be served directly from the public root if needed.
  return `/${relativePath}`;
};

export default getStaticFilePath;

