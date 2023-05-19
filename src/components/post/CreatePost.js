import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function CreatePost(props) {
    const [showModal, setShowModal] = React.useState(false);
    const { userId } = props;
    const [isSend, setIsSend] = useState(false);
    const [error, setError] = useState(false);
    let navigate = useNavigate();

    const [title, setTitle] = useState({
        postText: "",
        postTitle: "",
    });

    const [formError, setFormError] = useState({
        postTitle: "",
        postText: "",
    });
    const validateFormInput = async (event) => {

        event.preventDefault();

        let inputError = {
            postTitle: "",
            postText: "",
        };

        if (title.postTitle.trim().length === 0) {
            setFormError({
                ...inputError,
                postTitle: "Başlık boş bırakılamaz.",
            });
            return;
        }

        if (title.postText.length === 0) {
            setFormError({
                ...inputError,
                postText: "Açıklama kısmı boş bırakılamaz.",
            });
            return;
        } else {
            alert("Gönderiniz başarılı bir şekilde oluşturulmuştur.");
            setFormError(inputError);
            await sendPost();
            setIsSend(true);
            setTitle({
                postText: "",
                postTitle: "",
            });
            window.location.reload();


        }
    };

    const sendPost = async () => {
        await axios.post("/post/add", {
            userId: localStorage.getItem("signedUserId"),
            postTitle: title.postTitle,
            postText: title.postText,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onInputChange = (e) => {
        setTitle({ ...title, [e.target.name]: e.target.value });
        setIsSend(false);
    };



    return (
        <>
            {localStorage.getItem("signedUserId") == null ? (
                <Link to={"/login"}>
                    <button
                        class=" w-full flex-grow h-16 t rounded-full border-2 text-left text-lg border-white  text-white"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;Gönderi oluştur
                    </button></Link>
            ) : (
                <button
                    class=" w-full flex-grow h-16 t rounded-full border-2 text-left text-lg border-white  text-white"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;Gönderi oluştur
                </button>)}

            {showModal ? (
                <>
                    <div className="justify-center  text-white   items-center font-bodyFont  mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative font-bodyFont w-auto my-6 mx-auto max-w-5xl">

                            {/*content*/}
                            <div className=" bg-gray-800  border-gray-600 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}

                                <div className=" flex items-start  p-5  border-slate-200 rounded-t">
                                    <button className="hidden   sm:grid sm:h-16 sm:w-16 border-2 border-white sm:shrink-0 sm:place-content-center sm:rounded-full ">
                                        {/* {userId.userName.charAt(0).toUpperCase()}
                                        {postById.user.userName.charAt(1)} */}
                                        {localStorage.getItem("signedUserName").charAt(0).toUpperCase()} 
                                        {localStorage.getItem("signedUserName").charAt(1)} 
                                    </button>
                                    <p class="ml-2 mt-5 text-right align-middle "> {localStorage.getItem("signedUserName")} </p>
                                </div>
                                {/*body*/}
                                <form
                                    onSubmit={validateFormInput}
                                    class=" px-5 py-">
                                    <div class="flex-1 ">
                                        <input
                                            onChange={(e) => onInputChange(e)}
                                            type="text"
                                            id="postTitle"
                                            value={title.postTitle}
                                            name="postTitle"
                                            maxLength={50}
                                            placeholder="başlık adi"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <p class="ml-5 text-red-500 font-semibold text-base">
                                        {formError.postTitle}
                                    </p>
                                    <div class="flex-1 mt-4">
                                        <textarea
                                            onChange={(e) => onInputChange(e)}
                                            type="text"
                                            id="postText"
                                            value={title.postText}
                                            name="postText"
                                            row="4"
                                            maxLength={250}
                                            placeholder="gönderi içerği"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <p class="ml-5 text-red-500 font-semibold text-base">
                                        {formError.postText}
                                    </p>



                                    <div className="flex items-center justify-end p-6  border-slate-200 rounded-b">
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
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}