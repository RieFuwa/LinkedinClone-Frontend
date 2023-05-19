import axios from 'axios';
import React from 'react'

function CompanyTypeTable(props) {
    const { id, companyTypeName ,getAllJobType } = props;

    const deleteCompanyType = async () => {
        await axios.delete("/companyType/" + id, {
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
                    {companyTypeName}
                </td>
                <button
                    onClick={deleteCompanyType}

                    class=" px-3 py-2 mt-2 text-sm font-medium tracking-wide mr-1 text-white capitalize transition-colors duration-300 transform bg-pink-600 rounded-md hover:bg-pink-700  focus:outline-none focus:ring focus:ring-yellow-400"
                >Sil</button>
            </tr>

        </tbody>
    )
}

export default CompanyTypeTable