import { shorts } from "../data/mockData";
export default function ShortsRow(){
return(
  <section className="px-4 mt-4">
    <div className="flex items-center gap-2 mb-3">
      <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.77 10.32l-1.2-.5L18 9.06a3.74 3.74 0 10-5-5l-.56 1.43-.44-1.21a3.74 3.74 0 10-5 5L9.27 10H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-1.23-1.68zM13 5.5a1.5 1.5 0 111.5 1.5H13V5.5zm-4 0A1.5 1.5 0 1110.5 7H10v-.5c0-.83.67-1.5 1.5-1.5zM17 20H7v-8h10v8z"/>
        </svg>
      <h2 className="text-white font-bold text-lg">Shorts</h2>
    </div>
    <div className="flex gap-3 overflow-x-auto pb-2" style={{scrollbarWidth:'none'}}>
        {shorts.map((s) => (
          <div key={s.id} className="flex-shrink-0 w-32 cursor-pointer group">
            <div className="relative rounded-xl overflow-hidden h-56">
              <img
                src={s.thumb}
                alt={s.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white/90 rounded-full p-2">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                 </svg>
                </div>
            </div>
              <span className="absolute bottom-2 left-2 text-white text-xs font-semibold drop-shadow">{s.views}</span>
          </div>
            <p className="text-white text-xs mt-1.5 font-medium leading-tight line-clamp-2">{s.title}</p>
         </div>
      ))}
     </div>
  </section>
 );
}