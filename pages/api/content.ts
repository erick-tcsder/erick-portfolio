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
  TypeTechnology,
  TypeTechnologyFields,
} from "../../types";

export type PageContent = {
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
      ).items;
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
