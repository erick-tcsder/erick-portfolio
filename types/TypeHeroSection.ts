import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeHeroSectionFields {
    name: Contentful.EntryFields.Symbol;
    intro?: Contentful.EntryFields.Symbol;
    workTypes: Contentful.EntryFields.Symbol[];
    description: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    myMail: Contentful.EntryFields.Symbol;
    resume: Contentful.Asset;
    avatar: Contentful.Asset;
}

export type TypeHeroSection = Contentful.Entry<TypeHeroSectionFields>;
