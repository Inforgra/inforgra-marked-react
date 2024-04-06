import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fm from "front-matter";
import { readFile } from "fs/promises";
import { Markdown } from "inforgra-react-markdown/Markdown";

export const meta: MetaFunction = () => {
  return [
    { title: "Inforgra React Markdown" },
    { name: "description", content: "" },
  ];
};

export async function loader() {
  const readme = await readFile("./README.md", { encoding: "utf-8" });
  return { readme };
}

export default function Index() {
  const { readme } = useLoaderData<typeof loader>();
  const { attributes, body } = fm<TitleProps>(readme);
  return (
    <div className="container mx-auto p-8">
      <Title {...attributes} />
      <Markdown markdown={body} />
    </div>
  );
}

type TitleProps = {
  title?: string;
  image?: string;
  imageAlt?: string;
  date?: Date;
  tags?: string[];
}

const Title = ({ title, date, image, imageAlt, tags }: TitleProps) => {
  return (
    <>
      <div className="relative h-[180px] bg-gray-900 md:h-[280px] mb-12">
        <div className="absolute inset-0">
          <img className="h-full w-full object-cover object-top opacity-40 md:rounded-xl" src={image} alt={imageAlt} />
        </div>
        <div className="container relative z-10 flex h-full w-full max-w-full flex-col pt-6 px-8 md:pt-12">
          <div className="flex-1">
            <div className="text-sm uppercase text-gray-200 md:text-base">{date?.getFullYear()}년 {date?.getMonth()}월 {date?.getDay()}일</div>
            <div className="font-display text-3xl font-extrabold text-white md:text-4xl">{title}</div>
          </div>
          <div className="flex pb-4 md:pb-12 justify-end">
            {
              tags?.map((tag, index) => (
                <span key={index} className="p-2 mx-1 text-sm font-bold text-ellipsis overflow-hidden text-wrap bg-gray-500 text-gray-200 rounded-lg">{tag}</span>
              )
            )}
          </div>
        </div>
      </div>      
    </>
  );
}

