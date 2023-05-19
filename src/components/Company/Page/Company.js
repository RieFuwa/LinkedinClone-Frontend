import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import JobPostingCard from '../../Job/Card/JobPostingCard'
import { sleep } from '../../ServiceComponent/Sleep/Sleep';
import UpdateCompany from '../Card/UpdateCompany/UpdateCompany';

function Company() {
    const { companyId } = useParams();

    const [isLoadedCompany, setIsLoadedCompany] = useState(false);
    const [isLoadedCompanyJob, setIsLoadedCompanyJob] = useState(false);
    const [isLoadedApplyCompany, setIsLoadedApplyCompany] = useState(false);
    const [isLoadedCompanyJobCount, setIsLoadedJobCount] = useState(false);

    const [error, setError] = useState(null);

    const [companyById, setCompanyById] = useState([]);
    const [companyApplyJobCount, setCompanyApplyJobCount] = useState([]);
    const [companyJob, setCompanyJob] = useState([]);
    const [companyJobCount, setCompanyJobCount] = useState([]);


    const getCompanyById = async () => {
        await axios
            .get("/company/" + companyId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoadedCompany(true);
                    setCompanyById(result);
                },
                (error) => {
                    setIsLoadedCompany(true);
                    setError(error);
                }
            );
    };
    const getCompanyJobs = async () => {
        await axios
            .get("/job/getAllCompanyJob?companyId=" + companyId)
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

    const getApplyJobCountByCompanyId = async () => {
        await axios
            .get("/job/countByJobByCompany/" + companyId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    setIsLoadedJobCount(true);
                    setCompanyJobCount(result);
                },
                (error) => {
                    setIsLoadedJobCount(true);
                    setError(error);
                }
            );
    };

    const getCompanyJobCount = async () => {
        await axios
            .get("/toApplyJob/getApplyJobCountByCompanyId/" + companyId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    setIsLoadedApplyCompany(true);
                    setCompanyApplyJobCount(result);
                },
                (error) => {
                    setIsLoadedApplyCompany(true);
                    setError(error);
                }
            );
    };

    useEffect(() => {
        getCompanyById();
        getCompanyJobs();
        getApplyJobCountByCompanyId();
        getCompanyJobCount();
        // if (isInitialMount.current) {
        //   isInitialMount.current = false;
        // } else {
        //   getUserPost();
        // }
    }, []);

    if (error) {
        return (
            <div className="flex justify-center text-white  ">
                <div class=" mt-40">
                    <p class=" text-3xl">
                        <FaInfoCircle></FaInfoCircle>
                        *Bilinmeyen bir hata söz konusu...
                        Lütfen destek ile iletişime geçin.
                    </p>
                </div>
            </div>
        );
    } if (!isLoadedCompany) {
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

                    <div class="flex p-16">
                        <section class=" container px-5 mx-auto ">
                            <h1 class="sm:text-7xl text-5xl mt-8 text-center  font-medium  uppercase">{companyById.companyName} </h1>
                            <div class="text-center w-full">
                                <span class="text-center text-lg text-gray-400">{companyById.companyAddress} </span>
                                <br></br>
                                <span class="text-center text-lg text-gray-400"> {companyById.companyMail} </span>
                            </div>
                            {companyById.id == localStorage.getItem("signedCompanyId") ?
                                (
                                    <div className='flex justify-center mt-6'>
                                        <UpdateCompany ></UpdateCompany>
                                    </div>
                                ) :
                                null}
                            <div class="container  mx-auto flex px-5 py-20 items-center justify-center flex-col">
                                <div class="text-center mt-8 lg:w-2/3 w-full">
                                    <svg aria-hidden="true" class="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" /></svg>
                                    <h1 class="sm:text-3xl text-2xl  text-center  font-medium  uppercase">hakkımızda</h1>
                                    <p class=" text-lg mt-4">"{companyById.companyDetails}"</p>
                                </div>
                            </div>
                            <section class="  ">
                                <div class="container px-5 mx-auto">
                                    <h1 class="sm:text-3xl text-2xl mt-20 mb-8 font-medium text-center uppercase">İLANLARIMIZ</h1>
                                    <div class="block ">
                                        {isLoadedCompanyJob ? (
                                            <div class=" flex w-full text-white  mt-4">
                                                <div class="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3">
                                                    {companyJob.map((key, index) => (
                                                        <JobPostingCard key={index} id={key.id} companyAddress={key.companyAddress} companyId={key.companyId} companyName={key.companyName} createDate={key.createDate} jobDetails={key.jobDetails} ></JobPostingCard>))}
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


                                    <div class="flex  flex-col text-center w-full mt-20  mb-20">
                                        <h1 class="sm:text-3xl text-2xl mt-8 font-medium mb-8 text-center uppercase">İSTATİSTİKLERİMİZ</h1>
                                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                                    </div>
                                    <div class="flex flex-wrap -m-4 text-center justify-center">
                                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                                </svg>
                                                <h2 class="title-font font-medium text-3xl ">{companyJobCount}</h2>
                                                <p class="leading-relaxed">Açılan İş İlanı</p>
                                            </div>
                                        </div>
                                        <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                                            <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                                    <circle cx="9" cy="7" r="4"></circle>
                                                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                                </svg>
                                                <h2 class="title-font font-medium text-3xl ">{companyApplyJobCount} </h2>
                                                <p class="leading-relaxed">Toplam Başvuru Sayısı</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default Company