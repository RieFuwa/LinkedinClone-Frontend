import React from 'react'
import CreatePost from '../../Post/CreatePost'
import PostCard from '../../Post/PostCard.js'
import AdCard from '../../ScreenCard/AdCard.js'
import UserProfileCard from '../../ScreenCard/UserProfileCard'
import { useEffect, useState } from "react";
import { sleep } from '../../ServiceComponent/Sleep/Sleep'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [post, setPostCard] = useState([]);

    const getAllPost = () => {
        axios.get("/post/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoaded(true);
                    setPostCard(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    };

    useEffect(() => {
        getAllPost();
    }, []);

    return (
        <div className="flex mx-auto max-w-7xl py-6 sm:px-6 lg:px-5">
            <UserProfileCard ></UserProfileCard>
            <div class="grid-cols-1 mt-20 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1  mx-5 w-full">
                <CreatePost userId={localStorage.getItem("signedUserId")}
                ></CreatePost>
                {localStorage.getItem("signedUserId") === null ? <Link to={"/login"}>
                    {isLoaded ?
                        <div class=" ">
                            <div className="flex-grow w-full mx-auto ">
                                {post.map((key, index) => (
                                    <PostCard id={key.id} userName={key.userName} key={index} userId={key.userId} postTitle={key.postTitle} postText={key.postText} createDate={key.createDate} connectedPostId={key.connectedPostId} likeList={key.likeList} isVerified={key.isVerified}></PostCard>))}
                            </div></div>

                        :
                        <div className="flex lg:mx-80 md:mx-72 sm:mx-52   ">
                            <div class="flex justify-center grid-cols-1 mt-10 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1">
                                <div class=" absolute transform p-auto ">
                                    <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32"></div>
                                </div>
                            </div>
                        </div>}

                </Link>


                    : <div> {isLoaded ?
                        <div class=" ">
                            <div className="flex-grow w-full mx-auto ">
                                {post.map((key, index) => (
                                    <PostCard id={key.id} userName={key.userName} key={index} userId={key.userId} postTitle={key.postTitle} postText={key.postText} createDate={key.createDate} connectedPostId={key.connectedPostId} likeList={key.likeList} isVerified={key.isVerified}></PostCard>))}
                            </div></div>

                        :
                        <div className="flex lg:mx-80 md:mx-72 sm:mx-52   ">
                            <div class="flex justify-center grid-cols-1 mt-10 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1">
                                <div class=" absolute transform p-auto ">
                                    <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32"></div>
                                </div>
                            </div>
                        </div>}</div>}
                {/* {isLoaded ?
                    <div class=" ">
                        <div className="flex-grow w-full mx-auto ">
                            {post.map((key, index) => (
                                <PostCard id={key.id} userName={key.userName} key={index} userId={key.userId} postTitle={key.postTitle} postText={key.postText} createDate={key.createDate} connectedPostId={key.connectedPostId} likeList={key.likeList}></PostCard>))}
                        </div></div>

                    :
                    <div className="flex lg:mx-80 md:mx-72 sm:mx-52   ">
                        <div class="flex justify-center grid-cols-1 mt-10 sm:grid-cols-1 lg:grid-cols-1 2xl:grid-cols-1">
                            <div class=" absolute transform p-auto ">
                                <div class="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-32 w-32"></div>
                            </div>
                        </div>
                    </div>} */}

            </div>
            <AdCard></AdCard>
        </div >
    )
}

export default Home