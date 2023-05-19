import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../ServiceComponent/Date/StringFormatter';
import UpdateJob from '../UpdateJob/UpdateJob';
import ViewApplyUserJob from '../ViewApplyUserJob/ViewApplyUserJob';
function ViewJob(props) {
    const { companyName, createDate, jobDetails, id, companyId, jobTypeName, index, applyJobList, getCompanyJobs } = props;

    const deleteJob = async () => {
        await axios.delete("/job/" + id, {
        })
            .catch(function (error) {
                console.log(error);
            });
        getCompanyJobs();

    };

    return (
        <div key={index} class="flex m-4  ">
            <div
                className="block w-full overflow-hidden  rounded-xl border hover:bg-gray-800 duration-200  border-gray-800 bg-gray-900 p-4 shadow-sm shadow-gray-600 sm:p-6 lg:p-8"
            >
                <h3 class="text-3xl font-bold text-white sm:text-5xl"></h3>
                <p className=' mt-1 text-lg'>{id} - {jobTypeName} </p>
                <p className="mt-4 text-sm text-gray-300 ">
                    {jobDetails}
                </p>
                <p className="mt-4 text-sm text-gray-300 truncate">
                    {formatDate(createDate)}
                </p>
                <div class="flex mt-2 justify-between">
                    <ViewApplyUserJob jobId={id} applyJobList={applyJobList}></ViewApplyUserJob>

                    <button onClick={deleteJob} class="text-pink-500 mt-5 hover:underline cursor-pointer  text-sm">İlanı sil</button>
                    <UpdateJob jobId={id} ></UpdateJob>

                </div>
            </div>

        </div>
    )
}

export default ViewJob