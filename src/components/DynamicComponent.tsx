import React from "react"
import { Component } from "salvation"

import { BingoGame } from "@/components/BingoGame.tsx"
import { Card } from "@/components/Card.tsx"
import { Carousel } from "@/components/Carousel.tsx"
import { Fullscreen } from "@/components/Fullscreen.tsx"
import { Grid } from "@/components/Grid.tsx"
import { Image } from "@/components/Image.tsx"
import { ImageSlider } from "@/components/ImageSlider.tsx"
import { Navigation } from "@/components/Navigation.tsx"
import { ResponsiveContainer } from "@/components/ResponsiveContainer.tsx"
import Test3D from "@/components/Test3D.tsx"
import { Video } from "@/components/Video.tsx"
import {SnowFullscreen} from "@/components/SnowFullscreen.tsx";
import {DisclosureGame} from "@/components/DisclosureGame.tsx";

const dynamicComponents = {
  fullscreen: Fullscreen,
  snowFullscreen:SnowFullscreen,
  card: Card,
  grid: Grid,
  logo: Image,
  responsiveContainer: ResponsiveContainer,
  video: Video,
  carousel: Carousel,
  imageSlider: ImageSlider,
  bingoGame: BingoGame,
  disclosureGame: DisclosureGame,
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
