"use client"

import { Separator } from "@/components/ui/separator"
import { Button } from "../ui/button"

const videos = [
  {
    src: "https://nws.cdn.najottalim.uz/main-server/videos-comments/Muhammadiy%202_b1db73e3-bd0a-4fad-8428-af6d486041f2.mp4#t=0.001",
    name: "Muhammadiy",
  },
  {
    src: "https://nws.cdn.najottalim.uz/main-server/videos-comments/Behzod%202_dfa42326-150d-411e-b516-7db01217ece7.mp4#t=0.001",
    name: "Behzod",
  },
  {
    src: "https://nws.cdn.najottalim.uz/main-server/videos-comments/Nuriddin%202_53caea2c-3ea0-4ce9-abeb-9c8736aa49f1.mp4#t=0.001",
    name: "Nuriddin",
  },
]

export default function VideoList() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold  mb-10">
        O‘quvchilarning fikrlari
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
      
        {videos.map((video, index) => (
          <div key={index} className="relative w-full md:w-[32%] rounded-3xl overflow-hidden shadow-md">
   
  <Button  className="absolute bottom-5 left-2 bg-white  text-black rounded-3xl px-3 py-1 text-sm z-10">{video.name}</Button>
            <video
              controls
              src={video.src}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
      <Separator className="mt-4" />
    </div>
  )
}
