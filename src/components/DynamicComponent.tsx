import React from "react"

import { Card } from "./Card.tsx"
import { Fullscreen } from "./Fullscreen.tsx"
import { Grid } from "./Grid.tsx"
import { HelloMirrorsLogo } from "./HelloMirrorsLogo.tsx"
import { ResponsiveContainer } from "./ResponsiveContainer.tsx"
import {Video} from "./Video.tsx";

const dynamicComponents = {
  fullscreen: Fullscreen,
  card: Card,
  grid: Grid,
  logo: HelloMirrorsLogo,
  responsiveContainer: ResponsiveContainer,
  video: Video
}

interface DynamicComponentProps {
  block: never
}

export const DynamicComponent = (props: DynamicComponentProps) => {
  if (typeof dynamicComponents[props.block.component] !== "undefined") {
    return React.createElement(dynamicComponents[props.block.component], {
      key: props.block._uid,
      block: props.block,
    })
  }
  return React.createElement(
    () => (
      <div>The component {props.block.component} has not been created yet.</div>
    ),
    { block: props.block }
  )
}
