import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



export default function CreateReport(props) {
    const [showModal, setShowModal] = React.useState(false);
    const { postId } = props;
    const [isSend, setIsSend] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    let navigate = useNavigate();

    const [reportText, setReportText] = useState("");

    const [formError, setFormError] = useState({
        reportText: "",
    });

    const validateFormInput = async (event) => {
        event.preventDefault();
        let inputError = {
            reportText: "",
        };

        if (reportText.trim().length === 0) {
            setFormError({
                ...inputError,
                reportText: "Şikayet sebebiniz boş bırakılamaz.",
            });
            return;
        } else {
            alert("Şikayetiniz başarılı bir şekilde iletilmiştir.");
            setFormError(inputError);
            await sendReport();
            setIsSend(true);
            setShowModal(false);
            setReportText("");
            navigate("/");
        }
    };

    const sendReport = async () => {
        await axios.post("/report/add", {
            userId: localStorage.getItem("signedUserId"),
            postId: postId,
            reportText: reportText,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleComment = (value) => {
        setReportText(value);
        setIsSend(false);
    };


    return (
        <>
            <FaExclamationCircle
                class="text-sm cursor-pointer ml-1 align-baseline "
                onClick={() => setShowModal(true)}
                type="button"
            ></FaExclamationCircle>
            {showModal ? (
                <>
                    <div className="justify-center  text-white items-center font-bodyFont  mt-40 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative font-bodyFont w-auto my-6 mx-auto max-w-5xl">

                            {/*content*/}
                            <div className=" bg-gray-800  border-gray-600 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}

                                {/*body*/}
                                <div className=" relative block items-center align-middle ml-4 ">
                                    <form onSubmit={validateFormInput} class="mt-2 my-2 ">
                                        <div class="flex mt-2 px-4   flex-col justify-between">
                                            <p className="my-2 text-2xl mb-4 ">
                                                Lütfen şikayet sebebinizi yazınız.
                                            </p>

                                            <div class="flex">
                                                <textarea
                                                    onChange={(i) => handleComment(i.target.value)}
                                                    type="text"
                                                    id="reportText"
                                                    value={reportText}
                                                    name="reportText"
                                                    maxLength={250}
                                                    class="block w-full p-8 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                            </div>
                                        </div>
                                        <p class="ml-5 text-red-400 font-semibold text-base">
                                            {formError.reportText}
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