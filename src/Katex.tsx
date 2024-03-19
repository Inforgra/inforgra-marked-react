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
    const possibleKatex = src.substring(match.index);
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

const options = {
  displayMode: true,
  output: "mathml",
  throwOnError: false,
}

export const InlineKatex = (props: Tokens.Generic) => {
  const { text } = props;
  let html = undefined;
  try {
    html = katex.renderToString(text, { ...options, displayMode: false });
  } catch (e) {
    if (e instanceof katex.ParseError) {
      html = "Error in LaTeX '" + text + "': " + e.message;
    }
  }
  return (
    <code className="text-[0.9rem]" dangerouslySetInnerHTML={{__html: html}} />
  );
}


export const BlockKatex = (props: Tokens.Generic) => {
  const { text } = props;
  let html;
  try {
    html = katex.renderToString(text, options);
  } catch (e) {
    if (e instanceof katex.ParseError) {
      html = "Error in LaTeX '" + text + "': " + e.message;
    } else {
      throw e;
    }
  }
  return (
    <div className="text-[1.1rem]" dangerouslySetInnerHTML={{__html: html}} />
  );
}
