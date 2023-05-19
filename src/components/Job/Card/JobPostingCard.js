import { FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { formatDate } from '../../ServiceComponent/Date/StringFormatter';
import ViewResponseCard from '../../ResponsePost/ViewResponseCard';

function JobPostingCard(props) {
    const { companyName, createDate, jobDetails, id, companyId, companyAddress} = props;
    return (

        <div className="m-2  ">
            <div
                className="block  w-full rounded-xl border hover:bg-gray-800 duration-200 hover:scale-105 border-gray-800 bg-gray-900 p-4 shadow-sm shadow-gray-600 sm:p-6 lg:p-8"
            >
                <h3 class="text-3xl font-bold text-white sm:text-5xl">{companyName} </h3>
                <p className='text-gray-500 mt-1 text-sm'>{companyAddress} - {formatDate(createDate)} </p>
                <p className="mt-4 text-sm  text-gray-300 truncate">
                    {jobDetails}
                </p>
                <div class="flex justify-between">
                    <Link to={{ pathname: "/viewJob/" + id }}> <p class="text-indigo-400 mt-5 hover:underline cursor-pointer">İlana Git</p></Link>
                    <Link to={{ pathname: "/companyProfile/" + companyId }}> <p class="text-indigo-400 mt-5 hover:underline cursor-pointer ">Şirkete Git</p></Link>
                </div>
            </div>
        </div>


    )

}

export default JobPostingCard