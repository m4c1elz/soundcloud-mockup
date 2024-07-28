import { PlayIcon, Heart, EllipsisIcon } from "lucide-react"
import { SongType } from "../types/song"

type SongProps = SongType

export function Song({ artist, imageUrl, title }: SongProps) {
    return (
        <div className="space-y-2">
            <div className="group relative aspect-square w-44 bg-slate-500">
                <img src={imageUrl} className="" />
                <div className="absolute inset-0 hidden h-full w-full items-center justify-center bg-gradient-to-b from-transparent to-black/60 group-hover:flex">
                    <div className="aspect-square w-12 rounded-full bg-orange-500 p-3">
                        <PlayIcon className="text-white" fill="white" />
                    </div>
                    <section className="absolute bottom-2 right-2 flex gap-2 text-white">
                        <Heart size={15} fill="white" />
                        <EllipsisIcon size={15} />
                    </section>
                </div>
            </div>
            <section>
                <h2 className="text-sm">{title}</h2>
                <p className="text-xs text-black/40">{artist}</p>
            </section>
        </div>
    )
}
