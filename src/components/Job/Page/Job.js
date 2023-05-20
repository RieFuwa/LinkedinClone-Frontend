import React, { useEffect, useState } from 'react'
import JobPostingCard from '../Card/JobPostingCard'
import axios from 'axios';
import { FaInfoCircle } from 'react-icons/fa';
import { sleep } from '../../ServiceComponent/Sleep/Sleep';
import { Link } from 'react-router-dom';

function Job() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [job, setJob] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchByJobType, setSearchByJobType] = useState("0");

    const [isLoadedJobType, setIsLoadedJobType] = useState(false);
    const [AlljobType, setAllJobType] = useState([]);

    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearchText(lowerCase);

    };
    const getAllJobType = async () => {
        await axios
            .get("/jobType/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {

                    setIsLoadedJobType(true);
                    setAllJobType(result);
                },
                (error) => {
                    setIsLoadedJobType(true);
                    setError(error);
                }
            );
    };

    const getAllJob = () => {
        axios
            .get("/job/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoaded(true);
                    setJob(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    };

    const onInputChange = (e) => {
        setSearchByJobType(e.target.value)

    };

    useEffect(() => {
        getAllJob();
        getAllJobType();
    }, []);


    if (error) {
        return (
            <div className=" text-white flex max-w-3xl py-6 sm:px-6 lg:px-5 mx-56 ">
                <div class=" mt-4">
                    <p class=" flex text-4xl">
                        <FaInfoCircle></FaInfoCircle>
                        Bilinmeyen bir hata söz konusu...
                        Lütfen destek ile iletişime geçin.
                    </p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex mx-auto max-w-7xl font-bodyFont  py-16 sm:px-6 lg:px-5  ">
                <div class="p-16 flex-grow  w-full  text-white">

                    <div class="flex justify-between ">
                        <div class="relative mx-3 w-full sm:w40">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>
                            <input value={searchText} onChange={inputHandler} type="text" class="w-full py-1.5 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Adrese Göre Ara" />
                        </div>
                        <div class="relative mx-3 w-96 sm:w40 ">

                            <select
                                defaultValue={"115"}
                                onChange={(e) => onInputChange(e)}
                                class="w-full py-1.5 pl-10 pr-4  appearance-none text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name="jobTypeId"
                                placeholder="baslik turu seciniz"
                            >
                                <option value={"0"} > Hepsi</option>

                                {AlljobType.map((key, index) => (
                                    <>
                                        <option value={key.id} key={index} > {key.jobTypeName} </option>
                                    </>
                                ))}

                            </select>

                        </div>
                    </div>
                    {!localStorage.getItem("signedUserId") ? <Link to={"/login"}>
                        {isLoaded ? (

                            <div class=" flex w-full text-white  mt-4">
                                <div class="grid grid-cols-3 w-full sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3">

                                    {job
                                        .filter((key) => {
                                            if (searchText != "" && searchByJobType != "0") {
                                                if (
                                                    (key.companyAddress || "")
                                                        .toLowerCase()
                                                        .includes(searchText.toLowerCase()) && (key.jobType.id == searchByJobType)
                                                ) {
                                                    return job;
                                                }
                                            } else if (searchText == "" && searchByJobType != "0") {
                                                if (
                                                    (key.jobType.id == searchByJobType)
                                                ) {
                                                    return job;
                                                }
                                            } else if (searchText != "" && searchByJobType == "0") {
                                                if (
                                                    (key.companyAddress || "")
                                                        .toLowerCase()
                                                        .includes(searchText.toLowerCase())
                                                ) {
                                                    return job;
                                                }
                                            } else {
                                                return job;
                                            }
                                        }).
                                        map((key, index) => (
                                            <JobPostingCard key={index} id={key.id} companyAddress={key.companyAddress} companyId={key.companyId} companyName={key.companyName} createDate={key.createDate} jobDetails={key.jobDetails} jobTypeName={key.jobType.jobTypeName} jobTypeId={key.jobType.id} ></JobPostingCard>))}
                                </div>
                            </div>) : (
                            <div className="flex justify-center ">
                                <div class=" absolute transform sm:m-2 lg:m-12 ">
                                    <div class="border-t-transparent  border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32">
                                    </div>
                                </div>
                            </div>
                        )}
                    </Link> : <div>
                        {isLoaded ? (

                            <div class=" flex w-full text-white  mt-4">
                                <div class="grid grid-cols-3 w-full sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3">


                                    {job
                                        .filter((key) => {
                                            if (searchText != "" && searchByJobType != "0") {
                                                if (
                                                    (key.companyAddress || "")
                                                        .toLowerCase()
                                                        .includes(searchText.toLowerCase()) && (key.jobType.id == searchByJobType)
                                                ) {
                                                    return job;
                                                }
                                            } else if (searchText == "" && searchByJobType != "0") {
                                                if (
                                                    (key.jobType.id == searchByJobType)
                                                ) {
                                                    return job;
                                                }
                                            } else if (searchText != "" && searchByJobType == "0") {
                                                if (
                                                    (key.companyAddress || "")
                                                        .toLowerCase()
                                                        .includes(searchText.toLowerCase())
                                                ) {
                                                    return job;
                                                }
                                            } else {
                                                return job;
                                            }
                                        }).
                                        map((key, index) => (
                                            <JobPostingCard key={index} id={key.id} companyAddress={key.companyAddress} companyId={key.companyId} companyName={key.companyName} createDate={key.createDate} jobDetails={key.jobDetails} jobTypeName={key.jobType.jobTypeName} jobTypeId={key.jobType.id} ></JobPostingCard>))}
                                </div>
                            </div>) : (
                            <div className="flex justify-center ">
                                <div class=" absolute transform sm:m-2 lg:m-12 ">
                                    <div class="border-t-transparent  border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32">
                                    </div>
                                </div>
                            </div>
                        )}</div>}


                </div>
            </div>
        )
    }
}

export default Job