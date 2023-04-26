import React from 'react'
import JobPostingCard from '../Card/JobPostingCard'

function Job() {
    return (
        <div className="flex mx-auto max-w-7xl py-12 sm:px-6 lg:px-5  ">
            <div class="p-16 flex-grow  w-full  text-white">

                <div class="flex justify-between ">
                    <div class="relative mx-3 w-full sm:w40">
                        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                        <input type="text" class="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                    </div>
                    <div class="relative mx-3 w-96 sm:w40 ">
                        <select
                            // value={title.postTypeId}
                            // id={title.postTypeId}
                            // onChange={(e) => onInputChange(e)}
                            class="w-full py-1.5 pl-10 pr-4  appearance-none text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            // name="postTypeId"
                            placeholder="baslik turu seciniz"
                            required
                        >
                            <option selected>İlan Türüne göre</option>
                            <option value={1}>spor</option>
                            <option value={2}>siyaset</option>
                            <option value={3}>tarih</option>
                            <option value={4}>ekonomi</option>
                            <option value={5}>müzik</option>
                            <option value={6}>teknoloji</option>
                        </select>
                    </div>
                </div>
                <JobPostingCard></JobPostingCard>
            </div></div>
    )
}

export default Job