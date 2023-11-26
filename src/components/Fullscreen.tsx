import {DynamicComponent} from "./DynamicComponent.tsx";

export const Fullscreen =  ({ block }) => {
  return (
      <div className="relative flex flex-col items-center justify-start h-screen w-screen overflow-hidden">
        {block.children.map((nestedBlock) => DynamicComponent({block: nestedBlock }))}
  </div>
  )
}
