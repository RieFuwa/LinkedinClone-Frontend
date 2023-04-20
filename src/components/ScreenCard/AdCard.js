import React from 'react'
import { FaPlus, FaBriefcase, FaHeart, FaCommentDots, FaStar } from "react-icons/fa";

function AdCard() {
    return (
        <div class=''>
            <div class="sm:text-sm mt-20  shadow-white lg:w-64 lg:text-md  sm:w-40 max-w-sm overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <img class="object-cover object-center w-full h-32" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                <div class="flex items-center px-6 py-3 bg-gray-900">
                    <h1 class=" text-md font-semibold text-white">Popüler ilanlar</h1>
                </div>
                <div class="px-4 py-2">
                    <p class="py-2 text-gray-700 dark:text-gray-400"><span class="text-white">+ </span>ADAS şirketi ilanlarına göz at</p>
                    <p class="py-2 text-gray-700 dark:text-gray-400"><span class="text-white">+ </span>ADAS şirketi ilanlarına göz at</p>
                    <p class="py-2 text-gray-700 dark:text-gray-400"><span class="text-white">+ </span>ADAS şirketi ilanlarına göz at</p>
                    <p class="py-2 text-gray-700 dark:text-gray-400"><span class="text-white">+ </span>ADAS şirketi ilanlarına göz at</p>
                    <p class="py-2 text-gray-700 dark:text-gray-400"><span class="text-white">+ </span>ADAS şirketi ilanlarına göz at</p>
                </div>
            </div>
            <div class=" sm:w-40 sticky  top-28  shadow-white lg:w-64 lg:text-md  sm:text-sm mt-10  max-w-sm   bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <div class="flex items-center rounded-lg px-6 py-3 bg-gray-900">
                    <h1 class=" text-md font-semibold text-white">Reklam Köşesi<span class="text-sm ml-10 text-gray-300"></span></h1>
                </div>
                <div class="px-6 py-4">
                    <p class=" text-gray-700 dark:text-gray-400">reklam reklam reklam reklam reklam reklam</p>
                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <h1 class="text-sm">reklam reklam reklam</h1>
                    </div>
                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <h1 class="text-sm">reklam reklam reklam</h1>
                    </div>
                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <h1 class=" text-sm">reklam reklam reklam </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdCard