import React, { useEffect, useRef, useState } from "react";


export default function CreatePost(props) {
    const [showModal, setShowModal] = React.useState(false);


    return (
        <>
            <button
                class=" w-full flex-grow h-16 t rounded-full border-2 text-left text-lg border-white  text-white"
                type="button"
                onClick={() => setShowModal(true)}
            >
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;Gönderi oluştur
            </button>
            {showModal ? (
                <>
                    <div className="justify-center  text-white  lowercase items-center font-bodyFont  mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative font-bodyFont w-auto my-6 mx-auto max-w-5xl">
                            <form>
                                {/*content*/}
                                <div className=" bg-gray-800  border-gray-600 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                    {/*header*/}

                                    <div className=" flex items-start  p-5  border-slate-200 rounded-t">
                                        <button className="hidden  sm:grid sm:h-16 sm:w-16 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full ">
                                            US
                                        </button>
                                        <p class="ml-2 mt-5 text-right align-middle "> Kullanıcı adı</p>
                                    </div>
                                    {/*body*/}
                                    <form class=" px-5 py-">
                                        <div class="flex-1 ">
                                            <input type="text" placeholder="başlık adi" maxLength={50} required class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                        <div class="flex-1 mt-4">
                                            <textarea type="text" placeholder="gönderi içerği" maxLength={300} required class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>


                                    </form>

                                    <div className="flex items-center justify-end p-6  border-slate-200 rounded-b">
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
                            </form>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}