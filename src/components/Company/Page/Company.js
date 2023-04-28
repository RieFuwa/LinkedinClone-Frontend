import React from 'react'
import JobPostingCard from '../../Job/Card/JobPostingCard'

function Company() {
    return (
        <div className=" mx-auto max-w-7xl py-12  sm:px-6 lg:px-5  ">
            <div class=" text-white font-bodyFont  ">
                <div class="flex p-16">
                    <section class=" ">
                        <h1 class="sm:text-7xl text-5xl text-left  font-medium  uppercase">ASELSAN</h1>
                        <div class="text-left lg:w-2/3 w-full">
                            <span class="text-center text-lg text-gray-400">istanbul-türkiye</span>
                            <br></br>
                            <span class="text-center text-lg text-gray-400">aselsan@gmail.com</span>
                        </div>

                        <div class="container  mx-auto flex px-5 py-20 items-center justify-center flex-col">

                            <div class="text-center lg:w-2/3 w-full">
                                <h1 class="sm:text-3xl text-2xl mt-4 text-center  font-medium  uppercase">hakkımızda</h1>
                                <p class=" text-lg mt-4">" Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork. "</p>
                            </div>
                        </div>
                        <section class="  ">
                            <div class="container px-5 py-20 mx-auto">
                                <h1 class="sm:text-3xl text-2xl mt-32  mb-8 font-medium text-center uppercase">ŞİRKET İLANLARI</h1>
                                <JobPostingCard></JobPostingCard>

                                <div class="flex flex-col text-center w-full mb-20">
                                    <h1 class="sm:text-3xl text-2xl mt-8  mb-4 font-medium text-center uppercase">İSTATİSTİKLERİMİZ</h1>
                                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                                </div>
                                <div class="flex flex-wrap -m-4 text-center">
                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                            </svg>
                                            <h2 class="title-font font-medium text-3xl ">2.7K</h2>
                                            <p class="leading-relaxed">Downloads</p>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                            </svg>
                                            <h2 class="title-font font-medium text-3xl ">1.3K</h2>
                                            <p class="leading-relaxed">Users</p>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                            </svg>
                                            <h2 class="title-font font-medium text-3xl ">74</h2>
                                            <p class="leading-relaxed">Files</p>
                                        </div>
                                    </div>
                                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            </svg>
                                            <h2 class="title-font font-medium text-3xl">46</h2>
                                            <p class="leading-relaxed">Places</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Company