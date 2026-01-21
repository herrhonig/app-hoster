import * as React from "react";
import { cn } from "../helpers/cn";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full resize-none rounded-md border border-input bg-background p-2 text-sm",
      className,
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
