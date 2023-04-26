import React, { useEffect, useRef, useState } from "react";
import { FaComment } from "react-icons/fa";
import ResponseCard from "./ResponseCard";


export default function ViewResponseCard(props) {
    const [showModal, setShowModal] = React.useState(false);


    return (
        <>
            <FaComment
                class="text-sm cursor-pointer ml-1 align-baseline "
                onClick={() => setShowModal(true)}
                type="button"
            ></FaComment>
            {showModal ? (
                <>
                    <div className="justify-center  text-white  lowercase items-center font-bodyFont  mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative font-bodyFont w-auto my-6 mx-auto max-w-5xl">

                            {/*content*/}
                            <div className=" bg-gray-800  border-gray-600 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}
                                <div className=" flex items-start  p-5  border-slate-200 rounded-t">
                                    <button className="hidden  sm:grid sm:h-16 sm:w-16 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full ">
                                        US
                                    </button>
                                    <div class="">
                                        <p class="ml-2 mt-5 text-lg text-center align-middle "> Kullanıcı adı</p>
                                        <p class="ml-2  text-sm dark:text-gray-400">Created date </p>
                                    </div>
                                </div>
                                {/*body*/}
                                <hr class="w-auto"></hr>
                                <div className=" relative block items-center align-middle ml-4 ">
                                    <div class="flex mt-2 px-4   flex-col justify-between">
                                        <p className="my-2 text-2xl ">
                                            bizimle çalışmak ister misiniz
                                        </p>
                                        <p className="text-lg ">
                                            harika bir iş fırsatı
                                        </p>
                                    </div>

                                    <div class="  grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2 ">
                                        <ResponseCard></ResponseCard> <ResponseCard></ResponseCard>
                                        <ResponseCard></ResponseCard>  <ResponseCard></ResponseCard>

                                    </div>

                                    <form class="px-2 py-2 ">
                                        <div class="flex mt-2">
                                            <textarea type="text" placeholder="cevap verin" maxLength={300} required class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                    </form>
                                    <div className="flex items-center justify-end m-2  border-slate-200 rounded-b">
                                        <button
                                            className="text-white  hover:bg-green-600 duration-200 transition ease-in border-2 rounded-lg background-transparent px-5 py-3 text-sm outline-none focus:outline-none m-2 "
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Gönder
                                        </button>
                                        <button
                                            className="text-white  hover:bg-red-600 duration-200 transition ease-in border-2 rounded-lg background-transparent   px-5 py-3 text-sm outline-none focus:outline-none m-2 "
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Kapat
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}