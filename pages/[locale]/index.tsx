import { Asset, createClient } from "contentful";
import type { GetServerSideProps, NextPage } from "next";
import { useEffect, useRef } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
import Swal from "sweetalert2";
import Router from "next/router";
import { usePageContent } from "../../hooks/usePageContent";
import { LoadingLayout } from "../../components/layouts/LoadingLayout";
import { saveAs } from "file-saver";
import HeroSection from "../../components/organisms/HeroSection";
import { TypeContactSection, TypeDeveloperExperience, TypeHeroSection, TypeInfoSection, TypeTechnology } from "../../types";
import { InfoSection } from "../../components/organisms/InfoSection";
import { TechsSection } from "../../components/organisms/TechsSection";
import { DevExpSection } from "../../components/organisms/DevExpSection";
import { DesignerSection } from "../../components/organisms/DesignerSection";
import { ContactSection } from "../../components/organisms/ContactSection";
import { useHeaderContext } from "../../hooks/useHeaderContext";
import _ from "lodash";
import dayjs from "dayjs";

interface LocaleHomeProps {
  locale?: string;
  loaderImage?: Asset;
  allLocales?: string[];
}

const saveFile = (url: string, locale: string) => {
  saveAs(url, `Resume_${locale}.pdf`);
};

export const localeIcons : Record<string,string> = {
  'en-US': '🇺🇸',
  'es-ES': '🇪🇸',
}

const LocaleHome: NextPage<LocaleHomeProps> = (props) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const { content, loading, handleChangeLocale } = usePageContent({
    locale: props.locale ?? "en-US",
  });

  useEffect(()=>{
    handleChangeLocale(props.locale ?? "en-US")
  },[handleChangeLocale, props.locale])

  const {
    currentHeader
  } = useHeaderContext()
  useEffect(()=>{
    if(timeoutRef.current) clearTimeout(timeoutRef.current)
    const timeout = setTimeout(()=>{
      window.history.replaceState(null,'',currentHeader.link)
    },500)
    timeoutRef.current = timeout
  },[currentHeader])

  useEffect(() => {
    if (!props.locale) {
      Swal.fire({
        title: "Error",
        text: "The language you are looking for isn't supported. You are being redirected to default language (en-US).",
        icon: "error",
      });
      Router.push("/en-US");
    }
  }, [props]);

  return loading ? (
    <LoadingLayout
      loaderImage={props.loaderImage as Asset}
      loadingText={props.locale==='es-ES' ? 'Cargando ...' : "Loading ..."}
    />
  ) : (
    <MainLayout
      mail={content?.heroSection.fields.myMail ?? ""}
      menuItems={content?.menuItems ?? []}
      onDownloadResumeCLick={() => {
        saveFile(
          "https:" + content?.heroSection.fields.resume.fields.file.url,
          'erick-fonseca-portfolio-'+dayjs().format('YYYY')+(props.locale ?? "en-US"),
        );
      }}
      socials={content?.socials ?? []}
      locale={props.locale ?? "en-US"}
      avatar={content?.heroSection.fields.avatar as Asset}
      allLocales={props.allLocales ?? []}
    >
      <HeroSection section={content?.heroSection as TypeHeroSection}
        handleDownloadResume={() => {
          saveFile(
            "https:" + content?.heroSection.fields.resume.fields.file.url,
            props.locale ?? "en-US",
          );
        }}
        locale={props.locale ?? "en-US"}
      />
      <InfoSection section={content?.infoSection as TypeInfoSection} locale={props.locale ?? 'en-US'} />
      <TechsSection
        technologies={content?.technologies as TypeTechnology[]}
        title={
          props.locale === "es-ES"
            ? "Softwares & Tecnologías"
            : "Softwares & Technologies"
        }
      />
      <DevExpSection
        locale={props.locale ?? 'en-US'}
        exps={content?.developerExperience as TypeDeveloperExperience[]}
        title={
          props.locale === "es-ES"
            ? "Dónde he trabajado"
            : "Where I've worked"
        }
      />
      <DesignerSection
        experience={content?.designerExperience as TypeDeveloperExperience[]}
        title={
          props.locale === "es-ES"
            ? "Diseñador Gráfico"
            : "Graphic Designer Works"
        }
        behanceButtonText={
          props.locale === "es-ES"
            ? "Perfil de Behance"
            : "Behance Profile"
        }
        behanceButtonLink={content?.socials.find(s=>s.fields.name.toLowerCase() === 'behance')?.fields.url ?? '#'}
      />
      <ContactSection
        locale={props.locale ?? 'en-US'}
        section={content?.contactSection as TypeContactSection}
        title={
          props.locale === "es-ES"
            ? "Trabajemos Juntos!"
            : "Let's Work Together!"
        }
      />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<LocaleHomeProps> = async (
  ctx
) => {
  let animationLink = null;
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID as string,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
    });
    animationLink = await client.getAsset("4YKQQ2eKs7LprySGMJJvKw");
    const locales = await client.getLocales();
    const currentLocale = locales.items.find(
      (locale) => locale.code === ctx?.params?.locale
    );
    if (currentLocale) {
      return {
        props: {
          locale: currentLocale?.code,
          allLocales: locales.items.map((locale) => locale.code),
          loaderImage: animationLink,
        },
      };
    } else {
      throw new Error("Locale not found");
    }
  } catch (e) {
    console.error("error",e);
    return {
      props: {
        loaderImage: animationLink as Asset,
      },
    };
  }
};

export default LocaleHome;
