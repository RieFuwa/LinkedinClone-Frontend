import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom'
import { sleep } from "../../ServiceComponent/Sleep/Sleep";
import UpdateUser from "../Card/UpdateUser";

function User() {
    const { userId } = useParams();
    const [isLoadedUser, setIsLoadedUser] = useState(false);
    const [error, setError] = useState(null);
    const [userById, setUserById] = useState([]);

    const getUserById = () => {
        axios
            .get("/user/" + userId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoadedUser(true);
                    setUserById(result);
                },
                (error) => {
                    setIsLoadedUser(true);
                    setError(error);
                }
            );
    };
    useEffect(() => {
        getUserById();
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
    } if (!isLoadedUser) {
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
            <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-5 ">
                <div class=" text-white font-bodyFont  ">
                    <div class=" mt-44">
                        <div class="">
                            <div class=" justify-center ">
                                
                                <div class="flex">
                                    <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl -mt-20  inset-x-0 top-0  flex items-center justify-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                <div class="flex justify-center md:justify-center">

                                    {userById.id == localStorage.getItem("signedUserId") ?
                                        (
                                            <div>
                                                <Link to="/userApplyJob">
                                                    <button
                                                        class="text-white py-2 px-4 mt-10 mr-2  rounded-lg border-white border-2 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                                    >
                                                        Başvurularım
                                                    </button>
                                                </Link>


                                                <UpdateUser></UpdateUser></div>
                                        ) :
                                        null}

                                </div>
                            </div>
                            <div class="mt-10 text-center pb-12">
                                <h1 class="text-4xl font-medium ">{userById.userName} <span class="font-light "></span></h1>
                                <p class="font-light mt-2"> {userById.userAddress} </p>
                                <p class="font-light mt-2"> {userById.userMail} </p>
                                <p class="">{userById.userUniversity} </p>
                            </div>

                            <hr class="mx-64"></hr>
                            <section class="">

                                <div class="container px-6 py-10 mx-auto">

                                    <h1 class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        Kariyeri Hakkında
                                    </h1>

                                    <div class="max-w-6xl mx-auto mt-10">
                                        <div>
                                            <p class=" text-center lg:mx-8">
                                                {userById.userDetail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div></div>
        )
    }
}
export default User