import { createClient } from "contentful";
import { NextApiHandler } from "next";
import {
  TypeContactSection,
  TypeContactSectionFields,
  TypeDesignerExperience,
  TypeDesignerExperienceFields,
  TypeDeveloperExperience,
  TypeDeveloperExperienceFields,
  TypeHeroSection,
  TypeHeroSectionFields,
  TypeInfoSection,
  TypeInfoSectionFields,
  TypeSocial,
  TypeSocialFields,
  TypeTechnology,
  TypeTechnologyFields,
} from "../../types";
import { TypeMenuItem, TypeMenuItemFields } from "../../types/TypeMenuItem";

export type PageContent = {
  menuItems: TypeMenuItem[]
  socials: TypeSocial[];
  heroSection: TypeHeroSection;
  infoSection: TypeInfoSection;
  technologies: TypeTechnology[];
  developerExperience: TypeDeveloperExperience[];
  designerExperience: TypeDesignerExperience[];
  contactSection: TypeContactSection;
};

const handler: NextApiHandler<PageContent | { error: string }> = async (
  req,
  res
) => {
  const { locale } = req.query;

  const contentfulClient = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
    space: process.env.CONTENTFUL_SPACE_ID ?? "",
  });

  if (!locale) res.status(400).json({ error: "Missing locale" });
  else {
    try {
      const menuItems = (await contentfulClient.getEntries<TypeMenuItemFields>({
        content_type: "menuItem",
        locale,
      })).items
      const socials = (await contentfulClient.getEntries<TypeSocialFields>({
        "content_type": "social",
        locale,
      })).items
      const heroSection =
        await contentfulClient.getEntry<TypeHeroSectionFields>(
          "3cXXYKLMuRHGgr8DFygSIK",
          {
            locale,
          }
        );
      const infoSection =
        await contentfulClient.getEntry<TypeInfoSectionFields>(
          "2IS3krjsQKzvpBUy9MKOSN",
          {
            locale,
          }
        );
      const technologies = (
        await contentfulClient.getEntries<TypeTechnologyFields>({
          content_type: "technology",
          locale,
        })
      ).items;
      const developerExperience = (
        await contentfulClient.getEntries<TypeDeveloperExperienceFields>({
          content_type: "developerExperience",
          locale,
        })
      ).items.sort((a, b) => (b.fields.rating??0) - (a.fields.rating??0));
      const designerExperience = (
        await contentfulClient.getEntries<TypeDesignerExperienceFields>({
          content_type: "designerExperience",
          locale,
        })
      ).items;
      const contactSection =
        await contentfulClient.getEntry<TypeContactSectionFields>(
          "GfutjrJv5F0CaPC6AIVvJ",
          {
            locale,
          }
        );

      res.status(200).json({
        menuItems,
        socials,
        heroSection,
        infoSection,
        technologies,
        developerExperience,
        designerExperience,
        contactSection,
      });
    } catch {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
};

export default handler;
