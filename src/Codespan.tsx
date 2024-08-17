import { Tokens } from "marked";
import { escapeHtml } from "./TextUtil";

export const Codespan = (props: Tokens.Codespan) => {
  const { text } = props;
  return (
    <span className="codespan">
      {escapeHtml(text)}
    </span>
  );
}
