import { cn } from "@/lib/utils";
import {DynamicComponent} from "@/components/DynamicComponent.tsx";
import {FullscreenComponent} from "salvation";

interface FullscreenProps {
  block:FullscreenComponent
}
export const Fullscreen =  (props:FullscreenProps) => {
  return (
      <div

           className={cn("relative py-4 bg-black text-white flex flex-col items-center justify-start h-screen w-screen overflow-hidden", props.block.backgroundColor)}


      >
        {props.block.children?.map((nestedBlock) => DynamicComponent({block: nestedBlock }))}
  </div>
  )
}
