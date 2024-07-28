type LikedSongsType = {
    cover: string
    artist: string
    song: string
    playCount: number
    likes: number
    reposts: number
    commentCount: number
}[]

export const likedSongs: LikedSongsType = [
    {
        cover: "https://i1.sndcdn.com/artworks-zwRJgPas2IjbEB5M-9fr8zw-t50x50.jpg",
        artist: "Mindvacy",
        song: "self. immolate. isolate.",
        playCount: 2100,
        likes: 504,
        commentCount: 52,
        reposts: 12,
    },
    {
        cover: "https://i1.sndcdn.com/artworks-P9S944jQQVwK3MI8-ENC6Cw-t50x50.jpg",
        artist: "Yung Lain",
        song: "Pills",
        playCount: 7346,
        likes: 132,
        commentCount: 32,
        reposts: 45,
    },
    {
        cover: "https://i1.sndcdn.com/artworks-eUAKXJ23oYk0njhM-fT2yWw-t50x50.jpg",
        artist: "Hydraa (@hydrails)",
        song: "Pills",
        playCount: 2344,
        likes: 122,
        commentCount: 21,
        reposts: 10,
    },
]
