import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaBackspace, FaInfoCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom'
import { formatDate } from "../../ServiceComponent/Date/StringFormatter";
import { sleep } from "../../ServiceComponent/Sleep/Sleep";

function ViewJob() {
    const { jobId } = useParams();
    const [isLoadedJob, setIsLoadedJob] = useState(false);
    const [isApplyJobCount, setIsApplyJobCount] = useState(false);

    const [error, setError] = useState(null);

    const [jobById, setJobById] = useState([]);
    const [ApplyJobCount, setApplyJobCount] = useState([]);



    let navigate = useNavigate();

    function hanndleClickNavigate() {
        navigate(-1);
    }

    const getUserById = () => {
        axios
            .get("/job/" + jobId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoadedJob(true);
                    setJobById(result);
                },
                (error) => {
                    setIsLoadedJob(true);
                    setError(error);
                }
            );
    };

    const getApplyJobCountByJobId = () => {
        axios
            .get("/toApplyJob/getApplyJobCountByJobId/" + jobId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsApplyJobCount(true);
                    setApplyJobCount(result);
                },
                (error) => {
                    setIsApplyJobCount(true);
                    setError(error);
                }
            );
    };

    const applyJob = async () => {
        await axios.post("/toApplyJob/add", {
            userId: localStorage.getItem("signedUserId"),
            jobId: jobId,
        })
            .then(function (response) {
                alert("Başvurunuz başarıyla gerçekleşmiştir.")
                navigate("/jobPanel")
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getUserById();
        getApplyJobCountByJobId();
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
    } if (!isLoadedJob) {
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
                <div class=" text-white font-bodyFont ">
                    <div class="flex p-16 m-10 mx-auto">
                        <section class="container px-5 shadow-sm shadow-gray-500 ">
                            <FaBackspace onClick={hanndleClickNavigate} class="text-2xl cursor-pointer mt-4 text-white"></FaBackspace>

                            <Link to={{ pathname: "/companyProfile/" + jobById.companyId }}><h1 class="sm:text-7xl text-5xl mt-8 text-center  font-medium  uppercase">{jobById.companyName} </h1></Link>
                            <div class="text-center w-full">
                                <span class="text-center text-lg text-gray-400">{formatDate(jobById.createDate)}  </span>
                                <br></br>
                                <span class="text-center text-lg text-gray-400"> {jobById.jobType.jobTypeName} </span>
                            </div>
                            <div class="text-center w-full mt-2">

                                <span class="text-center text-lg text-gray-400">Başvuru Sayısı: {ApplyJobCount} </span>
                            </div>
                            <div class="container  mx-auto flex px-5 py-20 items-center justify-center flex-col">
                                <div class="text-center lg:w-2/3 w-full">
                                    <h1 class="sm:text-3xl text-2xl  text-center  font-medium  uppercase">Gereksinimler</h1>
                                    <p class=" text-lg mt-4">{jobById.jobDetails}</p>
                                </div>
                            </div>
                            <div class="flex justify-center">
                                <button
                                    onClick={applyJob}
                                    className="text-white mb-4  hover:bg-green-600 duration-200 transition ease-in border-2 rounded-lg background-transparent px-5 py-3 text-sm outline-none focus:outline-none m-2 "
                                    type="button"
                                >
                                    Başvur
                                </button>


                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewJob