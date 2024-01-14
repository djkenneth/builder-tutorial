import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import Header from "@/components/Header";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';
builder.init(BUILDER_API_KEY);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <Header />
      <RenderBuilderContent content={content} />
    </>
  );
}