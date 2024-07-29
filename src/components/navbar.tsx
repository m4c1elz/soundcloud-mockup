import { Search, BellDot, Mail, Ellipsis, ChevronDown } from "lucide-react"
import { Avatar } from "./avatar"

export function Navbar() {
    return (
        <nav className="flex h-10 w-screen items-center justify-center bg-[#333]">
            <a
                href="#"
                className="grid h-full w-20 place-content-center bg-gradient-to-b from-orange-500 to-orange-700"
            >
                <img src="/soundcloud_icon.png" alt="icon" />
            </a>
            <div className="flex h-full divide-x divide-stone-900">
                <a
                    href="#"
                    className="grid h-full w-24 place-content-center bg-gray-950 px-2 text-sm text-white hover:text-white"
                >
                    Início
                </a>
                <a
                    href="#"
                    className="grid h-full w-24 place-content-center px-2 text-sm text-white text-white/60 hover:text-white"
                >
                    Feed
                </a>
                <a
                    href="#"
                    className="grid h-full w-24 place-content-center px-2 text-sm text-white text-white/60 hover:text-white"
                >
                    Biblioteca
                </a>
                <section className="my-auto grid h-full place-items-center px-2">
                    <div className="flex w-64 items-center rounded bg-stone-200 px-2 py-0.5 text-sm">
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            className="flex-1 bg-transparent outline-none"
                        />
                        <Search color="black" size={15} />
                    </div>
                </section>
            </div>
            <section className="flex items-center gap-4 pl-2">
                <a
                    href="#"
                    className="text-sm text-orange-500 hover:text-orange-400"
                >
                    Experimente Next Pro
                </a>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                    Para artistas
                </a>
                <a href="#" className="text-sm text-white/60 hover:text-white">
                    Upload
                </a>
                <div className="group flex items-center gap-2 hover:cursor-pointer">
                    <Avatar image="https://github.com/m4c1elz.png" />
                    <ChevronDown
                        className="text-white/60 group-hover:text-white"
                        size={15}
                    />
                </div>
                <BellDot
                    className="cursor-pointer text-white/60 hover:text-white"
                    size={15}
                />
                <Mail
                    className="cursor-pointer text-white/60 hover:text-white"
                    size={15}
                />
                <Ellipsis
                    className="cursor-pointer text-white/60 hover:text-white"
                    size={15}
                />
            </section>
        </nav>
    )
}
