import { Tokens } from "marked";

export const Code = (props: Tokens.Code) => {
  return (
    <div className="relative overflow-auto mt-4 mb-2">
      <pre className="bg-[#2d2d2d] text-[#ccc] whitespace-pre rounded-lg p-3">
        {props.text}
      </pre>
    </div>
  );
}
