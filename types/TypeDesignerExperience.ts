import * as Contentful from "contentful";

export interface TypeDesignerExperienceFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    thumbnail: Contentful.Asset;
    url?: Contentful.EntryFields.Symbol;
}

export type TypeDesignerExperience = Contentful.Entry<TypeDesignerExperienceFields>;
