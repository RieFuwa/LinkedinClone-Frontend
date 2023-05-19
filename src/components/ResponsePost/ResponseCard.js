import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { formatDate } from '../ServiceComponent/Date/StringFormatter';

function ResponseCard(props) {
    const { userName, index, userId, id, postText, createDate, connectedPostId, likeList } = props;
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
    return (
        <div key={index} class=" mt-2 px-2 py-4 font-bodyFont ">

            <div class="row bg-white dark:bg-gray-900 w-96 shadow shadow-gray-500 mx-auto rounded-xl p-4">
                <div class="">
                    <p class=" text-gray-600 text-base overflow-hidden  dark:text-white">
                        {postText}

                    </p>

                </div>

                <div class="flex items-center mt-4">

                    <button className="hidden  sm:grid sm:h-12 sm:w-12 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full ">
                        AS
                    </button>

                    <div class="flex flex-col justify-between ml-2">
                        <span class="text-sm flex items-center align-middle font-semibold  ">

                            <button>{userName}</button>

                            &emsp;
                        </span>
                        <span class="flex items-center text-xs dark:text-gray-400">
                            {formatDate(createDate)}
                        </span>

                    </div>
                    <div class="ml-20">
                        <a
                            disabled
                            className='text-dark'
                            onClick={disabled ? handleLike : null}
                            aria-label="add to favorites"
                        >
                            <FaHeart
                                class="text-sm flex align-middle justify-end "
                                style={isLiked ? { color: "F45050" } : { color: "A2B5BB" }}
                            />                                            </a>
                      
                        {" "}  {likeCount}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ResponseCard