import { useRef } from "react"
import { SongType } from "../types/song"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Song } from "./song"

type SongListProps = {
    songList: SongType[]
}

export function SongList({ songList }: SongListProps) {
    const listContainerRef = useRef<HTMLDivElement>(null)
    const arrowLeftRef = useRef<HTMLDivElement>(null)
    const arrowRightRef = useRef<HTMLDivElement>(null)

    function handleLeftClick() {
        if (listContainerRef.current) {
            listContainerRef.current.scroll({
                left: 0,
                behavior: "smooth",
            })
            arrowLeftRef.current!.classList.remove("grid")
            arrowLeftRef.current!.classList.add("hidden")
            arrowRightRef.current!.classList.remove("hidden")
            arrowRightRef.current!.classList.add("grid")
        }
    }

    function handleRightClick() {
        if (listContainerRef.current) {
            listContainerRef.current.scroll({
                left: listContainerRef.current.scrollWidth,
                behavior: "smooth",
            })
            arrowRightRef.current!.classList.remove("grid")
            arrowRightRef.current!.classList.add("hidden")
            arrowLeftRef.current!.classList.add("grid")
            arrowLeftRef.current!.classList.remove("hidden")
        }
    }

    if (songList.length > 0) {
        return (
            <div className="relative max-w-[700px]">
                <div
                    ref={listContainerRef}
                    className="flex max-w-full items-center gap-4 overflow-hidden"
                >
                    {songList.map((song, index) => {
                        return <Song key={index} {...song} />
                    })}
                </div>
                <div
                    onClick={handleRightClick}
                    ref={arrowRightRef}
                    className="absolute -right-2 top-[50%] my-auto grid -translate-y-full cursor-pointer place-items-center rounded-sm border bg-white p-2 text-black hover:border-orange-500 hover:text-orange-500"
                >
                    <ChevronRight size={20} />
                </div>
                <div
                    ref={arrowLeftRef}
                    onClick={handleLeftClick}
                    className="absolute -left-2 top-[50%] my-auto hidden -translate-y-full cursor-pointer place-items-center rounded-sm border bg-white p-2 text-black hover:border-orange-500 hover:text-orange-500"
                >
                    <ChevronLeft size={20} />
                </div>
            </div>
        )
    }

    return null
}
