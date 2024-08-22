import { marked, Token, Tokens } from "marked";
import { Alert, alert } from "./Alert";
import { Blockquote } from "./Blockquote";
import { Code } from "./Code";
import { Codespan } from "./Codespan";
import { Del } from "./Del";
import { Em } from "./Em";
import { footnote, FootnoteRef, footnoteRef, Footnotes, resetFootnotes } from "./Footnote";
import { Heading } from "./Heading";
import { Hr } from "./Hr";
import { Html } from "./Html";
import { Image } from "./Image";
import { TokensFootnoteRef, TokensHighlight, TokensTabbed } from "./index.d";
import { BlockKatex, blockKatex, InlineKatex, inlineKatex } from "./Katex";
import { Link } from "./Link";
import { List } from "./List";
import { Paragraph } from "./Paragraph";
import { Space } from "./Space";
import { Strong } from "./Strong";
import { Table } from "./Table";
import { Text } from "./Text";
import { inlineHighlight, Highlight } from "./Highlight";
import { blockTabbed, Tabbed } from "./Tabbed";

marked.use({ extensions: [
  alert,
  inlineKatex,
  blockKatex,
  footnoteRef,
  footnote,
  inlineHighlight,
  blockTabbed,
] });

export type MarkdownProps = {
  markdown: string;
  imageBase?: string;
}

export const Markdown = ({ markdown, imageBase }: MarkdownProps) => {
  resetFootnotes();
  const tokens = marked.Lexer.lex(markdown) as Token[];
  return (
    <>
      <Renderer tokens={tokens} showParagraph={true} imageBase={imageBase} />
    </>
  );
}

type RendererProps = {
  tokens: Token[];
  showParagraph?: boolean;
  imageBase?: string;
}

export const Renderer = ({tokens, showParagraph = true, imageBase}: RendererProps) => {
  return (
    <>{
      tokens.map((token, index) => {
        return <TokenRenderer key={index} token={token} showParagraph={showParagraph} imageBase={imageBase} />
      })
    }</>
  );
}

type TokenRendererProps = {
  token: Token;
  showParagraph?: boolean;
  imageBase?: string;
}

const TokenRenderer = (props: TokenRendererProps) => {
  const { token, showParagraph, imageBase } = props;
  switch (token.type) {
    case "alert":
      return <Alert {...token} />;
    case "blockquote":
      return <Blockquote {...token} />;
    case "code":
      return <Code {...(token as Tokens.Code)} />;
    case "del":
      return <Del {...(token as Tokens.Del)} />;
    case "codespan":
      return <Codespan {...(token as Tokens.Codespan)} />;
    case "em":
      return <Em {...(token as Tokens.Em)} />;
    case "footnote":
      return;
    case "footnoteRef":
      return <FootnoteRef {...(token as TokensFootnoteRef)} />;
    case "heading":
      return <Heading {...(token as Tokens.Heading)} />;
    case "highlight":
      return <Highlight {...(token as TokensHighlight)} />;
    case "hr":
      return <Hr />;
    case "html":
      return <Html {...(token as Tokens.HTML)} />;
    case "inlineKatex":
      return <InlineKatex {...(token as Tokens.Generic)} />;
    case "blockKatex":
      return <BlockKatex {...(token as Tokens.Generic)} />;
    case "image":
      return <Image {...(token as Tokens.Image)} imageBase={imageBase} />;
    case "link":
      return <Link {...(token as Tokens.Link)} />;
    case "list":
      return <List {...(token as Tokens.List)} />;
    case "paragraph":
      return <Paragraph token={token as Tokens.Paragraph} showParagraph={showParagraph} imageBase={imageBase} />;
    case "space":
      return <Space />
    case "strong":
      return <Strong {...(token as Tokens.Strong)} />;
    case "tabbed":
      return <Tabbed {...(token as TokensTabbed)} />;
    case "table":
      return <Table {...(token as Tokens.Table)} />;
    case "text":
      return <Text {...(token as Tokens.Text)} />;
    default:
      return (<></>);
  }
}
