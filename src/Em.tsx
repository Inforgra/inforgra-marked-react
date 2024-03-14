import { Tokens } from "marked";

export const Em = (props: Tokens.Em) => {
  const { text } = props;
  return (
    <em>{text}</em>
  )
}
