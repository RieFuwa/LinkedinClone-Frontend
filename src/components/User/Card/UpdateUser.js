import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { sleep } from '../../ServiceComponent/Sleep/Sleep';

function UpdateUser(props) {
    const [showModal, setShowModal] = React.useState(false);
    const { userId } = useParams();
    const [isLoadedUser, setIsLoadedUser] = useState(false);
    const [error, setError] = useState(null);
    const [userById, setUserById] = useState([]);
    let navigate = useNavigate();


    const [user, setUser] = useState({
        userName: "",
        userMail: "",
        userUniversity: "",
        userAddress: "",
        userDetail: ""
    })

    const { userName, userUniversity, userMail, userAddress, userDetail } = user

    const getUserById = () => {
        axios
            .get("/user/" + userId)
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {
                    await sleep(500);
                    setIsLoadedUser(true);
                    setUserById(result)
                    setUser(result);
                },
                (error) => {
                    setIsLoadedUser(true);
                    setError(error);
                }
            );
    };


    const onSubmit = async (e) => {
        e.preventDefault();//submit yaparken sayfayı yenilemyior
        await axios.put(`/user/userUpdate/${userId}`, user)
            .then(function (response) {
                window.location.reload();
            })

    }

    useEffect(() => {
        getUserById()
    }, [])

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                class="text-white py-2 px-4  rounded-lg border-white border-2 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                Bilgilerim
            </button>
            {showModal ? (
                <>
                    <div className="justify-center font-bodyFont  text-white   items-center  mt-20 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative font-bodyFont w-auto my-6 mx-auto max-w-5xl">

                            {/*content*/}
                            <div className=" p-5  bg-gray-800  border-gray-600 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}

                                <div className=" flex justify-center  border-slate-200 rounded-t">
                                    <p className='text-2xl'>Kullanıcı Bilgilerinizi Güncelleyin</p>
                                </div>
                                {/*body*/}
                                <form
                                    onSubmit={(e) => onSubmit(e)}
                                    class="mt-4">
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200"> Kullanıcı Adı</label>
                                        <textarea
                                            onChange={(e) => onInputChange(e)}
                                            value={userName}
                                            defaultValue={userById.userName}
                                            type="text"
                                            id="userName"
                                            name="userName"
                                            maxLength={25}
                                            class=" w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <div class="flex-1 mt-2">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                        <textarea
                                            onChange={(e) => onInputChange(e)}
                                            value={userMail}
                                            defaultValue={userById.userMail}
                                            type="email"
                                            id="userMail"
                                            name="userMail"
                                            class="bock w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <div class="flex-1 mt-2">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Üniversiteniz</label>
                                        <textarea
                                            onChange={(e) => onInputChange(e)}
                                            value={userUniversity}
                                            defaultValue={userById.userUniversity}
                                            type="email"
                                            id="userUniversity"
                                            name="userUniversity"
                                            class="bock w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>
                                    <div className='flex mt-2 gap-4 mb-2'>

                                        <div class="flex-1">
                                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şehir</label>
                                            <textarea
                                                onChange={(e) => onInputChange(e)}
                                                value={userAddress}
                                                defaultValue={userById.userAddress}
                                                type="text"
                                                id="userAddress"
                                                name="userAddress"
                                                class=" w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Kariyeriniz Hakkında</label>
                                        <textarea
                                            onChange={(e) => onInputChange(e)}
                                            value={userDetail}
                                            defaultValue={userById.userDetail}
                                            type="text"
                                            id="userDetail"
                                            name="userDetail"
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

export default UpdateUser