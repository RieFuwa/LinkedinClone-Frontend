import React from 'react'
import { FaHeart, FaExclamationCircle, FaComment } from "react-icons/fa";
import CreateReport from '../Report/CreateReport';
import ViewResponseCard from '../ResponsePost/ViewResponseCard';

function PostCard() {
    return (
        <div class="flex-grow  w-full ">
            <section class=" text-gray-600 body-font">
                <div class="mt-5 ">
                    <div class=" flex  w-full text-white  p-1 ">
                        <article className="rounded-xl  bg-gray-800 shadow-white shadow-sm p-4sm:p-6 lg:p-8">
                            <div className="flex sm:m-5 lg:m-auto  items-start  sm:gap-8 ">
                                <div
                                    className="hidden  sm:grid sm:h-20 sm:w-20 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full "
                                    aria-hidden="true"
                                >
                                    <div className="flex items-center gap-1">
                                        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                        <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
                                        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
                                        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
                                    </div>
                                </div>

                                <div>
                                    <strong
                                        className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                                    >
                                        Etiketler
                                    </strong>

                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                        <a  > Gönderi Başlığı </a>
                                    </h3>

                                    <p className="mt-1 text-sm">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam nulla
                                        amet voluptatum sit rerum, atque, quo culpa ut necessitatibus eius
                                        suscipit eum accusamus, aperiam voluptas exercitationem facere aliquid
                                        fuga. Sint.
                                    </p>

                                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">

                                        <div className="flex items-center gap-1 text-gray-300">
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                ></path>
                                            </svg>

                                            <p className="text-xs font-medium">Gönderi tarihi</p>
                                        </div>
                                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                        <FaHeart class="text-sm  align-baseline text-red-500"></FaHeart>122
                                        <ViewResponseCard></ViewResponseCard>
                                        <CreateReport></CreateReport>
                                    </div>
                                    <p className="mt-2 text-xs font-medium text-gray-300 sm:mt-0">
                                        Gönderiyi yazan <a href="#" className="underline hover:text-gray-500">Barry</a>
                                    </p>
                                </div>

                            </div>

                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PostCard