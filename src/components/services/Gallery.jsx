import React, { useState } from 'react'
import GalleryItem from './GalleryItem'
import { galleryItems } from './galleryData'
import HeroLine from '../home/hero/HeroLine'

const ITEMS_PER_PAGE = 12 

const Gallery = () => {
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('All')
    const [page, setPage] = useState(1)

    const filteredItems = galleryItems.filter(item => {
        const matchSearch = item.title.toLowerCase().includes(search.toLowerCase())
        const matchFilter = filter === 'All' || item.category === filter
        return matchSearch && matchFilter
    })

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1
    const startIndex = (page - 1) * ITEMS_PER_PAGE
    const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE)

    return (
        <div className="w-full">


            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 my-10 mx-2 font-[font4] tracking-wider">

                <div className="flex flex-wrap items-center gap-4 text-sm uppercase">
                    <span className="opacity-60">Filter:</span>

                    <button
                        onClick={() => { setFilter('Project'); setPage(1) }}
                        className={`${filter === 'Project' ? 'underline font-bold' : 'opacity-60'}`}
                    >
                        Projects
                    </button>

                    <button
                        onClick={() => { setFilter('Service'); setPage(1) }}
                        className={`${filter === 'Service' ? 'underline font-bold' : 'opacity-60'}`}
                    >
                        Services
                    </button>

                    <button
                        onClick={() => { setFilter('All'); setPage(1) }}
                        className={`${filter === 'All' ? 'underline font-bold' : 'opacity-60'}`}
                    >
                        All
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Search by project or service"
                    className="p-1 w-full md:w-64 text-sm"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value); setPage(1) }}
                />
            </div>


            <HeroLine/>


            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-20 md:gap-y-50 my-10 md:my-20">
                {currentItems.map((item, index) => (
                    <GalleryItem
                        key={index}
                        src={item.src}
                        height={item.height}
                        title={item.title}
                        category={item.category}
                        sector={item.sector}
                    />
                ))}
            </div>


            <div className="flex justify-center items-center gap-3 mt-14 text-sm font-[font3]">
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 1}
                    className="opacity-70 disabled:opacity-30"
                >
                    Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .slice(0, 6)
                    .map(num => (
                        <button
                            key={num}
                            onClick={() => setPage(num)}
                            className={`px-2 ${page === num ? 'underline font-bold' : ''}`}
                        >
                            {num}
                        </button>
                    ))}

                {totalPages > 6 && <span>...</span>}

                {totalPages > 6 && (
                    <button
                        onClick={() => setPage(totalPages)}
                        className={`px-2 ${page === totalPages ? 'underline font-bold' : ''}`}
                    >
                        {totalPages}
                    </button>
                )}

                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === totalPages}
                    className="opacity-70 disabled:opacity-30"
                >
                    Next
                </button>
            </div>

        </div>
    )
}

export default Gallery