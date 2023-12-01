import {useEffect, useRef, useState} from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"

import { cn } from "../lib/utils"

export const ImageSlider = ({ block }) => {
 
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? block.images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === block.images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  const timeoutRef = useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => nextSlide(), 5000)

    return () => {
      resetTimeout()
    }
  })

  return (
    <div className="group relative m-auto aspect-video w-full">
      <div
        style={{ backgroundImage: `url(${block.images[currentIndex].url})` }}
        className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronLeftIcon onClick={prevSlide} className="h-8 w-8" />
      </div>
      {/* Right Arrow */}
      <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <ChevronRightIcon onClick={nextSlide} className="h-8 w-8" />
      </div>
      <div className="left-1 top-4 flex justify-center py-2">
        {block.images.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={cn(
              " m-1 h-3 w-3 cursor-pointer rounded-full bg-white text-2xl",
              {
                "scale-150": slideIndex === currentIndex,
              }
            )}
          ></div>
        ))}
      </div>
    </div>
  )
}
