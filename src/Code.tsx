import React from "react";
import copy from "copy-to-clipboard";
import { Tokens } from "marked";
import Prism, { TokenStream } from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-haskell";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import { Markdown } from "./Markdown";
import clsx from "clsx";

export const Code = (props: Tokens.Code) => {

  const { language, filename, preview, linenumbers, font } = parseProps(props);

  return (
    <div className="border-2 rounded-lg shadow-md mb-8">
      {
        filename
        && (
          <div className="flex border-b p-2">
            <svg className="w-6 h-6 text-neutral-900 dark:text-neutral-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19" />
            </svg>
            <span className="grow font-bold text-gray-900 dark:text-neutral-200">{filename}</span>
            <div className="justify-self-end">
              <Copy text={props.text} />
            </div>
          </div>
        )
      }
      { language === "markdown"
        && preview
        && <div className="bg-white dark:bg-gray-200 border p-2"><Markdown markdown={props.text} /></div> }
      <div className="flex flex-row">
        {
          linenumbers &&
          <span className="flex flex-col pl-4 py-4 mr-2 text-right text-gray-400">
            { props.text.split("\n").map((_, index) => <span className="font-mono" key={index}>{index+1}</span>) }
          </span>
        }
        <pre className={clsx("grow p-4 overflow-auto", font && `font-['${font}']`)}>
          { language && <RenderPrism code={props.text} language={language} /> || <>{props.text}</> }
        </pre>
        { !filename && <div className="p-2"><Copy text={props.text} /></div> }
      </div>
    </div>
        );
}

type CopyProps = {
  text: string;
}

const Copy = (props: CopyProps) => {

  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = () => {
    copy(props.text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  }

  return (
    <div className="">
      <button onClick={handleCopy}>
        {
          isCopied
          ? <svg className="w-6 h-6 text-gray-100 fill-blue-400"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
            >
            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" />
            <path d="M6.08008 15L8.03008 16.95L11.9201 13.05" />
          </svg>

          : <svg className="w-6 h-6 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="1.5"
                 strokeLinecap="round"
                 strokeLinejoin="round"
            >
            <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" />
            <path d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z" />
          </svg>
        }
      </button>
    </div>
  );
}

const parseProps = (props: Tokens.Code) => {
  let language = undefined;
  let filename = undefined;
  let preview = false;
  let linenumbers = false;
  let font = undefined;
  if (props.lang !== undefined) {
    props.lang.split(" ").map((token, index) => {
      if (index === 0 && Object.keys(Prism.languages).includes(token)) {
        language = token;
      } else {
        const kv = token.split("=");
        switch (kv[0]) {
          case "filename":
            filename = kv[1];
            break;
          case "preview":
            preview = true;
            break;
          case "linenumbers":
            linenumbers =true;
            break;
          case "font":
            font = kv[1];
            break;
          default:
            break;
        }
      }
    });
  }
  return { language, filename, preview, linenumbers, font }
}

type RenderPrismProps = {
  code: string;
  language: string;
}

const RenderPrism = (props: RenderPrismProps) => {
  const token = Prism.tokenize(props.code, Prism.languages[props.language]);
  return (<RenderPrismToken token={token} />);
}

type RenderPrismTokensProps = {
  token: TokenStream;
}

const RenderPrismToken = ({ token }: RenderPrismTokensProps) => {
  if (typeof token === 'string') {
    return <>{token}</>;
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
        return <RenderPrismToken token={token.content} />
    }
  }
}
