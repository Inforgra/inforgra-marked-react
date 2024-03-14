import { Tokens } from "marked";
import { escapeHtml } from "./TextUtil";

export const Text = ({text}: Tokens.Text) => {
  return <>{escapeHtml(text)}</>;
}
