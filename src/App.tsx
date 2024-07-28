import { Navbar } from "./components/navbar"
import { AlertCircle, X, AudioLines, User, Heart } from "lucide-react"
import { SongList } from "./components/song-list"
import { recentSongs } from "./utils/recent-songs"
import { moreOfYourLikedSongs } from "./utils/more-of-your-liked-songs"
import { artistsToFollow } from "./utils/artists-to-follow"
import { Artist } from "./components/artist"
import { AsideSong } from "./components/aside-song"
import { likedSongs } from "./utils/liked-songs"
import { SongPlayer } from "./components/song-player"
import { artistsWithNewTracks } from "./utils/artists-with-new-tracks"
import { NewTrackArtist } from "./components/new-track-artist"

export function App() {
    return (
        <>
            <Navbar />
            <div className="m-auto flex h-20 w-1/2 items-center justify-center gap-2 rounded-b-sm bg-red-100 text-sm">
                <AlertCircle className="text-red-500" />
                <p>
                    <span className="font-semibold">
                        Disponível agora: First Fans.{" "}
                    </span>
                    Assine Next Pro para que seu próximo upload seja ouvido por
                    mais de 100 ouvintes.
                </p>
                <a href="#" className="text-sky-500 underline">
                    Comece hoje
                </a>
                <X className="text-black/60" />
            </div>
            <div className="m-auto mt-6 flex w-1/2">
                <main className="space-y-12 border-r pr-6 pt-6">
                    <div className="space-y-6 border-b py-4">
                        <h1 className="text-2xl font-bold text-slate-900">
                            Recém-Reproduzido
                        </h1>
                        <SongList songList={recentSongs} />
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-2xl font-bold text-slate-900">
                            Mais do que você gosta
                        </h1>
                        <SongList songList={moreOfYourLikedSongs} />
                    </div>
                </main>
                <article className="space-y-6 px-4">
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-black/50">
                            <AudioLines size={20} />
                            <p>Novas Faixas</p>
                        </div>
                        <div className="flex items-center gap-2">
                            {artistsWithNewTracks.map(artist => (
                                <NewTrackArtist {...artist} />
                            ))}
                        </div>
                    </section>
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-black/50">
                            <User size={20} />
                            <p>Artistas que você deveria seguir</p>
                        </div>
                        {artistsToFollow.map(artist => (
                            <Artist {...artist} />
                        ))}
                    </section>
                    <section>
                        <div className="flex items-center gap-2 text-black/60">
                            <Heart size={15} />
                            <p>72 curtidas</p>
                        </div>
                        <div className="mt-3 space-y-3">
                            {likedSongs.map(song => (
                                <AsideSong {...song} />
                            ))}
                        </div>
                    </section>
                </article>
            </div>
            <SongPlayer />
        </>
    )
}
