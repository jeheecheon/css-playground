import { cn } from "@/utils/classname";
import React, { type PropsWithChildren } from "react";

type Props = {
  className?: string;
  onClick: () => void;
};

const Button: React.FC<PropsWithChildren<Props>> = ({
  className,
  onClick,
  children,
}) => {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-2xl bg-blue-500 px-4 py-2",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
