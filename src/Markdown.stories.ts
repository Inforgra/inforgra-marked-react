import { Meta, StoryObj } from "@storybook/react-vite";
import { Markdown } from "./Markdown";

const meta: Meta = {
  title: 'Marked-React/Markdown',
  component: Markdown,
};

type Story = StoryObj<typeof meta>;

export const Blockquote: Story = {
  args: { markdown: "> Everything should be made as simple as possible, but not simpler - 알버트 아인슈타인" },
}

export const Code: Story = {
  args: { markdown: "```markdown\n# Heading1\n## Heading2\n### Heading3\n```" },
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
  args: { markdown: "| Default | Left | Center | Right |\n|---|:---|:---:|---:|\n| Row | Row | Row | Row |\n| Row | Row | Row | Row |\n" },
}

export default meta;
