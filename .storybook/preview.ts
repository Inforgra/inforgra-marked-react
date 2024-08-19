import type { Preview } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";
import "tailwindcss/tailwind.css";

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: false,
    }
  },
};

export default preview;
