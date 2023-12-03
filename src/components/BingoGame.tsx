import { useState } from "react"
import {BingoComponent} from "salvation";

interface BingoGameProps {
  block: BingoComponent
}
export const BingoGame = (props:BingoGameProps) => {
  const  totalNumbers  = props.block.totalNumbers

  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [currentNumber, setCurrentNumber] = useState<number|null>(null)

  const allNumbers = Array.from(
    { length: totalNumbers },
    (_, index) => index + 1
  )
  const remainingNumbers = allNumbers.filter(
    (number) => !drawnNumbers.includes(number)
  )

  const drawNextNumber = () => {
    const remainingCount = remainingNumbers.length

    if (remainingCount > 0) {
      const randomIndex = Math.floor(Math.random() * remainingCount)
      const newNumber = remainingNumbers[randomIndex]

      setCurrentNumber(newNumber)
      setDrawnNumbers([...drawnNumbers, newNumber])
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
          <div className="justify-center flex flex-col">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-32 aspect-square"
            onClick={resetGame}
          >
            Neues Spiel
          </button>
        </div>
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl font-semibold text-center ">Bingo</h1>

            <p className="text-9xl text-center font-bold">
              {currentNumber ? currentNumber : "-"}
            </p>

        </div>
        <div className="justify-center flex flex-col">
          {" "}
          <button
            className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-32 aspect-square"
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
              drawnNumbers.includes(number)
                ? "bg-blue-500 "
                : "bg-gray-600"
            } text-center py-2 rounded-full text-5xl font-bold justify-center flex flex-col`}
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  )
}
