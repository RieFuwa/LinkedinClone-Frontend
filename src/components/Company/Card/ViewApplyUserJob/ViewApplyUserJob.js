import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { sleep } from '../../../ServiceComponent/Sleep/Sleep';
import ApplyJobUserTable from './ApplyJobUserTable';

export default function ViewApplyUserJob(props) {
    const [showModal, setShowModal] = React.useState(false);
    const { jobId } = props;


    const [isLoadedViewApplyUserJob, setLoadedViewApplyUserJob] = useState(false);

    const [error, setError] = useState(null);
    const [applyUserJob, setApplyUserJob] = useState([]);

    const getViewApplyJobs = async () => {
        await axios
            .get("/toApplyJob/getAllJobApplyJob?jobId=" + jobId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setLoadedViewApplyUserJob(true);
                    setApplyUserJob(result);
                },
                (error) => {
                    setLoadedViewApplyUserJob(true);
                    setError(error);
                }
            );
    };
    useEffect(() => {
        getViewApplyJobs();
        // if (isInitialMount.current) {
        //   isInitialMount.current = false;
        // } else {
        //   getUserPost();
        // }
    }, []);
  
        return (
            <>
                <p
                    onClick={() => setShowModal(true)}
                    class="text-pink-500 mt-5 cursor-pointer hover:underline text-sm">Başvuranları Görüntüle</p>

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
                                           Gelen Başvurular
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
                                        <div class="font-bodyFont">
                                            <table class=" min-w-full divide-y-2 divide-gray-200 bg-gray-900 text-sm">
                                                <thead class="ltr:text-left text-xl rtl:text-right">
                                                    <tr>
                                                        <th class="whitespace-nowrap px-2 py-2 font-medium text-white ">
                                                            Adı
                                                        </th>
                                                        <th class="whitespace-nowrap px-2 py-2 font-medium text-white ">
                                                            Başvuru Tarihi
                                                        </th>
                                                        <th class="whitespace-nowrap px-2 py-2 font-medium text-white ">
                                                            Mail
                                                        </th>
                                                        <th class="whitespace-nowrap px-2 py-2 font-medium text-white ">
                                                            Üniversite
                                                        </th>
                                                        <th class="whitespace-nowrap px-2 py-2 font-medium text-white ">
                                                            Adresi
                                                        </th>
                                                        <th class="px-4 py-2"></th>
                                                    </tr>
                                                </thead>
                                                {applyUserJob.map((key, index) => (
                                                    <ApplyJobUserTable id={key.id} key={index} user={key.user} createDate={key.createDate} applyJobList={key.applyJobList} getViewApplyJobs={getViewApplyJobs} ></ApplyJobUserTable>
                                                ))}
                                            </table>
                                        </div>

                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-white  hover:bg-red-600 duration-200 bg-red-500 transition ease-in border-2 rounded-lg    px-5 py-3 text-sm outline-none focus:outline-none m-2 "
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