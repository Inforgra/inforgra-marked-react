import { TokenizerExtension } from "marked";
import { TokensHighlight } from "./index.d";
import { Renderer } from "./Markdown";

export const inlineStartRule = /==[^=]+==/;
export const inlineRule = /^==([^=]+)==/;

export const inlineHighlight: TokenizerExtension = {
  name: "inlineHighlight",
  level: "inline",
  start(src) {
    const match = src.match(inlineStartRule);
    if (!match)
      return;
    return match.index;
  },
  tokenizer(src) {
    const match = src.match(inlineRule);
    if (!match)
      return undefined;
    const token = {
      type: "highlight",
      raw: match[0],
      text: match[1].trim(),
      tokens: [],
    }
    this.lexer.blockTokens(token.text, token.tokens);
    return token;
  }
}

export const Highlight = (props: TokensHighlight) => {
  const { tokens } = props;
  return (
    <span className="p-1 bg-yellow-200 dark:bg-yellow-200/60">
      <Renderer tokens={tokens} showParagraph={false} />
    </span>
  )
}
