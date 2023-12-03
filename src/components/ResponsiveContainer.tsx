import { cn } from "../lib/utils";
import { DynamicComponent } from "./DynamicComponent.js"
import {ResponsiveContainerComponent} from "salvation";

interface ResponsiveContainerProps {
    block: ResponsiveContainerComponent
}

export const ResponsiveContainer = (props: ResponsiveContainerProps) => {
  return (
    <div
      className={cn("block w-full border-gray-400", {
        "": props.block.responsive === "always",
        "hidden sm:props.block": props.block.responsive === "sm",
        "hidden md:props.block": props.block.responsive === "md",
        "hidden lg:props.block": props.block.responsive === "lg",
        "hidden xl:props.block": props.block.responsive === "xl",
        "hidden 2xl:props.block": props.block.responsive === "2xl",
        "p-0": props.block.padding === "none",
        "p-4 sm:p-6 lg:p-8": props.block.padding === "all",
        "px-4 sm:px-6 lg:px-8": props.block.padding === "horizontal",
        "py-4 sm:py-6 lg:py-8": props.block.padding === "vertical",
        "pl-4 sm:pl-6 lg:pl-8": props.block.padding === "left",
        "pr-4 sm:pr-6 lg:pr-8": props.block.padding === "right",
        "pt-4 sm:pt-6 lg:pt-8": props.block.padding === "top",
        "pb-4 sm:pb-6 lg:pb-8": props.block.padding === "bottom",
        "border-0": props.block.border === "none",
        "border-1": props.block.border === "light",
        "border-3": props.block.border === "strong",
        "mx-auto max-w-7xl": props.block.width === "limited",
      })}
    >
      {props.block.children?.map((nestedBlock) =>
        DynamicComponent({ block: nestedBlock })
      )}
    </div>
  )
}