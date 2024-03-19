import { Tokens } from "marked";
import { Renderer } from "./Markdown";

export const Heading = (props: Tokens.Heading) => {
  switch (props.depth) {
    case 1:
      return <H1 {...props} />;
    case 2:
      return <H2 {...props} />;
    case 3:
      return <H3 {...props} />;
    case 4:
      return <H4 {...props} />;
    case 5:
      return <H5 {...props} />;
    case 6:
      return <H6 {...props} />;                        
  }
  return <></>;
}

const H1 = ({tokens}: Tokens.Heading) => {
  return (
    <h1 className="text-4xl font-bold mt-6 mb-2">
      <Renderer tokens={tokens} />
    </h1>
  );
}

const H2 = ({tokens}: Tokens.Heading) => {
  return (
    <h2 className="text-3xl font-bold mt-6 mb-2">
      <Renderer tokens={tokens} />
    </h2>
  );
}

const H3 = ({tokens}: Tokens.Heading) => {
  return (
    <h3 className="text-2xl font-bold mt-6 mb-2">
      <Renderer tokens={tokens} />
    </h3>
  );
}

const H4 = ({tokens}: Tokens.Heading) => {
  return (
    <h4 className="text-xl font-bold mt-6 mb-2">
      <Renderer tokens={tokens} />
    </h4>
  );
}

const H5 = ({tokens}: Tokens.Heading) => {
  return (
    <h5 className="text-lg font-bold mt-6 mb-2">
      <Renderer tokens={tokens} />
    </h5>
  );
}

const H6 = ({tokens}: Tokens.Heading) => {
  return (
    <h6 className="text-lg font-bold mt-6 mb-2">
      <Renderer tokens={tokens} />
    </h6>
  );
}
