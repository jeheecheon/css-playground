import { cn } from "@/utils/classname";
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Flipped, Flipper } from "react-flip-toolkit";

const Test: React.FC = () => {
  const [immerse, setImmerse] = React.useState(false);

  return (
    <div className="flex size-full items-center justify-center">
      <Flipper flipKey={immerse}>
        <Flipped flipId="hello-world">
          <div
            className={cn(
              "bg-red-700",
              !immerse && "size-10",
              immerse && "absolute inset-0 size-full",
            )}
            onClick={() => setImmerse(!immerse)}
          />
        </Flipped>
      </Flipper>
    </div>
  );
};

const meta: Meta<typeof Test> = {
  component: Test,
};

export default meta;

type Story = StoryObj<typeof Test>;

export const Default: Story = {};
