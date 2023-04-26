import React, { useEffect, useRef, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";



export default function CreateReport(props) {
    const [showModal, setShowModal] = React.useState(false);


    return (
        <>
            <FaExclamationCircle
                class="text-sm cursor-pointer ml-1 align-baseline "
                onClick={() => setShowModal(true)}
                type="button"
            ></FaExclamationCircle>
            {showModal ? (
                <>
                    <div className="justify-center  text-white items-center font-bodyFont  mt-40 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative font-bodyFont w-auto my-6 mx-auto max-w-5xl">

                            {/*content*/}
                            <div className=" bg-gray-800  border-gray-600 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}

                                {/*body*/}
                                <div className=" relative block items-center align-middle ml-4 ">
                                    <div class="flex mt-2 px-4   flex-col justify-between">
                                        <p className="my-2 text-2xl ">
                                            Lütfen şikayet sebebinizi yazınız
                                        </p>
                                        <form class="mt-2 my-2 ">
                                            <div class="flex">
                                                <textarea type="text" placeholder="şikayet sebebiniz" maxLength={300} required class="block w-full p-8 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                            </div>
                                        </form>
                                    </div>



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