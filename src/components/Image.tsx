import {ImageComponent} from "salvation";

interface ImageProps {
  block: ImageComponent
}

export const Image = (props: ImageProps) => {
  return <img className={"h-16"} src={props.block.url} alt={props.block.title} />
}
