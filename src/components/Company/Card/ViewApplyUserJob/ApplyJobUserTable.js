import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaInfoCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { formatDate } from '../../../ServiceComponent/Date/StringFormatter';
import { sleep } from '../../../ServiceComponent/Sleep/Sleep';

function ApplyJobUserTable(props) {
    const [isDeleted, setIsDeleted] = useState(false);
    const { user, createDate, id, index, getViewApplyJobs } = props;


    const deleteApplyJob = async () => {
        await axios.delete("/toApplyJob/" + id, {
        }).then(function (response) {
            setIsDeleted(true)
            window.location.reload();
        }).catch(function (error) {
            console.log(error)
        })

    }

    return (
        <tbody key={index} class="divide-y text-lg  divide-gray-200">
            <tr className=''>

                <td class="px-4 py-4 font-medium text-white">
                    {user.userName}
                </td>
                <td class="px-4 py-4 text-white">{formatDate(createDate)}  </td>
                <td class="px-4 py-4 text-white">{user.userMail} </td>
                <td class="px-4 py-4 text-white">{user.userUniversity} </td>
                <td class="px-4 py-4 text-white">{user.userAddress} </td>

                <td class=" py-4">

                    <Link to={{ pathname: "/userProfile/" + user.id }} >
                        <button

                            class="inline-block rounded mr-1 bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                        >
                            Profil
                        </button>
                    </Link>
                    <button
                        type='sumbit'
                        onClick={deleteApplyJob}
                        class="inline-block rounded  bg-red-500 px-4 py-2 text-xs font-medium duration-100 text-white hover:bg-red-600"
                    >
                        Reddet
                    </button>
                </td>
            </tr>
        </tbody>
    )

}

export default ApplyJobUserTable