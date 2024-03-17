import { Token } from "marked";

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
