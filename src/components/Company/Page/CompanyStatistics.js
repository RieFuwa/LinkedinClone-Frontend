import React from 'react'
import Bar from '../Chart/Bar'
import JobApplyByCountCompany from '../Chart/CompanyApplyJobCount'
import CompanyJobTypeCount from '../Chart/CompanyJobTypeCount'
import NotActive from '../Chart/NotActive'
import Radar from '../Chart/Radar'


function CompanyStatistics() {
    return (
        <div class="  min-h-screen text-white font-bodyFont  bg-gradient-to-r from-dark-500 via-dark-700 to-dark-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl mt-1">Açılan İş İlan Sayısı</p>
                        <CompanyJobTypeCount></CompanyJobTypeCount>
                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl">İlanlara Başvuru Sayısı</p>
                        <JobApplyByCountCompany></JobApplyByCountCompany>

                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl ">Yakında Gelecek</p>
                        <NotActive></NotActive>

                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl">Yakında Gelecek</p>
                        <NotActive></NotActive>
                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl">Yakında Gelecek</p>
                        
                        <NotActive></NotActive>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CompanyStatistics