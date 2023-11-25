export default function App() {
    return (

    <div
        className="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
    >
        <div
            className="relative z-30 p-5 text-3xl text-white bg-teal-800 bg-opacity-50 rounded-xl"
        >
            Hello Mirrors
        </div>
      <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
        >
            <source
                src="/content/video_01.mp4"
                type="video/mp4"
            />

        </video>
    </div>
    )
}