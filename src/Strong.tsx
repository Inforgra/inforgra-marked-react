import { Tokens } from "marked";

export const Strong = (props: Tokens.Strong) => {
  const { text } = props;
  return (
    <strong>{text}</strong>
  );
}
