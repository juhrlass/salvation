import React from "react"
import { Component } from "salvation"

import { BingoGame } from "./BingoGame.tsx"
import { Card } from "./Card.tsx"
import { Carousel } from "./Carousel.tsx"
import { Fullscreen } from "./Fullscreen.tsx"
import { Grid } from "./Grid.tsx"
import { Image } from "./Image.tsx"
import { ImageSlider } from "./ImageSlider.tsx"
import { Navigation } from "./Navigation.tsx"
import { ResponsiveContainer } from "./ResponsiveContainer.tsx"
import Test3D from "./Test3D.tsx"
import { Video } from "./Video.tsx"

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
  test3d: Test3D,
  navigation: Navigation,
}

interface DynamicComponentProps {
  block: Component
}

export const DynamicComponent = (props: DynamicComponentProps) => {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const lookupComponent = dynamicComponents[props.block.component]
  if (lookupComponent) {
    return React.createElement(lookupComponent, {
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
