import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { sleep } from '../../../ServiceComponent/Sleep/Sleep';
import JobTypeTable from './JobTypeTable';

export default function ViewJobType(props) {
    const [showModal, setShowModal] = React.useState(false);

    const [isLoadedJobType, setIsLoadedJobType] = useState(false);

    const [error, setError] = useState(null);
    const [AlljobType, setAllJobType] = useState([]);

    const getAllJobType = async () => {
        await axios
            .get("/jobType/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoadedJobType(true);
                    setAllJobType(result);
                },
                (error) => {
                    setIsLoadedJobType(true);
                    setError(error);
                }
            );
    };


    useEffect(() => {
        getAllJobType();

    }, []);

    return (
        <>
            <button
                type='button'
                onClick={() => setShowModal(true)}
                class=" px-6 py-3 text-sm font-medium tracking-wide mr-1 text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-md hover:bg-pink-700  focus:outline-none focus:ring focus:ring-yellow-400"
            >
                İlan Türleri
            </button>

            {showModal ? (
                <>
                    <div
                        className="justify-center  font-bodyFont  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relativew-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-xl font-semibold">
                                        İlan Türleri
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className=" ">
                                    <div class="font-bodyFont mx-20">
                                        {AlljobType.map((key, index) => (
                                            <JobTypeTable jobTypeName={key.jobTypeName} id={key.id} getAllJobType={getAllJobType} ></JobTypeTable>
                                        ))}

                                    </div>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-white  hover:bg-red-600 duration-200  transition ease-in border-2 rounded-lg    px-5 py-3 text-sm outline-none focus:outline-none m-2 "
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Kapat
                                    </button>

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