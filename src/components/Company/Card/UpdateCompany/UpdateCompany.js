import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { sleep } from '../../../ServiceComponent/Sleep/Sleep';

function UpdateCompany(props) {
    const [showModal, setShowModal] = React.useState(false);
    const { companyId } = useParams();
    const [isLoadedCompany, setIsLoadedCompany] = useState(false);
    const [error, setError] = useState(null);
    const [companyById, setCompanyById] = useState([]);
    let navigate = useNavigate();


    const [company, setCompany] = useState({
        companyName: "",
        companyMail: "",
        companyTypeId: 4,
        companyDetails: "",
        companyAddress: ""
    })

    const { companyName, companyMail, companyDetails, companyAddress } = company

    const getCompanyById = () => {
        axios
            .get("/company/" + companyId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);

                    setIsLoadedCompany(true);
                    setCompanyById(result)
                    setCompany(result);
                },
                (error) => {
                    setIsLoadedCompany(true);
                    setError(error);
                }
            );
    };


    const onSubmit = async (e) => {
        e.preventDefault();//submit yaparken sayfayı yenilemyior
        await axios.put(`/company/companyUpdate/${companyId}`, company)
            .then(function (response) {
                window.location.reload();
            })

    }

    useEffect(() => {
        getCompanyById()
    }, [])

    const onInputChange = (e) => {
        setCompany({ ...company, [e.target.name]: e.target.value })
    }

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                class="inline-block rounded   bg-indigo-600 px-6 py-3 text-lg font-medium text-white transition duration-200 hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Şirket Bilgilerinizi güncelleyin
            </button>
            {showModal ? (
                <>
                    <div className="justify-center font-bodyFont  text-white   items-center  mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative font-bodyFont w-auto my-6 mx-auto max-w-5xl">

                            {/*content*/}
                            <div className=" p-5  bg-gray-800  border-gray-600 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}

                                <div className=" flex justify-center  border-slate-200 rounded-t">
                                    <p className='text-2xl'>Şirket Bilgilerinizi Güncelleyin</p>
                                </div>
                                {/*body*/}
                                <form
                                    onSubmit={(e) => onSubmit(e)}
                                    class="mt-4">

                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"> Şirket Adı </label>
                                        <textarea
                                            onChange={(e) => onInputChange(e)}
                                            value={companyName}
                                            defaultValue={companyById.companyName}
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            maxLength={25}
                                            class=" w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <div class="flex-1 mt-2">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Email adresi</label>
                                        <textarea
                                            onChange={(e) => onInputChange(e)}
                                            value={companyMail}
                                            defaultValue={companyById.companyMail}
                                            type="email"
                                            id="companyMail"
                                            name="companyMail"
                                            class="bock w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <div className='flex mt-2 gap-4 mb-2'>
                                       
                                        <div class="flex-1">
                                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şehir</label>
                                            <textarea
                                                onChange={(e) => onInputChange(e)}
                                                value={companyAddress}
                                                defaultValue={companyById.companyAddress}
                                                type="text"
                                                id="companyAddress"
                                                name="companyAddress"
                                                class=" w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>

                                    </div>
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Hakkında</label>
                                        <textarea
                                            onChange={(e) => onInputChange(e)}
                                            value={companyDetails}
                                            defaultValue={companyById.companyDetails}
                                            type="text"
                                            id="companyDetails"
                                            name="companyDetails"
                                            maxLength={250}
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    {/* <div class="w-full mt-6">
                                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                                        </div> */}

                                    <div className='flex mx-2 '>
                                        <button
                                            type='submit'
                                            className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                                            Güncelle
                                        </button>
                                        <button
                                            className="w-full px-6 py-3 mt-6 ml-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-md hover:bg-pink-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Kapat
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
    )
}

export default UpdateCompany