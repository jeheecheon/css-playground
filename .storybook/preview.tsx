import type { Preview } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story): React.ReactElement => (
      <>
        <style>
          {`
          :root, body, #storybook-root {
            height: 100% !important;
          }

          body {
            padding: 0 !important;
          }
        `}
        </style>

        <Story />
      </>
    ),
  ],
};

export default preview;
