import { CChart } from '@coreui/react-chartjs'
import React from 'react'
import { Link } from 'react-router-dom'
import Error from '../../../pages/Error'
import SideBar from '../Header/SideBar'

function CompanyPanel() {
 

    const CompanyPanelCard = [
        { title: "İş İlanınızı Oluşturun", explanation: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur ", to: "/companyPanelCreateJob" },
        { title: "İlanlarınızı Yönetin", explanation: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur", to: "/companyPanelViewJob" },
        { title: "İstatistiklerinizi İnceleyin", explanation: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur", to: "/companyPanelStatistics" },
        { title: "Şirket Sayfanızı İnceleyin", explanation: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur", to: "/companyProfile/"+localStorage.getItem("signedCompanyId") },
        { title: "Destek Talep Edin", explanation: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur", to: "" },
    ]
    if (localStorage.getItem("ROLE_MANAGER") == ("true")) {

        return (
            <div class="  min-h-screen text-white font-bodyFont  bg-gradient-to-r from-dark-500 via-dark-700 to-dark-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">
                <section class="bg-gray-800 text-white">
                    <div
                        class="mx-auto min-h-screen max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
                    >
                        <div class="mx-auto max-w-lg text-center">
                            <h2 class="text-3xl font-bold sm:text-4xl">{localStorage.getItem("signedCompanyName")} Şirket Paneline Hoşgeldiniz</h2>

                            <p class="mt-8 text-gray-300">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
                                aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
                                saepe laborum.
                            </p>
                        </div>

                        <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {CompanyPanelCard.map((key, index) => (
                                <a
                                    key={index}
                                    class="block  hover:scale-105 rounded-xl border bg-gray-900 border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="h-10 w-10 text-pink-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        />
                                    </svg>
                                    <Link to={key.to}>
                                        <h2 class="mt-4 text-xl font-bold text-white">{key.title}</h2>
                                        <p class="mt-1 text-sm text-gray-300">
                                            {key.explanation}
                                        </p>
                                    </Link>
                                </a>

                            ))}

                        </div>

                        <div class="mt-12 text-center">
                            <Link to={"/companyPanelCreateJob"}>  <button
                                href="#"
                                class="inline-block rounded duration-200 bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                İlanınızı Oluşturun
                            </button></Link>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default CompanyPanel