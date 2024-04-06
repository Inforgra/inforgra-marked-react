import { TokenizerExtension } from "marked";
import { Tab, TokensTabbed } from "./index.d";
import { Renderer } from "./Markdown";
import { useState } from "react";
import clsx from "clsx";

const blockStartRule = /(===[^\n]*\n(([ \t]+[^\n]+\n)|\n)*)+/;
const blockRule = /^===[^\n]*\n(([ \t]+[^\n]*\n|\n))*(===[^\n]*\n([ \t]+[^\n]*\n|\n)*)*/;

export const blockTabbed: TokenizerExtension = {
  name: "tabbed",
  level: "block",
  start(src) {
    const match = src.match(blockStartRule);
    if (!match) {
      return;
    }
    return match.index;
  },
  tokenizer(src) {
    const match = src.match(blockRule);
    if (!match)
      return undefined;
    const tabs = match[0]
      .substring(3)
      .split("===")
      .map((tab) =>
        ({
          name: tab.substring(0, tab.indexOf("\n")),
          tokens: this.lexer.blockTokens(tab.substring(tab.indexOf("\n")+1)),
        } as Tab));
    const token = {
      type: "tabbed",
      raw: match[0],
      text: match[0],
      tabs: tabs,
    }
    return token;
  },
}

export const Tabbed = (props: TokensTabbed) => {
  const { tabs } = props;
  const [ selectedIndex, setSelectedIndex ] = useState(0);
  return (
    <div>
      <ul className="flex flex-wrap border-b-2 mb-4">
        { tabs.map((tab, index) => (
          <li className="me-1">
            <button
              className={clsx("inline-block p-2 rounded-t-lg bg-neutral-100 dark:bg-neutral-800", { "text-blue-600 dark:text-blue-400": selectedIndex === index, })}
              onClick={() => { setSelectedIndex(index) }}>
              {tab.name}
            </button>
          </li>)) }
      </ul>
      <div>
        { tabs.map((tab, index) => (
          <div className={clsx({"hidden": selectedIndex !== index})}>
            <Renderer tokens={tab.tokens} />
          </div>
          ))}
      </div>
    </div>
      )
}
