import { Lexer, Tokens } from "marked";
import { Renderer } from "./Markdown";

const ListItem = (props: Tokens.ListItem) => {
  const { task, checked, text } = props;
  const tokens = Lexer.lex(text);
  return (
    <li className="ml-6">
      <Renderer tokens={tokens} showParagraph={false} />
    </li>
  );
}

export const List = (props: Tokens.List) => {
  const { ordered, items, start } = props;
  if (ordered) {
    return (
      <ol className="list-decimal mb-1">
        { items.map((item, index) => <ListItem key={index} {...item} />) }
      </ol>
    );
  } else {
    return (
      <ul className="list-disc mb-1">
        { items.map((item, index) => <ListItem key={index} {...item} />) }
      </ul>
    );
  }
}
