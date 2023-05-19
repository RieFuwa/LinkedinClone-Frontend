import React from 'react'
import Bar from '../../Company/Chart/Bar'
import CompanyApplyJobCount from '../../Company/Chart/CompanyApplyJobCount'
import CompanyJobTypeCount from '../../Company/Chart/CompanyJobTypeCount'
import NotActive from '../../Company/Chart/NotActive'
import Radar from '../../Company/Chart/Radar'
import AllCompany from '../Chart/AllCompany'
import AllUser from '../Chart/AllUser'
import JobTypeByCount from '../Chart/JobTypeByCount'
import PostReportByCount from '../Chart/PostReportByCount'

function AdminStatistics() {
    return (
        <div class=" mx-auto min-h-screen   text-white font-bodyFont  bg-gradient-to-r from-dark-500 via-dark-700 to-dark-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl ">Kullanıcı Sayısı</p>
                        <AllUser></AllUser>

                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl">Şirket Sayısı</p>
                        <AllCompany></AllCompany>
                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl mt-1">Açılan Tüm İş İlanları</p>
                        <JobTypeByCount></JobTypeByCount>
                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl">Gönderi Şikayet Sayısı</p>
                        <PostReportByCount></PostReportByCount>

                    </div>
                </a>

                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
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

export default AdminStatistics