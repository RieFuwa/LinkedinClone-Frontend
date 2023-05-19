import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaComment } from "react-icons/fa";
import { formatDate } from "../ServiceComponent/Date/StringFormatter";
import ResponseCard from "./ResponseCard";


export default function ViewResponseCard(props) {
    const { userName, userId, id, postTitle, postText, createDate, connectedPostId } = props;
    const [showModal, setShowModal] = React.useState(false);
    const [isLoadedPost, setIsLoadedPost] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [postCommentById, setPostCommentById] = useState([]);



    const [postComment, setPostComment] = useState({
        postText: "",
    });

    const [formError, setFormError] = useState({
        postText: "",
    });

    const validateFormInput = async (event) => {
        event.preventDefault();
        let inputError = {
            postText: "",
        };

        if (postComment.postText.trim().length === 0) {
            setFormError({
                ...inputError,
                postText: "Yorum kısmı boş bırakılamaz.",
            });
            return;
        } else {
            alert("yorumunuz başarılı bir şekilde iletilmiştir.");
            setFormError(inputError);
            await sendComment();
            setIsSend(true);
            setPostComment({
                postText: "",
            });
            await getPostComment();
        }
    };
    const sendComment = async () => {
        await axios.post("/post/add", {
            connectedPostId: id,
            userId: localStorage.getItem("signedUserId"),
            postText: postComment.postText,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const getPostComment = async () => {
        await axios
            .get("/post/postAnswers?connectedPostId=" + connectedPostId)
            .then(function (response) {
                return response.data;
            })
            .then(
                (result) => {
                    setPostCommentById(result);
                    setIsLoadedPost(true);
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    const onInputChange = (e) => {
        setPostComment({ ...postComment, [e.target.name]: e.target.value });
        setIsSend(false);
    };

    useEffect(() => {
        getPostComment();
    }, []);
    return (
        <>
            <FaComment
                class="text-sm cursor-pointer ml-1 align-baseline "
                onClick={() => setShowModal(true)}
                type="button"
            ></FaComment>
            {showModal ? (
                <>
                    <div className="justify-center  text-white   items-center font-bodyFont  mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative font-bodyFont w-auto my-6 mx-auto max-w-5xl">

                            {/*content*/}
                            <div className=" bg-gray-800  border-gray-600 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}
                                <div className=" flex items-start  p-5  border-slate-200 rounded-t">
                                    <button className="hidden  sm:grid sm:h-16 sm:w-16 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full ">
                                        {userName.charAt(0).toUpperCase()}{userName.charAt(1)}
                                    </button>
                                    <div class="">
                                        <p class="ml-2 mt-5 text-lg text-start align-middle ">{userName}  </p>
                                        <p class="ml-2  text-sm dark:text-gray-400"> {formatDate(createDate)}  </p>
                                    </div>
                                </div>
                                {/*body*/}
                                <hr class="w-auto"></hr>
                                <div className=" relative block items-center align-middle ml-4 ">
                                    <div class="flex mt-2 px-4   flex-col justify-between">
                                        <p className="my-2 text-2xl ">
                                            {postTitle}
                                        </p>
                                        <p className="text-lg ">
                                            {postText}
                                        </p>
                                    </div>

                                    {isLoadedPost ?
                                        <div class=" ">
                                            <div className="flex-grow w-full mx-auto ">
                                                <div class="  grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 2xl:grid-cols-2 ">

                                                    {postCommentById.map((key, index) => (
                                                        <ResponseCard likeList={key.likeList} id={key.id} userName={key.userName} key={index} userId={key.userId} postTitle={key.postTitle} postText={key.postText} createDate={key.createDate} connectedPostId={key.connectedPostId}></ResponseCard>))}
                                                </div> </div>
                                        </div>

                                        :
                                        <div className="flex lg:mx-80 md:mx-72 sm:mx-52   ">
                                            <div class="flex justify-center grid-cols-1 mt-10 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1">
                                                <div class=" block transform p-auto ">
                                                    <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32"></div>
                                                </div>
                                            </div>
                                        </div>}



                                    <form onSubmit={validateFormInput} class="px-2 py-2 ">
                                        <div class="flex mt-2">
                                            <textarea
                                                onChange={(e) => onInputChange(e)}
                                                type="text"
                                                id="postText"
                                                value={postComment.postText}
                                                name="postText"
                                                maxLength={250}
                                                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                        <p class=" text-red-500 font-semibold text-base">
                                            {formError.postText}
                                        </p>

                                        <div className="flex items-center justify-end m-2  border-slate-200 rounded-b">

                                            <button
                                                className="text-white  hover:bg-red-600 duration-200 transition ease-in border-2 rounded-lg background-transparent   px-5 py-3 text-sm outline-none focus:outline-none m-2 "
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Kapat
                                            </button>
                                            <button
                                                className="text-white  hover:bg-green-600 duration-200 transition ease-in border-2 rounded-lg background-transparent px-5 py-3 text-sm outline-none focus:outline-none m-2 "
                                                type="submit"
                                            >
                                                Gönder
                                            </button>
                                        </div>
                                    </form>
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