import { cn } from "../lib/utils";
import { DynamicComponent } from "./DynamicComponent.tsx"
import {GridComponent} from "salvation";

interface GridProps {
    block:GridComponent
}

export const Grid = (props: GridProps) => {
  return (
    <div
      className={cn(
        "w-full grid grid-cols-1 gap-y-4 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 ",
        {
          "sm:grid-cols-1 lg:grid-cols-1": props.block.maxcolumns === 1,
          "sm:grid-cols-1 lg:grid-cols-2": props.block.maxcolumns === 2,
          "sm:grid-cols-2 lg:grid-cols-3": props.block.maxcolumns === 3,
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4":
              props.block.maxcolumns === 4,
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5":
              props.block.maxcolumns === 5,
          "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl-grid-cols-6":
              props.block.maxcolumns === 6,
        }
      )}
    >
        {props.block.children?.map((nestedBlock) =>
            DynamicComponent({ block: nestedBlock })
        )}
    </div>
  )
}