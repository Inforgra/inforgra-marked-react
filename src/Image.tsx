import { Tokens } from "marked";

export type Props = Tokens.Image & { imageBase?: string }

export const Image = ({ href, title, imageBase }: Props) => {
  console.log(href, title);
  return (
    <>
    { title
    ? <div className="flex flex-col"><img src={ imageBase ? imageBase + href : href } alt={title} /><span className="mx-auto p-4">{title}</span></div>
    : <img src={ imageBase ? imageBase + href : href } />
    }
    </>
  );
}
