import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateJob() {
    let navigate = useNavigate();
    const [isSend, setIsSend] = useState(false);
    const [error, setError] = useState(null);
    const [isLoadedJobType, setIsLoadedJobType] = useState(false);
    const [AlljobType, setAllJobType] = useState([]);

    const [createJob, setCreateJob] = useState({
        companyId: localStorage.getItem("signedCompanyId"),
        jobDetails: "",
        jobTypeId: "115",
    });

    const [formError, setFormError] = useState({
        jobDetails: "",
        jobTypeId: "",
    });
    const { userId, jobDetails, jobTypeId } = createJob;

    // const onInputChange = (e) => {
    //     setCreateJob(prevJob => ({ ...prevJob, [e.target.name]: e.target.value }));
    //     { console.log(createJob) }
    //     setIsSend(false);
    // };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setCreateJob((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
        { console.log(createJob) }
        setIsSend(false);

    };
    const validateFormInput = async (event) => {
        event.preventDefault();
        let inputError = {
            jobDetails: "",
        };

        if (createJob.jobDetails.trim().length === 0) {
            setFormError({
                ...inputError,
                jobDetails: "Lütfen alanları doğru bir şekilde doldurunuz",
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
        navigate("/companyPanelViewJob");
    };


    const getAllJobType = async () => {
        await axios
            .get("/jobType/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                async (result) => {

                    setIsLoadedJobType(true);
                    setAllJobType(result);
                },
                (error) => {
                    setIsLoadedJobType(true);
                    setError(error);
                }
            );
    };


    useEffect(() => {
        getAllJobType();

    }, []);

    const onSubmit = async (e) => {
        await axios.post("/job/add", createJob).then(function (response) {

            return response.data
        },
            (error) => {

                setError(error);
            });
        setIsSend(true);
    };
    return (
        <div class="flex mx-auto min-h-screen text-white font-bodyFont  bg-gray-800">
            <div class="w-full my-32 ">
                <div class=" px-8 py-10 mt-12  mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-3xl">
                    <div class=" text-center align-middle justify-between">
                        <h1 class="text-xl font-medium text-gray-700 dark:text-gray-200">İş ilanınızı Oluşturun</h1>
                    </div>
                    <form
                        onSubmit={validateFormInput}
                        class="mt-4 ">
                        <div class="relative  ">
                            <label class="block mt-2 text-sm text-gray-600 dark:text-gray-200">İlan Türü</label>

                            <select
                                defaultValue={"115"}
                                onChange={(e) => onInputChange(e)}
                                class="block w-full px-5 py-3 mt-2  appearance-none text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                name="jobTypeId"
                                placeholder="baslik turu seciniz"
                            >
                                {AlljobType.map((key, index) => (
                                    <>
                                        <option value={key.id} key={index} > {key.jobTypeName} </option>
                                    </>
                                ))}

                            </select>
                        </div>

                        <div class="flex-1">
                            <label class="block mt-2 text-sm text-gray-600 dark:text-gray-200">İş Detayı</label>
                            <textarea
                                onChange={(e) => onInputChange(e)}
                                type="text"
                                id="jobDetails"
                                value={jobDetails}
                                name="jobDetails"
                                maxLength={250}
                                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>

                        <p class="text-red-500 font-semibold text-base">
                            {formError.jobDetails}
                        </p>

                        {/* <div class="w-full mt-6">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                            <textarea class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Message"></textarea>
                        </div> */}

                        <button
                            type='submit'
                            class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-md hover:bg-pink-700  focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            İlanı Oluştur
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateJob