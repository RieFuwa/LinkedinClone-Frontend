import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate } from '../../ServiceComponent/Date/StringFormatter';
import { sleep } from '../../ServiceComponent/Sleep/Sleep';



function AdminAllUser() {
    const [isLoadedAllUser, setIsLoadedAllUser] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const [error, setError] = useState(null);
    const [allUser, setAllUser] = useState([]);

    const getAllUser = async () => {

        await axios
            .get("/user/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    sleep(500)
                    setIsLoadedAllUser(true);
                    setAllUser(result);
                },
                (error) => {
                    setIsLoadedAllUser(true);
                    setError(error);
                }
            );
    };

    const deleteUser = async (userId) => {
      await  axios.delete(`/user/${userId}`)

            .catch(function (error) {
                console.log(error);
            });
        getAllUser();
    };

    useEffect(() => {
        getAllUser();
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
    } if (!isLoadedAllUser) {
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
                                id - kullanıcı
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white border-b border-gray-200"
                            >
                                Rol
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3  text-left text-white border-b border-gray-200"
                            >
                                email
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3  text-left text-white border-b border-gray-200"
                            >
                                Adres
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white  border-b border-gray-200"
                            >
                                status
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white  border-b border-gray-200"
                            ></th>
                        </tr>

                    </thead>
                    <tbody>
                        {allUser.map((key, index) => (
                            <tr key={index}>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <div class="flex items-center ">
                                        <div class="">
                                            <p class="text-white   whitespace-no-wrap">
                                                {key.id} - {key.userName}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <p class="text-white whitespace-no-wrap">
                                        {key.roles.map((i) => (
                                            <div>{i.roleName}</div>
                                        ))}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <p class="text-white whitespace-no-wrap">
                                        {key.userMail}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <p class="text-white whitespace-no-wrap">
                                        {key.userAddress}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <span class="relative inline-block px-3 py-1 font-semibold leading-tight text-white">
                                        <span
                                            aria-hidden="true"
                                            class="absolute inset-0 bg-cyan-500 text-white rounded-full opacity-50"
                                        ></span>
                                        <span class="relative">
                                            {" "}
                                            {key.isVerified.toString()}{" "}
                                        </span>
                                    </span>
                                </td>
                                <td class="px-5 py-5 text-sm border-b border-gray-200">
                                    <Link to={{ pathname: "/userProfile/" + key.id }} >
                                        <button

                                            class="inline-block rounded mr-1 bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Hesaba Git
                                        </button>
                                    </Link>
                                    <button
                                        type='sumbit'
                                        onClick={() => deleteUser(key.id)}
                                        class="inline-block rounded  bg-red-500 px-4 py-2 text-xs font-medium duration-100 text-white hover:bg-red-600"
                                    >
                                        Hesabı Sil
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
export default AdminAllUser