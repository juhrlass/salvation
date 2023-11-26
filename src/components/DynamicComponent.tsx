import React from "react"

import { Grid } from "./Grid.tsx"
import { HelloMirrorsLogo } from "./HelloMirrorsLogo.tsx"
import {Card} from "./Card.tsx";
import {Fullscreen} from "./Fullscreen.tsx";

const dynamicComponents = {
  fullscreen:Fullscreen,
  card: Card,
  grid: Grid,
  logo: HelloMirrorsLogo,

}

interface DynamicComponentProps {
  block: never
}

export const DynamicComponent = (props: DynamicComponentProps) => {
  if (typeof dynamicComponents[props.block.component] !== "undefined") {
    return React.createElement(dynamicComponents[props.block.component], {
        key: props.block._uid,
      block: props.block

    })
  }
  return React.createElement(
    () => (
      <div>The component {props.block.component} has not been created yet.</div>
    ),
    { block: props.block }
  )
}