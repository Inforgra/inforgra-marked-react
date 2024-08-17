import { Tokens } from "marked";
import { Renderer } from "./Markdown";

type ParagraphProps = {
  token: Tokens.Paragraph;
  showParagraph?: boolean;
}

export const Paragraph = ({token, showParagraph=true}: ParagraphProps) => {
  const { text, tokens } = token;
  if (showParagraph) {
    return (
      <p className="pb-4">{
        tokens.length === 0
        ? text
        : <Renderer tokens={tokens} showParagraph={showParagraph}/>
      }</p>
    );
  } else {
    return (
      <>{
        tokens.length === 0
        ? text
        : <Renderer tokens={tokens} showParagraph={showParagraph}/>
      }</>
    );
  }
}
