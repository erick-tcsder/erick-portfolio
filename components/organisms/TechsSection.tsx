import Image from "next/image";
import React from "react";
import { TypeTechnology } from "../../types";
import Link from "../atoms/Link";

export interface TechsSectionProps {
  technologies: TypeTechnology[];
  title: string;
}

export const TechsSection: React.FC<TechsSectionProps> = (props) => {
  return (
    <div className="py-[30px] md:py-[50px] lg:py-[60px] flex flex-col justify-center items-center">
      <div className="text-xl md:text-3xl font-bold bg-gradient-to-tl bg-clip-text text-transparent from-blue to-fuscia inline-flex my-5">
        {props.title}
      </div>
      <div className="flex flex-row mx-0 md:mx-16 lg:mx-24 w-auto gap-y-5 gap-x-14 flex-wrap justify-center mt-3 md:mt-10">
        {props.technologies.map((t) => (
          <Link
            href={t.fields.url ?? "#"}
            key={t.sys.id}
            style={{
              minHeight: t.fields.img.fields.file.details.image?.height,
              minWidth: t.fields.img.fields.file.details.image?.width,
            }}
            target='_blank'
          >
            <Image
              src={"https:" + t.fields.img.fields.file.url}
              height={t.fields.img.fields.file.details.image?.height}
              width={t.fields.img.fields.file.details.image?.width}
              alt={t.fields.name}
              className="saturate-50 lg:saturate-0 hover:saturate-100 transition-all"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
