import React, { useEffect, useState } from 'react'
import CreateReport from '../Report/CreateReport';
import ViewResponseCard from '../ResponsePost/ViewResponseCard';
import { FaCheckCircle, FaHeart, FaInfoCircle } from "react-icons/fa";
import { formatDate } from "../ServiceComponent/Date/StringFormatter";
import { Link } from "react-router-dom";
import { sleep } from "../ServiceComponent/Sleep/Sleep";
import axios from 'axios';

function PostCard(props) {
    const { postText, postTitle, createDate, userId, userName, connectedPostId, index, id, likeList, isVerified } = props;
    console.log(isVerified)
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(likeList.length);
    const [likeId, setLikeId] = useState(null);
    let disabled = localStorage.getItem("signedUserId") == null ? false : true;

    const saveLike = async () => {
        await axios.post("/like/add", {
            postId: id,
            userId: localStorage.getItem("signedUserId"),
        }).then(function (response) {
            setLikeId(response.data.id)
        }).catch(function (error) {
            console.log(error)
        })
    }

    const deleteLike = async () => {
        await axios.delete("/like/" + likeId, {
        }).catch(function (error) {
            console.log(error)
        })
    }

    const handleLike = async () => {
        setIsLiked(!isLiked);
        if (!isLiked) {
            saveLike();
            setLikeCount(likeCount + 1)
        }
        else {
            setLikeCount(likeCount - 1)
            await deleteLike();
        }
    }
    const checkLikes = () => {
        var likeControl = likeList.find((like => "" + like.userId === localStorage.getItem("signedUserId")));
        if (likeControl != null) {
            setLikeId(likeControl.id);
            setIsLiked(true);
        }
    }

    useEffect(() => {
        checkLikes()
    }, [])

    if (connectedPostId == null) {


        return (

            <div key={index} class="font-bodyFont w-full  " >
                <section class=" text-gray-600  w-full body-font">
                    <div class="mt-5 ">
                        <div class=" block  w-full text-white  p-1 ">
                            <article className="rounded-xl  bg-gray-800 shadow-white shadow-sm p-4sm:p-6 lg:p-8">
                                <div className="flex sm:m-5 lg:m-auto   items-start  sm:gap-8 ">
                                    <div
                                        className="hidden lg:mt-0 sm:mt-2 sm:grid sm:h-20 sm:w-20 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full "
                                        aria-hidden="true"
                                    >
                                        <div className="flex text-xl  items-center gap-1">
                                            {userName.charAt(0).toUpperCase()}
                                            {userName.charAt(1)}
                                        </div>
                                    </div>

                                    <div class=" lg:mt-auto sm:mt-2" >
                                        {!localStorage.getItem("signedCompanyId") ?
                                            <strong
                                                className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
                                            >

                                                Kullanıcı
                                            </strong>
                                            :
                                            <div className=''>

                                                <strong
                                                    className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white "
                                                >
                                                    Kullanıcı
                                                </strong>

                                            </div>
                                        }

                                        <p class="mt-2 text-base" >{postText} </p>
                                        <p className="mt-1 text-sm">
                                            {postTitle}
                                        </p>
                                        <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                            <div className="flex items-center gap-1 text-gray-300">
                                                <svg
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    ></path>
                                                </svg>

                                                <p className="text-xs font-medium"> {formatDate(createDate)} </p>
                                            </div>
                                            <span className="hidden sm:block" aria-hidden="true">&middot;</span>
                                            <a
                                                disabled
                                                className='  text-dark'
                                                onClick={disabled ? handleLike : null}
                                                aria-label="add to favorites"
                                            >
                                                <FaHeart
                                                    class="text-sm align-baseline"
                                                    style={isLiked ? { color: "F45050" } : { color: "A2B5BB" }}
                                                />                                            </a>
                                            {likeCount}
                                            <ViewResponseCard likeList={likeList} userName={userName} userId={userId} id={id} postTitle={postTitle} postText={postText} createDate={createDate} connectedPostId={id}></ViewResponseCard>
                                            <CreateReport postId={id} ></CreateReport>
                                        </div>

                                        <p className="mt-2 text-xs font-medium text-gray-300 sm:mt-0">
                                            Gönderiyi Yazan:{" "}

                                            <Link to={{ pathname: "/userProfile/" + userId }}>

                                                <a href="#" className=" duration-100 hover:text-gray-500">
                                                  {userName}  {isVerified == true ? <FaCheckCircle class="flex text-lime-500 "></FaCheckCircle> : null}
                                                </a>

                                            </Link>
                                        </p>
                                    </div>

                                </div>

                            </article>

                        </div>

                    </div >

                </section >


            </div >




        );

    }
}

export default PostCard


