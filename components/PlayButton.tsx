import { FaPlay } from "react-icons/fa"


const PlayButton = () => {
  return (
    <button className="transition opacity-0 rounded-full flex items-center bg-green-500 p-3 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105 hover:bg-green-400">
      <FaPlay className="text-black translate-x-[1px]" />
    </button>
  )
}

export default PlayButton