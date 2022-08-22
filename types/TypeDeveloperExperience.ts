import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";
import { TypeWorkLabelFields } from "./TypeWorkLabel";

export interface TypeDeveloperExperienceFields {
    title: Contentful.EntryFields.Symbol;
    slug: Contentful.EntryFields.Symbol;
    link?: Contentful.EntryFields.Symbol;
    thumbnail: Contentful.Asset;
    startDate: Contentful.EntryFields.Date;
    endDate?: Contentful.EntryFields.Date;
    labels?: Contentful.Entry<TypeWorkLabelFields>[];
    description?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    skills?: Contentful.EntryFields.Symbol[];
    gallery?: Contentful.Asset[];
    rating?: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;
}

export type TypeDeveloperExperience = Contentful.Entry<TypeDeveloperExperienceFields>;
