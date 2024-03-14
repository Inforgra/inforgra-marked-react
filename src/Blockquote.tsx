import { Tokens } from "marked";
import { Renderer } from "./Markdown";

export const Blockquote = ({ tokens }: Tokens.Blockquote) => {
  return (
    <blockquote className="pt-1 pb-2 pl-2 my-4 border-s-4 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-300">
      <Renderer tokens={tokens} />
    </blockquote>
  );
}
