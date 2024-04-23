import React from "react";

import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<'div'>

const OuterContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={cn('p-4 sm:px-6', className)} {...props}>
        <div className="mx-auto max-w-6xl">
          {children}
        </div>
      </div>
    );
  }
);

const InnerContainer = React.forwardRef<HTMLDivElement, ContainerProps>(
  function InnerContainer(
    { className, children, ...props }: ContainerProps,
    ref
  ) {
    return (
      <div
        ref={ref}
        className={cn('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">    
          {children}
        </div>
      </div>
    );
  }
);

const ContainerComponent = React.forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ children, ...props }: ContainerProps, ref) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  }
);

export const Container = Object.assign(ContainerComponent, {
  Outer: OuterContainer,
  Inner: InnerContainer,
});
