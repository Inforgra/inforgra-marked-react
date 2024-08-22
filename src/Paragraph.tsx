import { Tokens } from "marked";
import { Renderer } from "./Markdown";

type Props = {
  token: Tokens.Paragraph;
  showParagraph?: boolean;
  imageBase?: string;
}

export const Paragraph = ({token, showParagraph=true, imageBase}: Props) => {
  const { text, tokens } = token;
  if (showParagraph) {
    return (
      <p className="pb-4">{
        tokens.length === 0
        ? text
        : <Renderer tokens={tokens} showParagraph={showParagraph} imageBase={imageBase} />
      }</p>
    );
  } else {
    return (
      <>{
        tokens.length === 0
        ? text
        : <Renderer tokens={tokens} showParagraph={showParagraph} imageBase={imageBase} />
      }</>
    );
  }
}
