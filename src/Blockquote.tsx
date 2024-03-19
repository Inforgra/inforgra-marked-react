import { Token, Tokens } from "marked";
import { Renderer } from "./Markdown";
import clsx from "clsx";

export const Blockquote = (props: Token) => {
  const { tokens } = props as Tokens.Blockquote;
  let alert = undefined;
  if (tokens[0].type === 'paragraph') {
    let paragraph = tokens[0] as Tokens.Paragraph
    if (paragraph.tokens[0].type === "alert") {
      alert = paragraph.tokens[0].name;
    }
  }
  return (
    <blockquote className={clsx(
      "pt-1 pl-2 my-4 border-s-4",
      { "border-gray-400"   : alert === undefined  },
      { "border-blue-400"   : alert === "NOTE"  },
      { "border-green-400"  : alert === "TIP"  },
      { "border-purple-400" : alert === "IMPORTANT"  },
      { "border-orange-400" : alert === "WARNING"  },
      { "border-red-400"    : alert === "CAUTION"  },
    )}>
      <Renderer tokens={tokens} />
    </blockquote>
  );
}
