import Prism from "prismjs";

type CodePrismProps = {
  code: string;
  language: string;
}

export const CodePrism = (props: CodePrismProps) => {
  const { code, language } = props;
  const tokens = Prism.tokenize(code, Prism.languages[language]);
  return (
    <div>
      {code}
    </div>
  );
}
