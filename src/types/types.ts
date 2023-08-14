import { StaticImageData } from "next/image";

export interface ProjectType {
  title: string;
  img: StaticImageData;
  type: string;
  tech: string;
  link: string;
}
