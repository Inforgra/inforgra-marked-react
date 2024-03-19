import { TokenizerExtension, TokenizerThis } from "marked";
import { TokensFootnote, TokensFootnoteRef } from "./index.d";
import { Renderer } from "./Markdown";

export let footnotes: TokensFootnote[] = [];

export const resetFootnotes = () => {
  footnotes = [];
}

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
    <sup>
      <a href={`#footnote-${id}`} id={`footnote-ref-${id}`} className="text-blue-800 hover:text-blue-600 ml-1">
        [{label}]
      </a>
    </sup>
  );
}

export const footnote: TokenizerExtension = {
  name: "footnote",
  level: "block",
  tokenizer(src: string) {
    const match = src.match(/^\[\^([^\]\n]+)\]:(?:[ \t]+|[\n]*?|$)([^\n]*?(?:\n|$)(?:\n*?[ ]{1,}[^\n]*)*)/);
    if (match) {
      const [raw, label, text=""] = match;
      const token: TokensFootnote = {
        type: "footnote",
        raw: raw,
        id: label,
        tokens: this.lexer.blockTokens(text),
      };
      footnotes.push(token);
      return token;
    }
  },
}

export const Footnote = (props: TokensFootnote) => {
  const { id, tokens } = props;
  return (
    <div className="flex flex-row" id={`footnote-${id}`}>
      <div className="pb-2 mr-1">{id}.</div>
      <div>
        <Renderer tokens={tokens} showParagraph={true} />
        <div className="pb-2">
          <a href={`#footnote-ref-${id}`}>
            <ReturnIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export const Footnotes = () => {
  footnotes.sort((a, b) => (a.id > b.id));
  if (footnotes.length === 0) {
    return (<></>);
  }
  return (
    <div className="border-t pt-6 mt-6 text-[0.8rem] text-gray-900">
      { footnotes.map((footnote, index) => <Footnote key={index} {...footnote} />) }
    </div>
  );
}

export const ReturnIcon = () => {
  return (
    <svg
      className="w-3 h-3 text-blue-600 hover:text-blue-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9,4 L4,9 L9,14 M18,19 L18,9 L5,9" transform="matrix(1 0 0 -1 0 23)"/>
    </svg>
  );
}
