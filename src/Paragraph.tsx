import { Tokens } from "marked";
import { Renderer } from "./Markdown";

export const Paragraph = (props: Tokens.Paragraph) => {
  const { text, tokens } = props;
  return (
    <p className="mt-2">{
      tokens.length === 0
      ? text
      : <Renderer tokens={tokens} />
    }</p>
  );
}
