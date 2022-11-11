import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "geqdnagd",
  dataset: "production",
  apiVersion: "2022-07-20",
  useCdn: true,
  token:
    "skKRLUSlCIw9XQwpx98pa02JD87O33uGmXx8LBrWPkB8OgAVTGjTUVRJsb36h48icsfYapMU9uA1s7e7HRLWQ7CXR8jPNPezTW6ZblTKHvNPTHkc7hwNfgYVELQ72yHsq72w8kuvjMcPiYZ9ZDvrPu6TuwR6lHkHbdNjOvrXgmUexoaLsFOs",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
