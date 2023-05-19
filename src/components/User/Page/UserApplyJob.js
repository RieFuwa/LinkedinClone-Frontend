import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { sleep } from '../../ServiceComponent/Sleep/Sleep';
import ApplyJob from '../Card/ApplyJob'

function UserApplyJob() {

    const [isLoadedUpj, setIsLoadedUpj] = useState(false);
    const [error, setError] = useState(null);
    const [userApplyJob, setUserApplyJob] = useState([]);

    const getUserApplyJobs = async () => {
        await axios
            .get("/toApplyJob/getAllUserApplyJob?userId=" + localStorage.getItem("signedUserId"))
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoadedUpj(true);
                    setUserApplyJob(result);
                },
                (error) => {
                    setIsLoadedUpj(true);
                    setError(error);
                }
            );
    };

   
    

    useEffect(() => {
        getUserApplyJobs();
        // if (isInitialMount.current) {
        //   isInitialMount.current = false;
        // } else {
        //   getUserPost();
        // }
    }, []);
    if (error) {
        return (
            <div className=" text-white flex max-w-3xl py-6 sm:px-6 lg:px-5 mx-56 ">
                <div class=" mt-4">
                    <p class=" text-3xl">
                        <FaInfoCircle></FaInfoCircle>
                        *Bilinmeyen bir hata söz konusu...
                        Lütfen destek ile iletişime geçin.
                    </p>
                </div>
            </div>
        );
    } if (!isLoadedUpj) {
        return (
            <div className="flex  justify-center">
                <div class="">
                    <div class=" mt-32 transform m-auto">
                        <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32"></div>
                    </div>
                </div>
            </div>
        );

    } else {

        return (
            <div className=" mx-auto max-w-7xl py-12  sm:px-6 lg:px-5  ">
                <div class=" text-white font-bodyFont  ">
                    <div class="flex justify-center  p-16">
                        <section class=" body-font mt-4 overflow-hidden">
                            <div class="text-center text-2xl">
                                <p>Başvurularım</p>
                                <hr class="mt-4"></hr>
                            </div>
                            <div class=" px-5 py-8 mx-auto">
                                <div class="-my-8 divide-y-2 flex divide-gray-100">
                                    {isLoadedUpj ? (
                                        <div class="flex text-white  mt-4">
                                            <div class="">
                                                {userApplyJob.map((key, index) => (
                                                    <ApplyJob getUserApplyJobs={getUserApplyJobs} key={index} id={key.id} userId={key.userId} jobId={key.jobId} companyName={key.companyName} jobTypeName={key.jobTypeName} createDate={key.createDate} ></ApplyJob>))}
                                            </div>
                                        </div>) : (
                                        <div className="flex justify-center ">
                                            <div class=" absolute transform sm:m-2 lg:m-12 ">
                                                <div class="border-t-transparent  border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32">
                                                </div>
                                            </div>
                                        </div>
                                    )}




                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserApplyJob