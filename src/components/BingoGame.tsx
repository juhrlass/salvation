import { useCallback, useState } from "react";
import { BingoComponent } from "salvation";
import {loadConfettiPreset} from "tsparticles-preset-confetti";
import Particles from "react-particles";





function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

interface BingoGameProps {
  block: BingoComponent
}

export const BingoGame = (props: BingoGameProps) => {
  const totalNumbers = props.block.totalNumbers

  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [currentNumber, setCurrentNumber] = useState<number | null>(null)
  const [isConfetti, setIsConfetti] = useState(false);


  const audio = new Audio("/content/drumroll.mp3");
  audio.preload="auto"

  const allNumbers = Array.from(
    { length: totalNumbers },
    (_, index) => index + 1
  )
  const remainingNumbers = allNumbers.filter(
    (number) => !drawnNumbers.includes(number)
  )



  const particlesInit = useCallback(async (engine) => {
    await loadConfettiPreset(engine);
  }, [])

  const particlesConfig={
    preset: "confetti",
    emitters: {
      "startCount": 100,
      "position": {
        "x": 50,
        "y": 15
      },
      "size": {
        "width": 0,
        "height": 0
      },
      "rate": {
        "delay": 0,
        "quantity": 0
      },
      "life": {
        "duration": 0.1,
        "count": 1
      }
    },
  }

  const drawNextNumber = () => {
    const remainingCount = remainingNumbers.length
    setIsConfetti(false)
    audio.pause()
    audio.currentTime=0;
    if (remainingCount > 0) {
      audio.play()
      const randomIndex = Math.floor(Math.random() * remainingCount)
      const newNumber = remainingNumbers[randomIndex]

      let start = 0
      const end = 200

      const durationInMs = 1750

      const incrementTime = durationInMs / end

      // timer increments start counter
      // then updates count
      // ends if start reaches end

      const timer = setInterval(() => {
        start += 1
        setCurrentNumber(getRandomInt(totalNumbers))
        if (start === end) {
          setCurrentNumber(newNumber)
          setDrawnNumbers([...drawnNumbers, newNumber])
          setIsConfetti(true)
          clearInterval(timer)
        }
      }, incrementTime)

      // setCurrentNumber(newNumber)
    } else {
      // Hier kannst du eine Meldung anzeigen, dass alle Zahlen gezogen wurden.
      console.log("Alle Zahlen wurden gezogen!")
    }
  }

  const resetGame = () => {
    setDrawnNumbers([])
    setCurrentNumber(null)
  }

  return (
    <div className="w-full mx-auto p-4 flex flex-col grow items-center gap-y-4">
      <div className="flex w-full justify-between">
        <div className="justify-start flex flex-col">
          <button
            className="bg-red-500 text-white text-xl font-bold px-4 py-2 rounded-full hover:bg-red-600 w-32 aspect-square"
            onClick={resetGame}
          >
            Neues Spiel
          </button>
        </div>
        <div className="flex flex-col justify-start">
          <p className={"text-[12em] text-white"}>
            {currentNumber ? currentNumber : "-"}
          </p>

          {isConfetti &&<Particles options={particlesConfig} init={particlesInit} />}
        </div>
        <div className="justify-start flex flex-col">
          {" "}
          <button
            className="bg-green-500 text-white text-xl font-bold px-4 py-2 rounded-full hover:bg-green-600 w-32 aspect-square"
            onClick={drawNextNumber}
          >
            Nächste Zahl
          </button>
        </div>
      </div>

      <div className="w-full h-full grid grid-cols-5 gap-4">
        {allNumbers.map((number, index) => (
          <div
            key={index}
            className={`${
              drawnNumbers.includes(number) ? "bg-blue-500 " : "bg-gray-600"
            } text-center py-2 rounded-full text-5xl font-bold justify-center flex flex-col`}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}