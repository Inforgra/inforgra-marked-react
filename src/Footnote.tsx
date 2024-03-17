import { TokenizerExtension, TokenizerThis } from "marked";
import { TokensFootnote, TokensFootnoteRef } from "./index.d";
import { Renderer, footnotes } from "./Markdown";

const footnoteRefRule = /^\[\^([^\]\n]+)\]/;

export const footnoteRef: TokenizerExtension = {
  name: "footnoteRef",
  level: "inline",
  tokenizer(this: TokenizerThis, src: string) {
    const match = src.match(footnoteRefRule);
    if (match) {
      if (src.charAt(match[0].length) === ":") {
        return;
      }
      const [raw, label] = match;
      return {
        type: "footnoteRef",
        raw: raw,
        id: label,
        label: label,
      } as TokensFootnoteRef;
    }
  }
}

export const FootnoteRef = (props: TokensFootnoteRef) => {
  const { id, label } = props;
  return (
    <sup><a href={`#footnote-${id}`} id={`footnote-ref-${id}`}>[{label}]</a></sup>
  );
}

export const footnote: TokenizerExtension = {
  name: "footnote",
  level: "block",
  tokenizer(src: string) {
    const match = src.match(/^\[\^([^\]\n]+)\]:(?:[ \t]+|[\n]*?|$).*(\n[ ]+[^\n]*)*/)
    if (!match)
      return;
    const [raw, id] = match;
    const text = raw.substring(raw.indexOf(":")+1).replace("\n", "\n\n");
    const token: TokensFootnote = {
      type: "footnote",
      raw: raw,
      id: id,
      tokens: this.lexer.blockTokens(text),
    };
    footnotes.push(token);
    return token;
  }
}

export const Footnote = (props: TokensFootnote) => {
  const { id, tokens } = props;
  return (
    <div className="flex flex-row p-1" id={`footnote-${id}`}>
      <div className="mt-2 mr-1">{id}.</div>
      <div>
        <Renderer tokens={tokens} />
      </div>
    </div>
  );
}
