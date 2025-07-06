import { builder } from "@builder.io/sdk";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';
builder.init(BUILDER_API_KEY);

export const getBuilderDataModel = async (model: string) => {
    const data = await builder.get(model, {
        fields: 'data',
        options: { noTargeting: true },
    }).toPromise();;

    return data;
};

export const getAllBuilderDataModel = async (model: string) => {
    // const data = await builder.getAll(model, {
    //     fields: 'data',
    //     options: { noTargeting: true },
    //     query: {
    //         'data.title': { $regex: 'Dave', $options: 'i' },
    //         'data.description': { $regex: 'cook', $options: 'i' }
    //     },
    //     // query: {
    //     //     'data.$and': [
    //     //         { title: { $regex: 'Dave', $options: 'i' } },
    //     //         { description: { $regex: 'Dave', $options: 'i' } },
    //     //         { tags: { $in: ['american'] } }
    //     //     ]
    //     // }
    // })

    // https://cdn.builder.io/api/v2/content/docs-content?apiKey=YJIGb4i01jvw0SRdL5Bt&query.data.title.%24regex=%22Builder%22&fields=name&query.data.title.%24options=i
    const data = await fetch(`https://cdn.builder.io/api/v3/content/${model}?apiKey=${BUILDER_API_KEY}&query.data.title.$regex=Dave&query.data.title.$options=i&query.data.description.$regex=cook&query.data.description.$options=i`)
    const { results } = await data.json();

    return results;
}

export const getModelData = async (slug: string, model: string) => {
    const res = await builder
        .get(model, {
            userAttributes: {
                urlPath: slug,
            },
            prerender: false,
        })
        .toPromise();

    return res;
};

export const getModelDataBySlug = async (slug: string) => {
    const res = await builder.getAll("blogs", {
        query: {
            'data.title': { $regex: 'Ball', $options: 'i' }
        }
    })

    return res;
}