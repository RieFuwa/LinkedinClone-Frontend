import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { sleep } from '../../../ServiceComponent/Sleep/Sleep';

function UpdateJob(props) {
    const [showModal, setShowModal] = React.useState(false);
    const { jobId } = props;
    const [isLoadedJob, setIsLoadedJob] = useState(false);
    const [error, setError] = useState(null);
    const [jobById, setJobById] = useState([]);
    let navigate = useNavigate();


    const [job, setJob] = useState({
        jobDetails: "",
    })

    const { jobDetails } = job

    const getJobById = () => {
        axios
            .get("/job/" + jobId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoadedJob(true);
                    setJobById(result)
                    setJob(result);
                },
                (error) => {
                    setIsLoadedJob(true);
                    setError(error);
                }
            );
    };


    const onSubmit = async (e) => {
        e.preventDefault();//submit yaparken sayfayı yenilemyior
        await axios.put(`/job/jobUpdate/${jobId}`, job)
            .then(function (response) {
                window.location.reload();
            })

    }

    useEffect(() => {
        getJobById()
    }, [])

    const onInputChange = (e) => {
        setJob({ ...job, [e.target.name]: e.target.value })
    }

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                class="text-pink-500 mt-5 hover:underline cursor-pointer text-sm">İlanı Güncelle
            </button>

            {showModal ? (
                <>
                    <div className="justify-center font-bodyFont  text-white   items-center  mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative font-bodyFont w-auto my-6 mx-auto max-w-5xl">

                            {/*content*/}
                            <div className=" p-5  bg-gray-800  border-gray-600 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}

                                <div className=" flex justify-center  border-slate-200 rounded-t">
                                    <p className='text-2xl'>İlanınızı  Güncelleyin</p>
                                </div>
                                {/*body*/}
                                <form
                                    onSubmit={(e) => onSubmit(e)}
                                    class="mt-4">
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">İlan Detayı</label>
                                        <textarea
                                            onChange={(e) => onInputChange(e)}
                                            value={jobDetails}
                                            defaultValue={jobById.jobDetails}
                                            type="text"
                                            id="jobDetails"
                                            name="jobDetails"
                                            maxLength={250}
                                            class=" w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>                        
                                    <div className='flex mx-2 '>
                                        <button
                                            type='submit'
                                            className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                            Güncelle
                                        </button>
                                        <button
                                            className="w-full px-6 py-3 mt-6 ml-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-md hover:bg-pink-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Kapat
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}

export default UpdateJob