import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Spinner } from "./Spinner";

const buttonVariants = cva(
  "inline-flex select-none items-center justify-center gap-1.5 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background text-foreground shadow-sm hover:bg-hover",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-accent-foreground hover:bg-accent hover:text-foreground",
        link: "underline-offset-4 hover:underline",
        foreground:
          "!hover:text-foreground bg-foreground text-background hover:bg-foreground/80 dark:bg-foreground dark:text-background",
      },
      size: {
        sm: "h-6 rounded-md px-1.5 text-xs",
        default: "h-8 px-2 py-2 text-sm",
        lg: "h-10 rounded-md px-4 text-base font-medium",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  asChild = false,
  loading,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={loading ?? props.disabled}
      {...props}
    >
      {loading ? (
        <span className="flex w-full flex-1 items-center justify-center">
          <Animation />
          {children}
        </span>
      ) : (
        children
      )}
    </Comp>
  );
};

Button.displayName = "Button";

function Animation() {
  return (
    <span className="mr-2">
      <Spinner className="mx-auto !h-4 !w-4 fill-white dark:fill-white" />
    </span>
  );
}

export { Button, buttonVariants };
