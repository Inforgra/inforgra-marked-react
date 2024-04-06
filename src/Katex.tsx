import { TokenizerExtension, Tokens } from "marked";
import katex from "katex";

const inlineStartRule = /(?<=\s|^)\${1,2}(?!\$)/;
const inlineRule = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])+?)(?<!\$)\1(?=[\s?!\.,:]|$)/;
const blockRule = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;

export const blockKatex: TokenizerExtension = {
  name: 'blockKatex',
  level: 'block',
  start(src) {
    return src.indexOf('\n$');
  },
  tokenizer(src) {
    const match = src.match(blockRule);
    if (match) {
      const token = {
  type: 'blockKatex',
  raw: match[0],
  text: match[2].trim(),
  tokens: []
      }
      return token;
    }
    return undefined;
  },
}

export const inlineKatex: TokenizerExtension = {
  name: 'inlineKatex',
  level: 'inline',
  start(src) {
    const match = src.match(inlineStartRule);
    if (!match)
      return;
    let index = match.index || 0;
    const possibleKatex = src.substring(index);
    if (possibleKatex.match(inlineRule)) {
      return match.index;
    }
  },
  tokenizer(src) {
    const match = src.match(inlineRule);
    if (match) {
      const token = {
        type: 'inlineKatex',
        raw: match[0],
        text: match[2].trim(),
        tokens: []
      }
      return token;
    }
    return undefined;
  },
}

export const InlineKatex = (props: Tokens.Generic) => {
  const { text } = props;
  let html = "";
  try {
    html = katex.renderToString(text, { displayMode: false, output: "mathml", throwOnError: false });
  } catch (e) {
    if (e instanceof katex.ParseError) {
      html = "Error in LaTeX '" + text;
    }
  }
  return (
    <code className="text-[0.9rem]" dangerouslySetInnerHTML={{__html: html}} />
  );
}


export const BlockKatex = (props: Tokens.Generic) => {
  const { text } = props;
  let html = "";
  try {
    html = katex.renderToString(text, { displayMode: true, output: "mathml", throwOnError: false });
  } catch (e) {
    if (e instanceof katex.ParseError) {
      html = "Error in LaTeX '" + text;
    } else {
      throw e;
    }
  }
  return (
    <div className="text-[1.1rem]" dangerouslySetInnerHTML={{__html: html}} />
  );
}
