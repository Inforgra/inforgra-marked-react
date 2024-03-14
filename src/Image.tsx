import { Tokens } from "marked";

export const Image = (props: Tokens.Image) => {
  const { href, title } = props;
  return (
    <img src={href} alt={title !== null ? title : "" } />
  );
}
