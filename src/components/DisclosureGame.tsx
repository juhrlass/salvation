import { useState } from "react"
import { DisclosureGameComponent } from "salvation"

interface DisclosureGameProps {
  block: DisclosureGameComponent
}
export const DisclosureGame = (props: DisclosureGameProps) => {
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [canDraw, setCanDraw] = useState(true)
  const allNumbers = Array.from({ length: 9 * 16 }, (_, index) => index + 1)

  const remainingNumbers = allNumbers.filter(
    (number) => !drawnNumbers.includes(number)
  )

  const startDisclosure = () => {
    const remainingCount = remainingNumbers.length
    console.log(remainingCount)

    setCanDraw(false)

    if (remainingCount > 0) {


      const durationInMs = props.block.duration

      const startTimeStamp = new Date().getTime()
      const timer = setInterval(() => {
        const newNumbers=[]
        for(let i=0;i<5;i++) {
          const randomIndex = Math.floor(Math.random() * remainingCount)
          console.log(randomIndex)
          const newNumber = remainingNumbers[randomIndex]
          newNumbers.push(newNumber)
        }
          console.log("Set drawan numbers")
          setDrawnNumbers([...drawnNumbers, ...newNumbers])


        const currentTimeStamp = new Date().getTime()

        if (startTimeStamp + durationInMs <= currentTimeStamp) {
          setCanDraw(true)
          clearInterval(timer)
        }else{
          console.log(startTimeStamp+durationInMs)
          console.log(currentTimeStamp)
        }
      }, 1000)

      // setCurrentNumber(newNumber)
    } else {
      // Hier kannst du eine Meldung anzeigen, dass alle Zahlen gezogen wurden.
      console.log("Alle Zahlen wurden gezogen!")
    }
  }

  const resetGame = () => {
    setDrawnNumbers([])
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
        <div className="flex flex-col justify-start"></div>
        <div className="justify-start flex flex-col">
          {" "}
          <button
            className={
              "bg-green-500 disabled:opacity-25 text-white text-xl font-bold px-4 py-2 rounded-full hover:bg-green-600 w-32 aspect-square"
            }
            onClick={startDisclosure}
            disabled={!canDraw}
          >
            Nächste Zahl
          </button>
        </div>
      </div>
      <div className={"relative w-full h-full"}>
        <div
          className={
            "absolute bg-cover bg-[url('/content/winter_bg_01.jpg')] w-full h-full -z-10 "
          }
        ></div>

        <div className="absoulute w-full h-full grid grid-cols-5 gap-4">
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
    </div>
  )
}
