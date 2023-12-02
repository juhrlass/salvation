import React from "react"

import { Card } from "./Card.tsx"
import { Fullscreen } from "./Fullscreen.tsx"
import { Grid } from "./Grid.tsx"
import { Image } from "./Image.tsx"
import { ResponsiveContainer } from "./ResponsiveContainer.tsx"
import {Video} from "./Video.tsx";
import {BingoGame} from "./BingoGame.tsx";
import {Carousel} from "./Carousel.tsx";
import {ImageSlider} from "./ImageSlider.tsx";
import Test3D from "./Test3D.tsx";
import {Navigation} from "./Navigation.tsx";

const dynamicComponents = {
  fullscreen: Fullscreen,
  card: Card,
  grid: Grid,
  logo: Image,
  responsiveContainer: ResponsiveContainer,
  video: Video,
  carousel: Carousel,
  imageSlider: ImageSlider,
  bingoGame: BingoGame,
  test3d:Test3D,
  navigation:Navigation
}

interface Block {
  _uid: string,
  component: string
}

interface DynamicComponentProps {
  block: Block
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
