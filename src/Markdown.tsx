import { marked, Token, TokenizerExtension, Tokens } from "marked";
import { Blockquote } from "./Blockquote";
import { Code } from "./Code";
import { Codespan } from "./Codespan";
import { Del } from "./Del";
import { Em } from "./Em";
import { Heading } from "./Heading";
import { Hr } from "./Hr";
import { Html } from "./Html";
import { Image } from "./Image";
import { Link } from "./Link";
import { List } from "./List";
import { Paragraph } from "./Paragraph";
import { Space } from "./Space";
import { Strong } from "./Strong";
import { Table } from "./Table";
import { Text } from "./Text";
import { Alert } from "./Alert";

const alert: TokenizerExtension = {
  name: 'alert',
  level: 'inline',
  tokenizer(src) {
    const match = src.match(/\[\!([0-9A-Za-z]+)\]/);
    if (match) {
      return {
        type: 'alert',
        raw: match[0],
        text: match[1],
        tokens: [],
      }
    }
    return undefined;
  }
}

marked.use({ extensions: [ alert ] });

export type MarkdownProps = {
  markdown: string;
}

export const Markdown = ({ markdown }: MarkdownProps) => {
  const tokens = marked.Lexer.lex(markdown) as Token[];
  return (
    <Renderer tokens={tokens} />
  );
}

type RendererProps = {
  tokens: Token[];
}

export const Renderer = (props: RendererProps) => {
  const { tokens } = props;
  return (
    <>{
      tokens.map((token, index) => {
        return <TokenRenderer key={index} token={token} />
      })
    }</>
  );
}

type TokenRendererProps = {
  token: Token;
}

const TokenRenderer = (props: TokenRendererProps) => {
  const { token } = props;
  switch (token.type) {
    case "alert":
      return <Alert {...(token as Tokens.Generic)} />;
    case "blockquote":
      return <Blockquote {...(token as Tokens.Blockquote)} />;
    case "code":
      return <Code {...(token as Tokens.Code)} />;
    case "del":
      return <Del {...(token as Tokens.Del)} />;
    case "codespan":
      return <Codespan {...(token as Tokens.Codespan)} />;
    case "em":
      return <Em {...(token as Tokens.Em)} />;
    case "heading":
      return <Heading {...(token as Tokens.Heading)} />;
    case "hr":
      return <Hr />;
    case "html":
      return <Html {...(token as Tokens.HTML)} />;
    case "image":
      return <Image {...(token as Tokens.Image)} />;
    case "link":
      return <Link {...(token as Tokens.Link)} />;
    case "list":
      return <List {...(token as Tokens.List)} />;
    case "paragraph":
      return <Paragraph {...(token as Tokens.Paragraph)} />;
    case "space":
      return <Space />
    case "strong":
      return <Strong {...(token as Tokens.Strong)} />;
    case "table":
      return <Table {...(token as Tokens.Table)} />;
    case "text":
      return <Text {...(token as Tokens.Text)} />;
    default:
      return (<></>);
  }
}
