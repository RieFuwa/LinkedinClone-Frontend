import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate } from '../../ServiceComponent/Date/StringFormatter';
import { sleep } from '../../ServiceComponent/Sleep/Sleep';
import ShowPost from '../Card/ShowPost/ShowPost';



function AdminAllReport() {
    const [isLoadedAllReport, setILoadedAllReport] = useState(false);
    const [error, setError] = useState(null);
    const [allReport, setAllReport] = useState([]);

    const getAllReport = async () => {
        setILoadedAllReport(false)
        await axios
            .get("/report/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {

                    setILoadedAllReport(true);
                    setAllReport(result);
                },
                (error) => {
                    setILoadedAllReport(true);
                    setError(error);
                }
            );

    };
   
    const deletePost = async (postId) => {
        axios.delete(`/post/${postId}`).catch(function (error) {
            console.log(error);
        });
        getAllReport();
    };

    useEffect(() => {
        getAllReport();
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
    } if (!isLoadedAllReport) {
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
            <div class="overflow-x-auto m-10 font-bodyFont">
                <table class="min-w-full text-base leading-normal">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white border-b border-gray-200"
                            >
                                şikayet id
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white border-b border-gray-200"
                            >
                                Şikayet Eden
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white border-b border-gray-200"
                            >
                                Başlık id
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white border-b border-gray-200"
                            >
                                Şikayet Tarihi
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white border-b border-gray-200 truncate"
                            >
                                Şikayet Açıklaması
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white border-b border-gray-200"
                            ></th>
                        </tr>

                    </thead>
                    <tbody>
                        {allReport.map((key, index) => (
                            <tr key={index}>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <div class="flex items-center ">
                                        <div class="">
                                            <p class="text-white   whitespace-no-wrap">
                                                {key.id}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <p class="text-white whitespace-no-wrap">
                                        {key.userId}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <p class="text-white whitespace-no-wrap">
                                        {key.postId}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <p class="text-white whitespace-no-wrap">
                                        {formatDate(key.createDate)}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-white">

                                        <p class="relative truncate"> {key.reportText}</p>
                                    </span>
                                </td>
                                <td class="px-5 py-5 text-sm border-b border-gray-200">
                                    <ShowPost postId={key.postId} userId={key.userId}></ShowPost>

                                    <button
                                        type='sumbit'
                                        onClick={() => deletePost(key.postId)}
                                        class="inline-block rounded ml-2 bg-red-500 px-4 py-2 text-xs font-medium duration-100 text-white hover:bg-red-600"
                                    >
                                        Gönderiyi  sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
        )
    }
}
export default AdminAllReport