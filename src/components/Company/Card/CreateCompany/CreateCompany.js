import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function CreateCompany() {
    let navigate = useNavigate();
    const [isSend, setIsSend] = useState(false);
    const [error, setError] = useState(null);
    var roleList = [localStorage.getItem("userRoles")];

    const [isLoadedCompanyType, setIsLoadedCompanyType] = useState(false);
    const [allCompanyType, setAllCompanyType] = useState([]);

    const [company, setCompany] = useState({
        userId: localStorage.getItem("signedUserId"),
        companyName: "",
        companyMail: "",
        companyDetails: "",
        companyTypeId: "4",
        companyAddress: "",

    });

    const [formError, setFormError] = useState({
        companyName: "",
        companyMail: "",
        companyDetails: "",
        companyTypeId: "",
        companyAddress: "",
    });

    const { userId, companyName, companyMail, companyDetails, companyTypeId, companyAddress } = company;

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setCompany((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
        { console.log(company) }
        setIsSend(false);

    };


    const validateFormInput = async (event) => {
        event.preventDefault();
        let inputError = {
            companyName: "",
            companyMail: "",
            companyDetails: "",
            companyAddress: "",
        };

        if (company.companyName.trim().length === 0 || company.companyAddress.trim().length === 0
            || company.companyMail.trim().length === 0 || company.companyDetails.trim().length === 0
        ) {
            setFormError({
                ...inputError,
                companyName: "Lütfen alanları doğru bir şekilde doldurunuz",
            });
            return;
        }
        // if (user.userPassword.length <= 6) {
        //     setFormError({
        //         ...inputError,
        //         userPassword: "Şifreniz 6 basamaktan büyük olmalıdır.",
        //     });
        //     return;
        // }
        setFormError(inputError);
        await onSubmit();
        await addRoleToUser();
        navigate("/companyProfile/" + localStorage.getItem("signedCompanyId"));
    };
    const addRoleToUser = async (e) => {
        await axios
            .post("/role/addRoleToUser", {
                userId: localStorage.getItem("signedUserId"),
                roleId: 2,
            })
            .then(function (response) {
                localStorage.setItem("ROLE_MANAGER", true)
                console.log(localStorage.getItem("ROLE_MANAGER"))
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onSubmit = async (e) => {
        await axios.post("/company/add", company).then(function (response) {
            localStorage.setItem("signedCompanyId", response.data.companyId);
            localStorage.setItem("signedCompanyName", response.data.companyName);

        },
            (error) => {

                setError(error);
            });
        setIsSend(true);
    };

    const getAllCompanyType = async () => {
        await axios
            .get("/companyType/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {

                    setIsLoadedCompanyType(true);
                    setAllCompanyType(result);
                },
                (error) => {
                    setIsLoadedCompanyType(true);
                    setError(error);
                }
            );
    };


    useEffect(() => {
        getAllCompanyType();

    }, []);

    return (
        <div class=" lg:w-1/2 lg:mx-8">
            <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                <div class="flex align-middle justify-between">
                    <h1 class="text-xl font-medium text-gray-700 dark:text-gray-200">Şirket Kayıt Ekranına Hoşgeldiniz</h1>
                    <Link to="/"> <FaWindowClose class="text-xl text-white"></FaWindowClose></Link>
                </div>

                <form
                    onSubmit={validateFormInput}
                    class="mt-4">

                    <div class="flex-1">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Adı</label>
                        <input
                            onChange={(e) => onInputChange(e)}

                            type="text"
                            id="companyName"
                            value={companyName}
                            name="companyName"
                            maxLength={25}
                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div class="flex-1 mt-2">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Email adresi</label>
                        <input
                            onChange={(e) => onInputChange(e)}

                            type="email"
                            id="companyMail"
                            value={companyMail}
                            name="companyMail"
                            placeholder="example@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div className='flex mt-2 gap-4 mb-2'>
                        <div class="flex-1">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Türü</label>
                            <select
                                defaultValue={"115"}
                                onChange={(e) => onInputChange(e)}
                                class="block w-full px-5 py-3 mt-2  appearance-none text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name="companyTypeId"
                                placeholder="baslik turu seciniz"
                            >
                                {allCompanyType.map((key, index) => (
                                    <>
                                        <option value={key.id} key={index} > {key.companyTypeName} </option>
                                    </>
                                ))}

                            </select>
                        </div>
                        <div class="flex-1">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şehir</label>
                            <input
                                onChange={(e) => onInputChange(e)}
                                type="text"
                                id="companyAddress"
                                value={companyAddress}
                                name="companyAddress"
                                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                    </div>
                    <div class="flex-1">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Şirket Hakkında</label>
                        <textarea
                            onChange={(e) => onInputChange(e)}
                            type="text"
                            id="companyDetails"
                            value={companyDetails}
                            name="companyDetails"
                            maxLength={250}
                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    {/* <div class="w-full mt-6">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                        </div> */}
                    <p class="text-red-500 font-semibold text-base">
                        {formError.companyName}
                    </p>
                    <button
                        type='submit'
                        class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                        Şirketinizi Kayıt Edin
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateCompany