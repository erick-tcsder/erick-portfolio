import * as Contentful from "contentful";

export interface TypeSocialFields {
    name: Contentful.EntryFields.Symbol;
    url: Contentful.EntryFields.Symbol;
    icon?: Contentful.EntryFields.Symbol;
}

export type TypeSocial = Contentful.Entry<TypeSocialFields>;
