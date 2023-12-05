import { cn } from "@/lib/utils";
import {DynamicComponent} from "@/components/DynamicComponent.tsx";
import {FullscreenComponent} from "salvation";
import {useCallback} from "react";
import {loadSnowPreset} from "tsparticles-preset-snow";
import Particles from "react-particles";


interface SnowFullscreenProps {
  block:FullscreenComponent
}
export const SnowFullscreen =  (props:SnowFullscreenProps) => {

    const particlesInit = useCallback(async (engine) => {
        await loadSnowPreset(engine);
    }, [])

    const particlesConfig={
        background: {
            color: undefined,
        },
        particles: {
            number: {
                value: 100,
            },
            move: {
                direction: "bottom",
                enable: true,
                random: false,
                straight: false,
            },
            opacity: {
                value: { min: 0.5, max: 0.8 },
            },
            size: {
                value: { min: 1, max: 10 },
            },
            wobble: {
                distance: 20,
                enable: true,
                speed: {
                    min: -5,
                    max: 5,
                },
            },
        },
    };

  return (
      <div

           className={cn(" relative py-4  text-white flex flex-col items-center justify-start h-screen w-screen overflow-hidden", props.block.backgroundColor)}


      >
<div className={"absolute bg-cover bg-[url('/content/winter_bg_01.jpg')] w-full h-full -z-10 "}></div>
          <Particles options={particlesConfig} init={particlesInit} />
        {props.block.children?.map((nestedBlock) => DynamicComponent({block: nestedBlock }))}
  </div>
  )
}
