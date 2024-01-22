import { builder } from "@builder.io/sdk";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY || '';

export const getBuilderDataModel = async (model: string) => {
    const data = await builder.get(model, {
        fields: 'data',
        options: { noTargeting: true },
    });

    return data;
};

export const getAllBuilderDataModel = async (model: string) => {
    const data = await builder.getAll(model, {
        fields: 'data',
        options: { noTargeting: true },
        query: {
            'data.$or': [
                { title: { $regex: 'mother', $options: 'i' } },
                { description: { $regex: 'expert', $options: 'i' } },
                { tags: { $in: ['crime'] } }
            ]
        }
    })

    // const data = await fetch(`https://cdn.builder.io/api/v3/content/${model}?apiKey=${BUILDER_API_KEY}&query.data.$or={title={ $regex: 'mother', $options: 'i' },{ description: { $regex: 'expert', $options: 'i' } }}`)
    // const { results } = await data.json();

    return data;
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
    // console.log('res', res)
}