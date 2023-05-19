import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { formatDate } from '../../ServiceComponent/Date/StringFormatter';
import { sleep } from '../../ServiceComponent/Sleep/Sleep';

function ApplyJob(props) {
    const { index, id, userId, jobId, companyName, jobTypeName, createDate, getUserApplyJobs } = props;

    const deleteComment = async () => {
        axios.delete("/toApplyJob/" + id, {
        }).then(
            getUserApplyJobs()
        );

    };

    return (

        <div key={index} class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class=" font-semibold text-2xl title-font">{companyName}</span>
                <span class="mt-1 text-sm"> {formatDate(createDate)} </span>
            </div>
            <div class="md:flex-grow">
                <h2 class="text-xl font-medium title-font ">{jobTypeName} </h2>
                <div class="cursor-pointer">
                    
                    <button
                        type="submit"
                        onClick={deleteComment}
                        class="text-red-500 inline-flex items-center mt-4">İptal et
                    </button>
                </div>
            </div>

        </div>

    )
}

export default ApplyJob