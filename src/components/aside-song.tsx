import { Play, Heart, Repeat2, MessageSquare, Ellipsis } from "lucide-react"

type AsideSongProps = {
    cover: string
    artist: string
    song: string
    playCount: number
    likes: number
    reposts: number
    commentCount: number
}

export function AsideSong({
    cover,
    artist,
    song,
    playCount,
    likes,
    reposts,
    commentCount,
}: AsideSongProps) {
    return (
        <div className="group relative flex items-center gap-2 hover:cursor-pointer">
            <div className="relative flex aspect-square w-10 flex-shrink-0 items-center justify-center overflow-hidden bg-zinc-600 object-contain">
                <img src={cover} alt="" />
                <div className="absolute inset-0 hidden place-content-center group-hover:grid">
                    <div className="rounded-full bg-orange-500 p-1 text-white">
                        <Play fill="white" size={15} />
                    </div>
                </div>
            </div>
            <div className="space-y-px">
                <p className="text-xs text-black/60">{artist}</p>
                <p className="text-xs">{song}</p>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-black/60">
                        <Play size={10} fill="rgba(0, 0, 0, 0.6)" />
                        <p className="text-xs">{playCount}</p>
                    </div>
                    <div className="flex items-center gap-1 text-black/60">
                        <Heart size={10} fill="rgba(0, 0, 0, 0.6)" />
                        <p className="text-xs">{likes}</p>
                    </div>
                    <div className="flex items-center gap-1 text-black/60">
                        <Repeat2 size={10} />
                        <p className="text-xs">{reposts}</p>
                    </div>
                    <div className="flex items-center gap-1 text-black/60">
                        <MessageSquare size={10} />
                        <p className="text-xs">{commentCount}</p>
                    </div>
                </div>
            </div>
            <div className="absolute -right-14 flex items-center gap-2 opacity-0 group-hover:opacity-100">
                <button className="rounded-sm border p-1.5">
                    <Heart
                        size={15}
                        className="text-orange-500"
                        fill="#f97316"
                    />
                </button>
                <button className="rounded-sm border p-1.5">
                    <Ellipsis size={15} />
                </button>
            </div>
        </div>
    )
}
