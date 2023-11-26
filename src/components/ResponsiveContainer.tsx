import { cn } from "../lib/utils"
import { DynamicComponent } from "./DynamicComponent.js"

export const ResponsiveContainer = ({ block }) => {

  return (
    <div
      className={cn("block w-full border-gray-400", {
        "": block.responsive === "always",
        "hidden sm:block": block.responsive === "sm",
        "hidden md:block": block.responsive === "md",
        "hidden lg:block": block.responsive === "lg",
        "hidden xl:block": block.responsive === "xl",
        "hidden 2xl:block": block.responsive === "2xl",
        "p-0": block.padding === "none",
        "p-4 sm:p-6 lg:p-8": block.padding === "all",
        "px-4 sm:px-6 lg:px-8": block.padding === "horizontal",
        "py-4 sm:py-6 lg:py-8": block.padding === "vertical",
        "pl-4 sm:pl-6 lg:pl-8": block.padding === "left",
        "pr-4 sm:pr-6 lg:pr-8": block.padding === "right",
        "pt-4 sm:pt-6 lg:pt-8": block.padding === "top",
        "pb-4 sm:pb-6 lg:pb-8": block.padding === "bottom",
        "border-0": block.border === "none",
        "border-1": block.border === "light",
        "border-3": block.border === "strong",
        "mx-auto max-w-7xl": block.width === "limited",
      })}
    >
        {block.children.map((nestedBlock) => DynamicComponent({block: nestedBlock }))}
    </div>
  )
}


