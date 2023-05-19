import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ViewJobType from '../ViewJobType/ViewJobType';

function CreateJobType() {
    let navigate = useNavigate();
    const [isSend, setIsSend] = useState(false);
    const [error, setError] = useState(null);

    const [jobType, setJobType] = useState({
        jobTypeName: "",
    });

    const [formError, setFormError] = useState({
        jobTypeName: "",
    });

    const { jobTypeName } = jobType;

    const onInputChange = (e) => {
        setJobType({ ...jobType, [e.target.name]: e.target.value });
        setIsSend(false);
    };
    const validateFormInput = async (event) => {
        event.preventDefault();
        let inputError = {
            jobTypeName: "",
        };

        if (jobType.jobTypeName.trim().length === 0) {
            setFormError({
                ...inputError,
                jobTypeName: "Lütfen alanı doğru bir şekilde doldurunuz",
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
        window.location.reload();

    };

    const onSubmit = async (e) => {
        await axios.post("/jobType/add", jobType).then(function (response) {

            return response.data
        },
            (error) => {

                setError(error);
            });
        setIsSend(true);
    };

    return (
        <div class="flex mx-auto w-full  ml-10 overflow-hidden font-bodyFont  bg-white shadow-2xl rounded-xl dark:bg-gray-900 ">
            <div class=" w-full">
                <h1 class="text-center mt-10 text-2xl font-bold text-green-600 sm:text-3xl lg:max-w-3xl">
                    İlan Türü Ekle
                </h1>
                <form
                    onSubmit={validateFormInput}
                    action=""
                    className="mb-0  space-y-4 rounded-lg p-4  sm:p-6 lg:p-8"
                >

                    <div className="">
                        <input
                            onChange={(e) => onInputChange(e)}
                            type="text"
                            id="jobTypeName"
                            value={jobTypeName}
                            name="jobTypeName"
                            maxLength={25}
                            class=" w-full px-5 py-3 mb-2 mt-2 text-gray-700 bg-white border-2   rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                            placeholder="doldurunuz"
                        />
                    </div>

                    <p class=" text-red-500  w-full font-semibold text-base">
                        {formError.jobTypeName}
                    </p>
                    <div class="flex justify-end ">
                        <ViewJobType></ViewJobType>
                        <button
                            type='submit'
                            class=" px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md hover:bg-green-700  focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Oluştur
                        </button></div>
                </form>
            </div>
        </div>
    )
}

export default CreateJobType