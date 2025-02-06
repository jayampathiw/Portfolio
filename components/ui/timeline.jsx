import React from "react";
import { Badge } from "@/components/ui/badge";

const Timeline = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
Timeline.displayName = "Timeline";

const TimelineItem = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`group relative pb-8 pl-8 sm:pl-44 ${className}`}
    {...props}
  />
));
TimelineItem.displayName = "TimelineItem";

const TimelineHeader = React.forwardRef(({ className = "", ...props }, ref) => (
  <div
    ref={ref}
    className={`mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-accent/20 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rounded-full after:border-4 after:border-background after:bg-accent sm:flex-row sm:before:left-0 sm:before:ml-[10rem] sm:after:left-0 sm:after:ml-[10rem] ${className}`}
    {...props}
  />
));
TimelineHeader.displayName = "TimelineHeader";

const TimelineTitle = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`text-xl font-bold ${className}`} {...props} />
));
TimelineTitle.displayName = "TimelineTitle";

const TimelineTime = ({ className = "", variant = "default", ...props }) => {
  return (
    <Badge
      variant={variant}
      className={`left-0 mb-3 inline-flex h-6 w-36 translate-y-0.5 items-center justify-center text-xs font-semibold uppercase sm:absolute sm:mb-0 hover:bg-accent hover:text-primary ${className}`}
      {...props}
    />
  );
};
TimelineTime.displayName = "TimelineTime";

const TimelineDescription = React.forwardRef(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`text-white/60 ${className}`} {...props} />
  )
);
TimelineDescription.displayName = "TimelineDescription";

export {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineTime,
  TimelineTitle,
  TimelineDescription,
};
