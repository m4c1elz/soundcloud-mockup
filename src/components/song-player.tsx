import {
    StepBack,
    Pause,
    StepForward,
    Shuffle,
    IterationCcw,
    Volume1,
    Heart,
    UserPlus,
    List,
} from "lucide-react"
import { Avatar } from "./avatar"

export function SongPlayer() {
    return (
        <footer className="absolute bottom-0 flex h-12 w-screen items-center justify-center gap-6 border-t border-black/20 bg-gray-200">
            <div className="flex items-center gap-4">
                <StepBack fill="black" size={20} />
                <Pause fill="black" size={20} />
                <StepForward fill="black" size={20} />
                <Shuffle size={20} />
                <IterationCcw size={20} />
            </div>
            <div className="flex items-center gap-4">
                <p className="text-orange-500">00:43</p>
                <div className="my-auto h-px w-96 bg-black">
                    <div className="h-full w-32 bg-orange-500" />
                </div>
                <p>02:45</p>
                <Volume1 size={20} />
            </div>
            <div className="flex w-64 items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                    <Avatar
                        className="w-8 rounded-none"
                        image="https://i1.sndcdn.com/artworks-62HL1TYNCEFW4LCN-6Nvz0w-t500x500.jpg"
                    />
                    <div>
                        <p className="text-black/60">Oscillix</p>
                        <p>Eternity</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Heart
                        size={15}
                        fill="black"
                        className="hover:cursor-pointer"
                    />
                    <UserPlus
                        size={15}
                        fill="black"
                        className="hover:cursor-pointer"
                    />
                    <List
                        size={15}
                        fill="black"
                        className="hover:cursor-pointer"
                    />
                </div>
            </div>
        </footer>
    )
}
