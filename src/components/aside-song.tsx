import { Play, Heart, Repeat2, MessageSquare } from "lucide-react"
import { Avatar } from "./avatar"

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
        <div className="flex items-center gap-2">
            <Avatar image={cover} className="w-12 rounded-none" />
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
        </div>
    )
}
