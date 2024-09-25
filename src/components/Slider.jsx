import { useState } from "react"

import { FaCircleChevronLeft, FaCircleChevronRight, FaCircle } from "react-icons/fa6";

function Slider({ articles }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        const currentSlide = currentIndex === articles.length - 1
        const newSlide = currentSlide ? 0 : currentIndex + 1
        setCurrentIndex(newSlide)
    }
    const previousSlide = () => {
        const currentSlide = currentIndex === 0
        const newSlide = currentSlide ? articles.length - 1 : currentIndex - 1
        setCurrentIndex(newSlide)
    }

    return (
        <div className="relative m-4 border border-neutral-300 sm:m-0 sm:col-span-2">
            <a href={articles[currentIndex].link} style={{ backgroundImage: `url(${articles[currentIndex].image})` }} className="block h-96 bg-center bg-cover bg-no-repeat duration-300 lg:h-full">
                <div className="flex flex-col justify-between h-full p-8 pb-12 bg-[#000000aa] text-white">
                    <h3 className="order-2">{articles[currentIndex].title}</h3>
                    <p className="uppercase text-xs text-neutral-100 whitespace-nowrap">{articles[currentIndex].posted}</p>
                </div>
            </a>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-row justify-between px-4 text-white">
                <button className="cursor-pointer" onClick={previousSlide}><FaCircleChevronLeft size={40} /></button>
                <button className="cursor-pointer" onClick={nextSlide}><FaCircleChevronRight size={40} /></button>
            </div>
            <div className="absolute text-white bottom-4 w-full flex flex-row gap-3 items-center justify-center">
                {articles.map((article, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)}><FaCircle className={`duration-300 ${currentIndex === index ? "text-white" : "text-neutral-400"}`} size={currentIndex === index ? 10 : 7} /></button>
                ))}
            </div>
        </div>
    )
}

export default Slider