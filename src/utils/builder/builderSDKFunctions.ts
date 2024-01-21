import { builder } from "@builder.io/sdk";

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
            'data.title': { $regex: 'she', $options: 'i' }
        }
    })

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