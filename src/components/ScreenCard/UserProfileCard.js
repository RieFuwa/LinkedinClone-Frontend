import React from 'react'
import { FaPlus, FaBriefcase, FaHeart, FaCommentDots, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

function UserProfileCard() {
    return (
        <div class=' font-bodyFont '>
            <div class="w-60 mt-20 shadow-white sm:text-sm lg:w-64 lg:text-md  sm:w-40 max-w-sm overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <img class="object-cover object-center w-full h-32" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                <div class="flex items-center px-6 py-3 bg-gray-900">
                    <Link to="/userProfile">
                        <h1 class=" text-md font-semibold text-white">Bedirhan Kabataş</h1>
                    </Link>
                </div>
                <div class="px-6 py-4">
                    <p class="py-2 text-gray-700 dark:text-gray-400">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>
                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                      
                            <FaBriefcase class="text-lg"></FaBriefcase>
                            <Link to="/userApplyJob">
                            <h1 class="px-2 text-sm">Başvurularım</h1>
                        </Link>

                    </div>
                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <FaPlus class="text-lg"></FaPlus>
                        <h1 class="px-2 text-sm">Aktivitem</h1>
                    </div>
                </div>
            </div>
            <div class="w-60  sticky  top-28  sm:w-40 shadow-white lg:w-64 lg:text-md  sm:text-sm mt-10  max-w-sm   bg-white rounded-lg shadow-sm dark:bg-gray-800">
                <div class="flex items-center rounded-lg px-6 py-3 bg-gray-900">
                    <h1 class=" text-md font-semibold text-white">Sizin İçin</h1>
                </div>
                <div class="px-6 py-4">
                    <p class="py-2 text-gray-700 dark:text-gray-400">Yapacağınız aktivitelere göre burası şekillenecektir.</p>
                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <FaCommentDots class="text-lg"></FaCommentDots>
                        <h1 class="px-2 text-sm">Gönderi Sayısı:</h1>
                    </div>
                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <FaHeart class="text-lg"></FaHeart>
                        <h1 class="px-2 text-sm">Beğeni Sayısı:</h1>
                    </div>
                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <FaStar class="text-lg"></FaStar>
                        <h1 class="px-2 text-sm">Aktivite Puanım: </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileCard