import { Tokens } from "marked";
import { escapeHtml } from "./TextUtil";

export const Codespan = (props: Tokens.Codespan) => {
  const { text } = props;
  return (
    <span className="text-[0.9rem] bg-gray-200 p-1 rounded dark:bg-neutral-700 dark:text-gray-200">
      {escapeHtml(text)}
    </span>
  );
}
