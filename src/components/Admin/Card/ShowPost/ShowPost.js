import React, { useEffect, useRef, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { formatDate } from "../../../ServiceComponent/Date/StringFormatter";

export default function ShowPost(props) {
    const [showModal, setShowModal] = React.useState(false);
    const { postId, userId } = props;
    const [postById, setPostById] = useState([]);
    const [setIsLoadedPost] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const getPostById = async () => {
        await axios
            .get("/post/" + postId)
            .then(function (response) {
                return response.data;
            })
            .then(
                (result) => {
                    setPostById(result);
                    setIsLoadedPost(true);
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    useEffect(() => {
        getPostById();
    }, []);
    return (
        <>
            <button
                type='sumbit'
                class="inline-block rounded  bg-indigo-500 px-4 py-2 text-xs font-medium duration-100 text-white hover:bg-indigo-600"
                onClick={() => setShowModal(true)}

            >
                Gönderiye Git
            </button>
            {showModal ? (
                <>
                    <div className="justify-center  items-center font-bodyFont  overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative     font-bodyFont w-auto my-6 mx-auto max-w-5xl">
                            {/*content*/}
                            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
                                {/*header*/}
                                <div className=" items-start justify-between p-5 border-b border-solid text-white border-slate-200 rounded-t">
                                    <Link to={{ pathname: "/userProfile/" + postById.userId }}>
                                    <button className="hidden   sm:grid sm:h-16 sm:w-16 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full ">
                                            {postById.userName.charAt(0).toUpperCase()}
                                            {postById.userName.charAt(1)}
                                        </button>
                                    </Link>

                                    <div class="flex flex-col justify-between">
                                        <span class="text-sm flex items-center mt-2  text-white  align-middle  text-lime-60">
                                            <Link to={{ pathname: "/userProfile/" + postById.userId }}>
                                                <button>Kullanıcı adı: {postById.userName}</button>
                                            </Link>
                                        </span>
                                        <p class="text-sm text-white">Kullanıcı id'si: {postById.userId} </p>
                                        <p class="text-sm text-white">
                                            Gönderi oluşma tarihi : {formatDate(postById.createDate)}
                                        </p>
                                    </div>

                                </div>
                                {/*body*/}

                                <div className=" relative block items-center align-middle ml-4 mt-2">
                                    <div class="flex  flex-col justify-between">
                                        <p className=" text-white  text-xl ">
                                            {postById.postTitle}
                                        </p>
                                        <p className="my-4 text-white text-lg ">
                                            {postById.postText}
                                        </p>
                                    </div>
                                    <div class="  grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2 gap-4 p-2 "></div>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                            className="text-white  hover:bg-red-600 duration-200 transition ease-in border-2 rounded-lg background-transparent px-5 py-3 text-sm outline-none focus:outline-none m-2 "
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