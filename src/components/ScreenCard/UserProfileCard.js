import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUserAlt, FaBriefcase, FaHeart, FaCommentDots, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

function UserProfileCard() {
    const [isLoadedUserLikeCount, setIsLoadedUserLikeCount] = useState(false);
    const [isLoadedUserPostount, setIsLoadedUserPostount] = useState(false);


    const [error, setError] = useState(null);

    const [userLikeCount, setUserLikeCount] = useState([]);
    const [userPostCount, setUserPostCount] = useState([]);



    const getUserLikeCount = async () => {
        await axios
            .get("/like/getCountLikeByUserId/" + localStorage.getItem("signedUserId"))
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    setIsLoadedUserLikeCount(true);
                    setUserLikeCount(result);
                },
                (error) => {
                    setIsLoadedUserLikeCount(true);
                    setError(error);
                }
            );
    };
    const getUserPostCount = async () => {
        await axios
            .get("/post/getCountPostByUserId/" + localStorage.getItem("signedUserId"))
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    setIsLoadedUserPostount(true);
                    setUserPostCount(result);
                },
                (error) => {
                    setIsLoadedUserPostount(true);
                    setError(error);
                }
            );
    };

    useEffect(() => {
        getUserLikeCount()
        getUserPostCount()
    }, []);

    return (

        <div class=' font-bodyFont '>
            {localStorage.getItem("signedUserId") != null ?
                <div>
                    <div class="w-60 mt-20 shadow-white sm:text-sm lg:w-64 lg:text-md  sm:w-40 max-w-sm overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-800">
                        <img class="object-cover object-center w-full h-32" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                        <div class="flex items-center px-6 py-3 bg-gray-900">
                            <Link to={{
                                pathname: "/userProfile/" + localStorage.getItem("signedUserId"),
                            }}>
                                <h1 class=" text-md font-semibold text-white">Merhaba, {localStorage.getItem("signedUserName")} </h1>
                            </Link>
                        </div>
                        <div class="px-6 py-4">
                            <p class="py-2 text-gray-700 dark:text-gray-400">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>

                            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <FaUserAlt class="text-lg"></FaUserAlt>
                                <Link to={{
                                    pathname: "/userProfile/" + localStorage.getItem("signedUserId"),
                                }}>
                                    <h1 class="px-2 text-sm">Profilim</h1></Link>
                            </div>
                            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">

                                <FaBriefcase class="text-lg"></FaBriefcase>
                                <Link to={{
                                    pathname: "/userApplyJob/" + localStorage.getItem("signedUserId"),
                                }}>
                                    <h1 class="px-2 text-sm">Başvurularım</h1>
                                </Link>

                            </div>

                        </div>
                    </div>
                    <div class="w-60  sticky  top-28  sm:w-40 shadow-white lg:w-64 lg:text-md  sm:text-sm mt-10  max-w-sm   bg-white rounded-lg shadow-sm dark:bg-gray-800">
                        <div class="flex items-center rounded-lg px-6 py-3 bg-gray-900">
                            <h1 class=" text-md font-semibold text-white">Sizin İçin</h1>
                        </div>
                        <div class="px-6 py-4">
                            <p class="py-2 text-gray-700 dark:text-gray-400">Yapacağınız aktivitelere göre burası şekillenecektir.</p>
                            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <FaCommentDots class="text-lg"></FaCommentDots>
                                <h1 class="px-2 text-sm">Gönderi Sayısı: {userPostCount} </h1>
                            </div>
                            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <FaHeart class="text-lg"></FaHeart>
                                <h1 class="px-2 text-sm">Beğeni Sayısı: {userLikeCount} </h1>
                            </div>
                            <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                <FaStar class="text-lg"></FaStar>
                                <h1 class="px-2 text-sm">Aktivite Puanım: {(userPostCount + userLikeCount) * 25} </h1>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <Link to={"/login"}>
                        <div>
                            <div class="w-60 mt-20 shadow-white sm:text-sm lg:w-64 lg:text-md  sm:w-40 max-w-sm overflow-hidden bg-white rounded-lg shadow-sm dark:bg-gray-800">
                                <img class="object-cover object-center w-full h-32" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />
                                <div class="flex items-center px-6 py-3 bg-gray-900">

                                    <h1 class=" text-md font-semibold text-white">Giriş Yapın</h1>

                                </div>
                                <div class="px-6 py-4">
                                    <p class="py-2 text-gray-700 dark:text-gray-400">Lütfen giriş yapınız.</p>
                                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                        <FaUserAlt class="text-lg"></FaUserAlt>
                                        <h1 class="px-2 text-sm">Profilim</h1>
                                    </div>
                                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                        <FaBriefcase class="text-lg"></FaBriefcase>
                                        <h1 class="px-2 text-sm">Başvurularım</h1>


                                    </div>

                                </div>
                            </div>
                            <div class="w-60  sticky  top-28  sm:w-40 shadow-white lg:w-64 lg:text-md  sm:text-sm mt-10  max-w-sm   bg-white rounded-lg shadow-sm dark:bg-gray-800">
                                <div class="flex items-center rounded-lg px-6 py-3 bg-gray-900">
                                    <h1 class=" text-md font-semibold text-white">Giriş Yapın</h1>
                                </div>
                                <div class="px-6 py-4">
                                    <p class="py-2 text-gray-700 dark:text-gray-400">Giriş Yapmadığınız için değerlerinizi göremezsiniz.</p>
                                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                        <FaCommentDots class="text-lg"></FaCommentDots>
                                        <h1 class="px-2 text-sm">Gönderi Sayısı: * </h1>
                                    </div>
                                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                        <FaHeart class="text-lg"></FaHeart>
                                        <h1 class="px-2 text-sm">Beğeni Sayısı: * </h1>
                                    </div>
                                    <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                        <FaStar class="text-lg"></FaStar>
                                        <h1 class="px-2 text-sm">Aktivite Puanım: * </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            }

        </div >
    )
}

export default UserProfileCard