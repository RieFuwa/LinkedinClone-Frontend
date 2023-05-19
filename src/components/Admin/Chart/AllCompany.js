
import { CChart } from '@coreui/react-chartjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AllCompany() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [companyByCount, setCompanyByCount] = useState([]);

    const getAllJobTypeCount= () => {
        axios
            .get("/company/getAllCompanyByCount" )
            .then(function (response) {
                return response.data;
            })
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCompanyByCount(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    };

    useEffect(() => {
        getAllJobTypeCount();
    }, []);
  
  return (
    <div>
    <CChart
        class=" w-72 h-72 mt-2"
        type="doughnut"
        data={{
            label: 'of Votes',
            datasets: [
                {
                    backgroundColor: ['#DD1B16'],
                    data: [companyByCount],

                },
            ],
        }}
    />
</div>
  )
}

export default AllCompany