import { Lexer, Tokens } from "marked";
import { Renderer } from "./Markdown";

const ListItem = (props: Tokens.ListItem) => {
  const tokens = Lexer.lex(props.text);
  return (
    <li className="ml-6">
      <Renderer tokens={tokens} />
    </li>
  );
}

export const List = (props: Tokens.List) => {
  const { ordered, items } = props;
  if (ordered) {
    return (
      <ol className="list-decimal">
        { items.map((item, index) => <ListItem key={index} {...item} />) }
      </ol>
    );
  } else {
    return (
      <ul className="list-disc">
        { items.map((item, index) => <ListItem key={index} {...item} />) }
      </ul>
    );
  }
}
