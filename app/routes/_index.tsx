import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { readFile } from "fs/promises";
import { Markdown } from "inforgra-marked-react/Markdown";

export const meta: MetaFunction = () => {
  return [
    { title: "marked-react" },
    { name: "description", content: "marked-react example" },
  ];
};

export async function loader() {
  const readme = await readFile("./README.md", { encoding: "utf-8" });
  return { readme };
}

export default function Index() {
  const { readme } = useLoaderData<typeof loader>();
  return (
    <div className="container mx-auto p-8">
      <Markdown markdown={readme} />
    </div>
  );
}
