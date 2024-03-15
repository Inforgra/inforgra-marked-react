import { Tokens } from "marked";
import Prism, { TokenStream } from "prismjs";

// TODO: 모든 언어를 자동으로 로딩하도록 한다.
//
// `prismjs` 에서 지원하는 몇 가지 언어들을 `import` 하여 사용하고 있다.
// 모든 언어를 자동으로 로딩하도록 추가 할 필요가 있다.
//
import "prismjs/components/prism-bash";
import "prismjs/components/prism-haskell";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-typescript";

export const Code = (props: Tokens.Code) => {
  return (
    <pre className="bg-[#2d2d2d] text-sm text-[#ccc] whitespace-pre rounded-lg p-2">
      {
        props.lang !== undefined && Object.keys(Prism.languages).includes(props.lang)
        ? <RenderPrism code={props.text} language={props.lang} />
        : <>{props.text}</>
      }
    </pre>
  );
}

type RenderPrismProps = {
  code: string;
  language: string;
}

const RenderPrism = (props: RenderPrismProps) => {
  const token = Prism.tokenize(props.code, Prism.languages[props.language]);
  return (
    <RenderPrismToken token={token} />
  );
}

type RenderPrismTokensProps = {
  token: TokenStream;
}

const RenderPrismToken = ({ token }: RenderPrismTokensProps) => {
  if (typeof token === 'string') {
    return <span>{token}</span>;
  } else if (token instanceof Array) {
    return token.map((token, index) => (
      <RenderPrismToken key={index} token={token} />
    ));
  } else {
    switch (token.type) {
      case 'comment':
      case 'block-comment':
      case 'prolog':
      case 'cdata':
        return <span className="text-[#999]"><RenderPrismToken token={token.content} /></span>;
      case 'punctuation': // markdown
        return <span className="text-[#e2777a]"><RenderPrismToken token={token.content} /></span>;
      case 'tag':
      case 'attr-name':
      case 'namespace':
      case 'deleted':
      case 'list': // markdown
      case 'operator': // markdown
        return <span className="text-[#e2777a]"><RenderPrismToken token={token.content} /></span>;
      case 'function-name':
        return <span className="text-[#6196cc]"><RenderPrismToken token={token.content} /></span>;
      case 'boolean':
      case 'number':
      case 'function':
      case 'function-variable':
        return <span className="text-[#f08d49]"><RenderPrismToken token={token.content} /></span>;
      case 'property':
      case 'class-name':
      case 'constant':
      case 'symbol':
      case 'selector':
      case 'important':
      case 'atrule':
      case 'keyword':
      case 'builtin':
      case 'title':
        return <span className="text-[#cc99cd]"><RenderPrismToken token={token.content} /></span>;
      case 'string':
      case 'char':
      case 'attr-value':
      case 'regex':
      case 'variable':
        return <span className="text-[#67cdcc]"><RenderPrismToken token={token.content} /></span>;
      case 'url':
        return <span className="text-[#51afef]"><RenderPrismToken token={token.content} /></span>;
      default:
        return <span>Unkown token - type "{ token.type }"</span>;
    }
  }
}
