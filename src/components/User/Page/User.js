import React from 'react'
import { Link } from 'react-router-dom'

function User() {
    return (
        <div className=" mx-auto max-w-7xl py-12  sm:px-6 lg:px-5  ">
            <div class=" text-white font-bodyFont  ">
                <div class="flex p-16 mt-28">
                    <div class="">
                        <div class="grid grid-cols-1 md:grid-cols-3">
                            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                                <div>
                                    <p class="font-bold  text-xl">22</p>
                                    <p class="text-gray-400">Friends</p>
                                </div>
                                <div>
                                    <p class="font-bold text-xl">10</p>
                                    <p class="text-gray-400">Photos</p>
                                </div>
                                <div>
                                    <p class="font-bold  text-xl">89</p>
                                    <p class="text-gray-400">Comments</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                                <Link>
                                <button
                                        class="text-white py-2 px-4  rounded-lg border-white border-2 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                        >
                                    Başvurularım
                                </button></Link>
                                <Link to="/userApplyJob">
                                    <button
                                        class="text-white py-2 px-4  rounded-lg border-white border-2 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                    >
                                        Başvurularım
                                    </button>
                                </Link>

                            </div>
                        </div>
                        <div class="mt-20 text-center border-b pb-12">
                            <h1 class="text-4xl font-medium ">Jessica Jones, <span class="font-light ">27</span></h1>
                            <p class="font-light mt-3">Bucharest, Romania</p>

                            <p class="mt-8 ">Solution Manager - Creative Tim Officer</p>
                            <p class="mt-2 ">University of Computer Science</p>
                        </div>

                        <section class="">
                            <div class="container px-6 py-10 mx-auto">
                                <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                    Kariyeri Hakkında
                                </h1>
                                <div class="flex items-start max-w-6xl mx-auto mt-16">
                                    <div>
                                        <p class="flex items-center text-center  lg:mx-8">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quam. Odio voluptatem officiis
                                            eos illo! Pariatur, totam alias. Beatae accusamus earum quos obcaecati minima molestias. Possimus
                                            minima dolores itaque! Esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates
                                            fugiat corrupti laudantium dolores reiciendis pariatur esse quod nihil quia cupiditate debitis
                                            quisquam nemo, accusamus animi explicabo? Architecto, unde laboriosam?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div></div>
    )
}

export default User