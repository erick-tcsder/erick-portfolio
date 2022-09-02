import * as Contentful from "contentful";

export interface TypeMenuItemFields {
    name: Contentful.EntryFields.Symbol;
    link: Contentful.EntryFields.Symbol;
    index: Contentful.EntryFields.Integer;
}

export type TypeMenuItem = Contentful.Entry<TypeMenuItemFields>;
