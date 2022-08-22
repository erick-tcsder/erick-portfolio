import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeInfoSectionFields {
    name?: Contentful.EntryFields.Symbol;
    profilePicture: Contentful.Asset;
    history?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeInfoSection = Contentful.Entry<TypeInfoSectionFields>;
