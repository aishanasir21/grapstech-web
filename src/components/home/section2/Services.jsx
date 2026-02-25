import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    title: "Air-Conditioning",
    category: "HVAC",
    Image: "https://i.pinimg.com/736x/15/99/0e/15990e20473e371f1293e9a2b23a16d1.jpg"
  },
  {
    title: "Air Filtration Installation",
    category: "HVAC",
    Image: "https://i.pinimg.com/1200x/1d/96/6c/1d966cafd40d20f4e888f100fa490677.jpg"
  },
  {
    title: "Equipment Installation",
    category: "Electro-mechanical",
    Image: "https://i.pinimg.com/736x/b3/64/51/b364517607a940cb73977528ad30cb16.jpg"
  },
  {
    title: "Plumbing & Sanitary",
    category: "Contracting",
    Image: "https://i.pinimg.com/736x/c2/c2/aa/c2c2aae60ea58acd390e82ca7dc37cc5.jpg"
  },
  {
    title: "Floor & Wall Tiling Works",
    category: "Finishing",
    Image: "https://i.pinimg.com/736x/ab/d0/58/abd0583582386f38ed69db17f9b5af17.jpg"
  },
  {
    title: "Painting & Finishing",
    category: "Finishing",
    Image: "/src/assets/paint.png"
  },
  {
    title: "Carpentry & Flooring Works",
    category: "Interior Works",
    Image: "https://i.pinimg.com/1200x/d4/55/35/d4553566ee6bef639cff11efe50a6e5d.jpg"
  },
  {
    title: "Thermal & Acoustic Insulation",
    category: "Insulation",
    Image: "https://i.pinimg.com/736x/e6/63/e8/e663e81735f78fca6830bad47b769880.jpg"
  },
  {
    title: "Partitions & False Ceilings",
    category: "Interior Works",
    Image: "https://i.pinimg.com/736x/74/8c/89/748c89b6340369739e08619db8377ab7.jpg"
  },
  {
    title: "Plaster & Cladding Works Contracts",
    category: "Construction",
    Image: "https://i.pinimg.com/1200x/66/9a/8d/669a8da28641ea23333ae1aa2333681e.jpg"
  },
  {
    title: "Building Cleaning",
    category: "Maintenance",
    Image: "https://i.pinimg.com/736x/89/18/e2/8918e2f20d7a1d4385bb278d2c434b35.jpg"
  }
]

const Services = () => {
  return (
    <div className='px-2 py-14 md:py-18'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {services.map((service, index) => (
          <div key={index} className="py-5 overflow-hidden rounded-lg">
            <h4 className='font-[font3] uppercase opacity-40 text-[12px]'>{service.category}</h4>
            <h3 className='font-[font4] text-gray-700 text-[16px] mb-5 tracking-wide'>{service.title}</h3>

            <div className="overflow-hidden w-full h-56 md:h-120">
              <img
                className='w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110'
                src={service.Image}
                alt={service.title}
              />
            </div>
          </div>
        ))}

        <Link
          to="/Insights"
          className='flex justify-between items-end w-full h-56 md:h-120 mt-21 md:mt-20 p-4 border-b-gray-400 border-b overflow-hidden text-gray-700 group
             transition-all duration-500 ease-in-out
             hover:bg-[#034b78] hover:text-white'
        >
          <h2 className='font-[font4] text-[30px] tracking-wide'>
           Explore <br /> further.
          </h2>
          <span className="ml-3 inline-block text-5xl transition-transform duration-500 ease-in-out group-hover:translate-x-2">
            ↗
          </span>
        </Link>

      </div>
    </div>
  )
}

export default Services