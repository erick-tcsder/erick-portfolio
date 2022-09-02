import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeContactSectionFields {
    currentStatus: CFRichTextTypes.Document;
    myEmail: Contentful.EntryFields.Symbol;
}

export type TypeContactSection = Contentful.Entry<TypeContactSectionFields>;
