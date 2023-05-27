import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom'
import { formatDate } from "../../ServiceComponent/Date/StringFormatter";
import { sleep } from "../../ServiceComponent/Sleep/Sleep";
import UpdateUser from "../Card/UpdateUser";

function User() {
    const { userId } = useParams();
    const [isLoadedUser, setIsLoadedUser] = useState(false);
    const [isLoadedUserPost, setIsLoadedUserPost] = useState(false);
    const [error, setError] = useState(null);
    const [userById, setUserById] = useState([]);
    const [userGetAllpost, setUserGetAllPost] = useState([]);

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
    const getUserAllPost = () => {
        axios
            .get("/post/getAllUserPost?userId=" + userId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoadedUserPost(true);
                    setUserGetAllPost(result);
                },
                (error) => {
                    setIsLoadedUserPost(true);
                    setError(error);
                }
            );
    };
    useEffect(() => {
        getUserById();
        getUserAllPost();
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
                                {userById.isVerified == true ? (
                                    <h1 class=" text-4xl font-medium ">{userById.userName}<FaCheckCircle class="text-lime-500 ml-1 w-5 align-middle flex"></FaCheckCircle> <span class="font-light "></span></h1>
                                ) : <h1 class=" text-4xl font-medium ">{userById.userName}<span class="font-light "></span></h1>
                                }

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
                            <h1 class="text-2xl mt-10 font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                                        Yorumlar
                                    </h1>
                            <div className="flex-grow w-full mt-10  mx-auto block">
                                <div class="  grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2 ">
                                    {userGetAllpost.map((key, index) => (

                                        !key.connectedPostId ? <div key={index} class="w-full mt-2 px-2 py-4 font-bodyFont ">
                                            <div class="w-full row bg-white dark:bg-gray-900 shadow shadow-gray-500 mx-auto rounded-xl p-4">
                                                <div class="">
                                                    <p class=" text-gray-600 text-base overflow-hidden  dark:text-white">
                                                        {key.postTitle}

                                                    </p>
                                                    <p class=" text-gray-600 mt-1 text-base overflow-hidden  dark:text-white">
                                                        {key.postText}

                                                    </p>

                                                </div>

                                                <div class="flex items-center mt-4">

                                                    <button className="hidden  sm:grid sm:h-12 sm:w-12 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full ">
                                                        {key.userName.charAt(0).toUpperCase()}{key.userName.charAt(1)}
                                                    </button>

                                                    <div class="flex flex-col justify-between ml-2">
                                                        <span class="text-sm flex items-center align-middle font-semibold  ">

                                                            <button>{key.userName}</button>

                                                            &emsp;
                                                        </span>
                                                        <span class="flex items-center text-xs dark:text-gray-400">
                                                            {formatDate(key.createDate)}
                                                        </span>

                                                    </div>

                                                </div>
                                            </div>

                                        </div> : null


                                    ))}

                                </div>

                            </div>
                        </div>
                    </div>
                </div></div>
        )
    }
}
export default User