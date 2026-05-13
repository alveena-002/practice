import { videos } from "../data/mockData";
export default function VideosRow(){
  return(
    <section className="px-4 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((v) =>(
          <div key={v.id} className="cursor-pointer group">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-[#272727]">
              <img
                src={v.thumb}
                alt={v.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
            <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                {v.duration}
            </span>
            </div>
          <div className="flex gap-2 mt-2">
              <div className="w-9 h-9 flex-shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
               {v.channel[0]}
              </div>
              <div className="flex-1 min-w-0">
                 <p className="text-white text-sm font-medium leading-tight line-clamp-2">{v.title}</p>
                <p className="text-gray-400 text-xs mt-1">{v.channel}</p>
               <p className="text-gray-400 text-xs">{v.views} • {v.time}</p>
              </div>
        </div>
          </div>
      ))}
    </div>
  </section>
  );
}