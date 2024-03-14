import { Tokens } from "marked";
import { escapeHtml } from "./TextUtil";

export const Codespan = (props: Tokens.Codespan) => {
  const { text } = props;
  return (
    <code className="text-[0.9rem] font-mono bg-gray-100 p-1 rounded dark:bg-neutral-700 dark:text-gray-200">
      {escapeHtml(text)}
    </code>
  );
}
