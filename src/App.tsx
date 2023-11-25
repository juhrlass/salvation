export default function App() {
    return (
        <>
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>

        <video autoPlay={true} controls={false} loop={true} className={"aspect-video h-full"} src={"/content/video_01.mp4"} />
        </>
    )
}