import { Meta, StoryObj } from "@storybook/react-vite";
import { Markdown } from "./Markdown";

const meta: Meta = {
  title: 'inforgra-marked-react/Markdown',
  component: Markdown,
};

type Story = StoryObj<typeof meta>;

export const Blockquote: Story = {
  args: { markdown: "> Everything should be made as simple as possible, but not simpler - 알버트 아인슈타인" },
}

export const BlockquoteAlert: Story = {
  args: { markdown: `
> [!NOTE]
> Everything should be made as simple as possible, but not simpler - 알버트 아인슈타인

> [!TIP]
> Everything should be made as simple as possible, but not simpler - 알버트 아인슈타인

> [!IMPORTANT]
> Everything should be made as simple as possible, but not simpler - 알버트 아인슈타인

> [!WARNING]
> Everything should be made as simple as possible, but not simpler - 알버트 아인슈타인

> [!CAUTION]
> Everything should be made as simple as possible, but not simpler - 알버트 아인슈타인
  `},
}

export const Code: Story = {
  args: { markdown: "```\nCode Sample\n```" },
}

export const CodeFilename: Story = {
  args: { markdown: "```filename=README.md\nCode Sample\n```" },
}

export const CodeLinenumbers: Story = {
  args: { markdown: "```linenumbers\nFirst\nSecond\nThird\n\n```" },
}

export const CodePrismBash: Story = {
  args: { markdown: "```bash\ncat /dev/proc/cpuinfo\n```" },
}

export const CodePrismHaskell: Story = {
  args: { markdown: `
\`\`\`haskell linenumbers
quicksort :: (Ord a) => [a] -> [a]
quicksort [] = []
quicksort (x:xs) =
  let smallerSorted = quicksort [a | a <- xs, a <= x]
      biggerSorted = quicksort [a | a <- xs, a > x]
  in  smallerSorted ++ [x] ++ biggerSorted
\`\`\`
  ` },
}

export const CodePrismMarkdown: Story = {
  args: { markdown: `
\`\`\`markdown filename=README.md preview
# Heading1
## Heading2
### Heading3
\`\`\`` },
}

export const CodePrismTsx: Story = {
  args: { markdown: "```tsx filename=src/App.tsx linenumbers\nimport { Markdown } from \"inforgra-marked-react\";\n\nexport const App() => {\n  return (<>Hello World!!!</>);\n}\n```" },
}

export const Del: Story = {
  args: { markdown: "~del~" },
}

export const Codespan: Story = {
  args: { markdown: "`Codespan`" },
}

export const Em: Story = {
  args: { markdown: "**Em**" },
}

export const Footnote: Story = {
  args: { markdown: `
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.

[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.

  This is a second line.

  `},
}

export const Heading: Story = {
  args: { markdown: "# Heading1\n## Heading2\n### Heading3\n#### Heading4\n##### Heading5\n###### Heading6\n" },
}

export const Hr: Story = {
  args: { markdown: "---" },
}

export const Html: Story = {
  args: { markdown: "<ul>\n  <li>Item1</li>\n  <li>Item2</li>\n</ul>\n<font color=\"red\">This text is red</font>\n<br/>\n<a href=\"#\" class=\"text-4xl text-blue-600 hover:text-blue-500\">Link</a>" },
}

export const Image: Story = {
  args: { markdown: "![The San Juan Mountains are beautiful!](https://mdg.imgix.net/assets/images/san-juan-mountains.jpg)" },
}

export const ImageHTML: Story = {
  args: { markdown: "<img src=\"https://mdg.imgix.net/assets/images/san-juan-mountains.jpg\" width=\"200\"/>" },
}

export const Katex: Story = {
  args: { markdown: `
inline example: $ f(a, b, c) = (a^2+b^2+c^2)^3 $.

block example:

$$
f(\\relax{x}) = \\int_{-\\infty}^\\infty
                \\hat{f}(\\xi)\\, e^{2 \\pi i \\xi x}
                \\,d\\xi
$$
  `,
  }
}

export const Link: Story = {
  args: { markdown: "[네이버](https://www.naver.com)" },
}

export const LinkAddress: Story = {
  args: { markdown: "<https://www.naver.com>" },
}

export const LinkEmail: Story = {
  args: { markdown: "<fake@example.com>" },
}

export const ListUnordered: Story = {
  args: { markdown: "- Item1\n- Item2\n- Item3" },
}

export const ListOrdered: Story = {
  args: { markdown: "1. Item1\n1. Item2\n1. Item3" },
}

export const ListNested: Story = {
  args: { markdown: "- Item1\n- Item2\n- Item3\n  1. Item3-1\n  1. Item3-2" },
}

export const Paragraph: Story = {
  args: { markdown: "첫번째 문장.\n두번째 문장\n세번째 문장.\n\n새로운 문단과 문장.\n이어진 문장.\n" },
}

export const Table: Story = {
  args: { markdown: `
| Default | Left | Center | Right |
|---|:---|:---:|---:|
| Row | Row | Row | Row |
| Row | Row | Row | Row |`
  },
}

export default meta;
