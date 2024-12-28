import { cn } from "@/lib/utils";
import { ReactNode } from "react";
{
  /**In React, ReactNode is a type that represents anything React can render:
elements, strings, numbers, fragments, arrays, or even null. */
}

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
