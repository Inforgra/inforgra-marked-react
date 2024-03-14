import { Tokens } from "marked";

export const Del = (props: Tokens.Del) => {
  const { text } = props;
  return (
    <del>{text}</del>
  );
}
