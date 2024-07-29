import { AudioLines, UserPlus, User } from "lucide-react"
import { Avatar } from "./avatar"

interface ArtistProps {
    image: string
    name: string
    followers: number
    songCount: number
}

export function Artist({ image, name, followers, songCount }: ArtistProps) {
    return (
        <div className="flex items-center justify-between gap-4">
            <Avatar className="w-12" image={image} />
            <div className="space-y-1">
                <p className="text-black/90 hover:cursor-pointer hover:text-black">
                    {name}
                </p>
                <div className="flex flex-1 items-center gap-2 text-black/60">
                    <div className="flex items-center gap-1 hover:cursor-pointer hover:text-black">
                        <User size={10} fill="rgba(0, 0, 0, 0.6)" />
                        <p className="text-xs">{followers}</p>
                    </div>
                    <div className="flex items-center gap-1 hover:cursor-pointer hover:text-black">
                        <AudioLines size={10} fill="rgba(0, 0, 0, 0.6)" />
                        <p className="text-xs">{songCount}</p>
                    </div>
                </div>
            </div>
            <button className="flex items-center gap-1 rounded-sm border px-2 py-1 text-xs hover:border-black/20">
                <UserPlus size={15} /> Seguir
            </button>
        </div>
    )
}
