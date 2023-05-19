import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { formatDate } from '../../ServiceComponent/Date/StringFormatter';
import { sleep } from '../../ServiceComponent/Sleep/Sleep';



function AdminAllCompany() {
    const [isLoadedAllCompany, setILoadedAllCompany] = useState(false);
    const [error, setError] = useState(null);
    const [allCompany, setAllCompany] = useState([]);

    const getAllCompany = async () => {
        await axios
            .get("/company/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setILoadedAllCompany(true);
                    setAllCompany(result);
                },
                (error) => {
                    setILoadedAllCompany(true);
                    setError(error);
                }
            );
    };
    const deleteCompany = async (companyId) => {
        await  axios.delete(`/company/${companyId}`)
  
              .catch(function (error) {
                  console.log(error);
              });
              getAllCompany();
      };
    useEffect(() => {
        getAllCompany();
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
    } if (!isLoadedAllCompany) {
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
                                id - Şirket Adı
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white border-b border-gray-200"
                            >
                                Sahip Id
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
                                Kayıt Tarihi
                            </th>
                            <th
                                scope="col"
                                class="px-5 py-3   text-left text-white  border-b border-gray-200"
                            ></th>
                        </tr>

                    </thead>
                    <tbody>
                        {allCompany.map((key, index) => (
                            <tr key={index}>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <div class="flex items-center ">
                                        <div class="">
                                            <p class="text-white   whitespace-no-wrap">
                                                {key.id} - {key.companyName}
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
                                        {key.companyMail}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <p class="text-white whitespace-no-wrap">
                                        {key.companyAddress}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm  border-b border-gray-200">
                                    <p class="text-white whitespace-no-wrap">
                                        {formatDate(key.createDate)}
                                    </p>
                                </td>
                                <td class="px-5 py-5 text-sm border-b border-gray-200">
                                    <Link to={{ pathname: "/companyProfile/" + key.id }} >
                                        <button

                                            class="inline-block rounded mr-1 bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                                        >
                                            Şirkete Git
                                        </button>
                                    </Link>
                                    <button
                                        type='sumbit'
                                        onClick={() => deleteCompany(key.id)}
                                        class="inline-block rounded  bg-red-500 px-4 py-2 text-xs font-medium duration-100 text-white hover:bg-red-600"
                                    >
                                        şitketi Sil
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
export default AdminAllCompany