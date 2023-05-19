import axios from 'axios';
import React from 'react'

function JobTypeTable(props) {
    const { id, jobTypeName,getAllJobType } = props;

    const deleteJobType = async () => {
        await axios.delete("/jobType/" + id, {
        })
            .catch(function (error) {
                console.log(error);
            });
            getAllJobType()
    };
    return (
        <tbody class="divide-y  divide-gray-200">
            <tr className=''>

                <td class="whitespace-nowrap px-6 py-4  text-white">{id} </td>
                <td class="whitespace-nowrap px-6 py-4font-medium text-white">
                    {jobTypeName}
                </td>
                <button
                    onClick={deleteJobType}

                    class=" px-3 py-2 mt-2 text-sm font-medium tracking-wide mr-1 text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-md hover:bg-pink-700  focus:outline-none focus:ring focus:ring-yellow-400"
                >Sil</button>
            </tr>

        </tbody>
    )
}

export default JobTypeTable