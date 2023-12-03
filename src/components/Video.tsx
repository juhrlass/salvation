import { VideoComponent } from "salvation"

interface VideoProps {
  block: VideoComponent
}

export const Video = (props: VideoProps) => {
  return (
    <div
      className={
        "group aspect-video relative flex flex-col overflow-hidden rounded-lg"
      }
    >
      <video
        autoPlay
        loop
        muted
        className="w-auto min-w-full min-h-full max-w-none"
      >
        <source src={props.block.url} type="video/mp4" />
      </video>
    </div>
  )
}
