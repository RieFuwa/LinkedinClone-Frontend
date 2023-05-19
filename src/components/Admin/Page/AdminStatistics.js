import React from 'react'
import Bar from '../../Company/Chart/Bar'
import CompanyApplyJobCount from '../../Company/Chart/CompanyApplyJobCount'
import CompanyJobTypeCount from '../../Company/Chart/CompanyJobTypeCount'
import Radar from '../../Company/Chart/Radar'

function AdminStatistics() {
  return (
    <div class=" mx-auto min-h-screen   text-white font-bodyFont  bg-gradient-to-r from-dark-500 via-dark-700 to-dark-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl mt-1">Açılan İş İlan Sayıları</p>
                        <CompanyApplyJobCount></CompanyApplyJobCount>
                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl">Başvuru Saysısı</p>
                        <CompanyJobTypeCount></CompanyJobTypeCount>

                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl ">Bilmem ne İstatistigi</p>
                        <CompanyJobTypeCount></CompanyJobTypeCount>

                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl">Bilmem ne İstatistigi</p>
                        <Radar></Radar>
                    </div>
                </a>
                <a
                    class="flex m-4  justify-center  hover:scale-105 rounded-xl border p-8 bg-gray-900 border-gray-800  shadow-xl transition hover:border-green-500/10 hover:shadow-green-500/10"
                >
                    <div class="justify-end">
                        <p class="text-center text-2xl">Bilmem ne İstatistigi</p>
                        <br></br> <br></br>
                        <Bar></Bar>
                    </div>
                </a>
            </div>
        </div>
  )
}

export default AdminStatistics