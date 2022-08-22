import * as Contentful from "contentful";

export interface TypeWorkLabelFields {
    title?: Contentful.EntryFields.Symbol;
    icon?: Contentful.EntryFields.Symbol;
}

export type TypeWorkLabel = Contentful.Entry<TypeWorkLabelFields>;
