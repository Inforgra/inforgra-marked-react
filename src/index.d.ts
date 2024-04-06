import { Token } from "marked";

export type TokensAlert = {
  type: "alert";
  raw: string;
  name: string;
}

export type TokensFootnoteRef = {
  type: "footnoteRef",
  raw: string,
  id: string,
  label: string,
}

export type TokensFootnote = {
  type: "footnote",
  raw: string,
  id: string,
  tokens: Token[],
}

export type TokensHighlight = {
  type: "highlight",
  raw: string,
  tokens: Token[],
}

export type TokensTabbed = {
  type: "tabs",
  raw: string,
  tabs: Tab[],
}

export type Tab = {
  name: string,
  tokens: Token[]
}

export { Markdown } from "./Markdown";
