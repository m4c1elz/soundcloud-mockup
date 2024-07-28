import { twMerge } from "tailwind-merge"

type AvatarProps = {
    className?: string
    image: string
}

export function Avatar({ image, className }: AvatarProps) {
    return (
        <div
            className={twMerge(
                "flex aspect-square w-6 flex-shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-600 object-contain",
                className,
            )}
        >
            <img src={image} alt="avatar" />
        </div>
    )
}
