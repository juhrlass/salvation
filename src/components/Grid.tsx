import { cn } from "./../lib/utils.js"
import { DynamicComponent } from "./DynamicComponent.tsx"

export const Grid = ({ block }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-y-4  sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 ",
        {
          "sm:grid-cols-1 lg:grid-cols-1": block.maxcolumns === "1",
          "sm:grid-cols-1 lg:grid-cols-2": block.maxcolumns === "2",
          "sm:grid-cols-2 lg:grid-cols-3": block.maxcolumns === "3",
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4":
            block.maxcolumns === "4",
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5":
            block.maxcolumns === "5",
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl-grid-cols-6":
            block.maxcolumns === "6",
        }
      )}
    >
        {block.columns.map((nestedBlock) => DynamicComponent({block: nestedBlock }))}
    </div>
  )
}
