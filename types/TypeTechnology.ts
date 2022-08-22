import * as Contentful from "contentful";

export interface TypeTechnologyFields {
    name: Contentful.EntryFields.Symbol;
    img: Contentful.Asset;
    url?: Contentful.EntryFields.Symbol;
    blurColor?: Contentful.EntryFields.Symbol;
}

export type TypeTechnology = Contentful.Entry<TypeTechnologyFields>;
