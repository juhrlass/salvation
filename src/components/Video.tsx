export const Video = () => {
  return (
      <div className={"group aspect-video relative flex flex-col overflow-hidden rounded-lg"}>
        <video
            autoPlay
            loop
            muted
            className="w-auto min-w-full min-h-full max-w-none"
        >
          <source src="/content/video_01.mp4" type="video/mp4" />
        </video>
  </div>
  )
}
