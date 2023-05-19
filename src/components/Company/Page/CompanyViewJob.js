import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { sleep } from '../../ServiceComponent/Sleep/Sleep';
import ViewJob from '../Card/ViewJob/ViewJob'

function CompanyViewJob() {
    const [isLoadedCompanyJob, setIsLoadedCompanyJob] = useState(false);
    const [error, setError] = useState(null);
    const [companyJob, setCompanyJob] = useState([]);

    const getCompanyJobs = async () => {
        await axios
            .get("/job/getAllCompanyJob?companyId=" + localStorage.getItem("signedCompanyId"))
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoadedCompanyJob(true);
                    setCompanyJob(result);
                },
                (error) => {
                    setIsLoadedCompanyJob(true);
                    setError(error);
                }
            );
    };
    useEffect(() => {
        getCompanyJobs();
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
    } if (!isLoadedCompanyJob) {
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
            <div class="  min-h-screen text-white font-bodyFont  bg-gradient-to-r from-dark-500 via-dark-700 to-dark-800 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 ">

                <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {companyJob.map((key, index) => (
                        <ViewJob getCompanyJobs={getCompanyJobs}  companyName={key.companyName} createDate={key.createDate} jobDetails={key.jobDetails} id={key.id} companyId={key.companyId} jobTypeName={key.jobType.jobTypeName} key={index} applyJobList={key.applyJobList}></ViewJob>


                    ))}
                </div>
            </div >
        )
    }
}
export default CompanyViewJob