import { Link } from "react-router-dom";

import {CardComponent} from "salvation";

interface CardProps {
    block: CardComponent
}

export const Card = (props:CardProps) => {
  return (
      <Link key={props.block._uid} to={props.block.link}>
      <div className={"group aspect-video relative flex flex-col overflow-hidden rounded-lg border border-gray-200 p-5 shadow-md transition ease-in justify-center items-center bg-gradient-to-t from-current via-violet-100 to-slate-700"}>
          <p className={"group-hover:scale-105 text-black font-bold text-6xl transition[scale] ease-in-out duration-200"}>{props.block.title}</p>
  </div>
      </Link>
  )
}
