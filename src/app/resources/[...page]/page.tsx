import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
import Header from "@/components/Header";
import { getModelData, getModelDataBySlug } from "@/utils/builder/builderSDKFunctions";
import HeaderWithStats from "@/components/HeaderWithStats";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';
builder.init(BUILDER_API_KEY);

interface PageProps {
    params: {
        page: string[];
    };
}

export default async function Page({ params }: PageProps) {
    const slug = "/resources/" + (params?.page?.join("/") || "")
    const content = await getModelData(slug, "resources")

    const { data: resources } = (await content) || {};

    // console.log('first content content', content)

    // const slugQuery = await getModelDataBySlug(slug)

    return (
        <>
            {/* Render the Builder page */}
            <Header />
            <HeaderWithStats title={resources?.title || "Add title here"} />
            <RenderBuilderContent content={content} model="resources" />
        </>
    );
}