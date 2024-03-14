import { Tokens } from "marked";

export const Html = (props: Tokens.HTML) => {
  const { text } = props;
  return (
    <div dangerouslySetInnerHTML={{__html: text}} />
  );
}
