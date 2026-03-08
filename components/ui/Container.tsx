import type { ElementType, ReactNode } from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
  id?: string;
};

export function Container<T extends ElementType = "div">({
  as,
  className,
  children,
  id,
}: ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      id={id}
      className={`mx-auto w-full max-w-content px-5 md:px-8 xl:px-12${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Component>
  );
}
