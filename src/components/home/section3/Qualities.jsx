import React from 'react'

const qualities = [
  {
    icon: "https://jonite-stone.files.svdcdn.com/production/images/icons/Black-colour-Icons/Slip-Resistance_2025-02-19-163616_ixjp.svg?dm=1763991016",
    text: "Slip Resistant"
  },
  {
    icon: "https://jonite-stone.files.svdcdn.com/production/images/icons/Black-colour-Icons/Heat-resistant_2025-02-19-163612_lrgb.svg?dm=1748484777",
    text: "Heat Resistant"
  },
  {
   icon: "https://jonite-stone.files.svdcdn.com/production/images/icons/Black-colour-Icons/Rust-resistant_2025-02-19-163611_kbwm.svg?dm=1763991006",
    text: "Corrosion Proof"
  },
  {
    icon: "https://jonite-stone.files.svdcdn.com/production/images/icons/Black-colour-Icons/Sustainable_2025-02-19-163619_xcxw.svg?dm=1748484778",
    text: "Fire Rated sys"
  },
  {
   icon: "https://jonite-stone.files.svdcdn.com/production/images/icons/Black-colour-Icons/High-Strength_2025-02-19-163615_xbjh.svg?dm=1748484779",
    text: "Stone Aesthetics"
  }
]

const Qualities = () => {
  return (
    <div className='flex flex-row justify-between items-center m-[4vw]'>
        {qualities.map((item, index) => (
            <React.Fragment key={index}>
              <div className='flex flex-col items-center gap-[1vw]'>
                  <img src={item.icon} alt={item.text} className='h-[4vw] w-[4vw]'/>
                  <h4 className='tracking-wide text-[1vw] uppercase text-center'>{item.text}</h4>
              </div>

              {index !== qualities.length - 1 && (
                <div className='h-[20vw] w-px bg-black/10'></div>
              )}
            </React.Fragment>
        ))}
    </div>
  )
}

export default Qualities
