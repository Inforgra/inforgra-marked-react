import { Tokens } from "marked";
import { Renderer } from "./Markdown";

const alignFn = (align: Array<'center' | 'left' | 'right' | null>) => (index: number) => {
  switch (align[index]) {
    case 'left':
      return 'text-left';
    case 'right':
      return 'text-right';
    case 'center':
      return 'text-center';
    default:
      return 'text-left';
  }
}

export const Table = (props: Tokens.Table) => {
  const { align, header, rows } = props;
  const textAlign = alignFn(align);
  return (
    <table className="table-auto w-full my-4 border-collapse text-gray-400 dark:text-gray-200 bg-slate-50 dark:bg-neutral-900">
      <thead>
  <tr>
    {
      header.map((head, index) => (
        <th key={index} className={`${textAlign(index)} border border-slate-200 dark:border-slate-400 p-2`}>
          {head.tokens && <Renderer tokens={head.tokens} />}
        </th>
      ))
    }
  </tr>
      </thead>
      <tbody>
  {
    rows.map((row, index) => (
      <tr key={index}>
        {
          row.map((col, index) => (
            <td key={index} className={`${textAlign(index)} bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-200 border border-slate-200 dark:border-slate-400 p-2`}>
              {col.tokens && <Renderer tokens={col.tokens} showParagraph={false} />}
            </td>
          ))
        }
      </tr>
    ))
  }
      </tbody>
    </table>
  );
}
