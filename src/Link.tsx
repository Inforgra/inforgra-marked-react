import { Tokens } from "marked";
import { Renderer } from "./Markdown";

export const Link = (props: Tokens.Link) => {
  const { href, tokens } = props;
  return (
    <a className="text-blue-700 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-100" href={href}>
      <Renderer tokens={tokens} />
    </a>
  );
}
