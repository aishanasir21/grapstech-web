import React from 'react'

const qualities = [
  {
    id: 'heat',
    icon: 'https://jonite-stone.files.svdcdn.com/production/images/icons/Black-colour-Icons/Heat-resistant_2025-02-19-163612_lrgb.svg?dm=1748484777',
    text: 'Grit with Vision'
  },
  {
    id: 'corrosion',
    icon: 'https://jonite-stone.files.svdcdn.com/production/images/icons/Black-colour-Icons/Rust-resistant_2025-02-19-163611_kbwm.svg?dm=1763991006',
    text: 'Radical Transparency'
  },
  {
    id: 'fire',
    icon: 'https://jonite-stone.files.svdcdn.com/production/images/icons/Black-colour-Icons/Sustainable_2025-02-19-163619_xcxw.svg?dm=1748484778',
    text: 'Fire Rated sys'
  },
  {
    id: 'aesthetic',
    icon: 'https://jonite-stone.files.svdcdn.com/production/images/icons/Black-colour-Icons/High-Strength_2025-02-19-163615_xbjh.svg?dm=1748484779',
    text: 'Long-Term Alignment'
  }
]

const Qualities = () => {
  return (
    <div className="justify-center flex items-center gap-4 md:gap-30  m-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
      {qualities.map((item, index) => (
        <div
          key={item.id}
          className="flex items-center gap-6 snap-start shrink-0"
        >
          <div className="flex flex-col items-center gap-3">
            <img
              src={item.icon}
              alt={item.text}
              className="h-9 w-9"
            />
            <h4 className="uppercase text-center tracking-wide text-xs md:text-[1vw]">
              {item.text}
            </h4>
          </div>

          {index !== qualities.length - 1 && (
            <div className="h-40 md:h-60 w-px" />
          )}
        </div>
      ))}
    </div>
  )
}

export default Qualities
