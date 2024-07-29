import { Avatar } from "./avatar"

interface NewTrackArtistProps {
    image: string
    name: string
}

export function NewTrackArtist({ image, name }: NewTrackArtistProps) {
    return (
        <div className="space-y-2 hover:cursor-pointer">
            <Avatar className="w-12" image={image} />
            <p>{name}</p>
        </div>
    )
}
