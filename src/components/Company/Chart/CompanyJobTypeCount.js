import { CChart } from '@coreui/react-chartjs'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CompanyJobTypeCount(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allJobTypeCountByCompanyId, setJobTypeCountByCompanyId] = useState([]);

    const getAllJobTypeCountCompany = () => {
        axios
            .get("/job/getJobTypeByCountCompany/" + localStorage.getItem("signedCompanyId"))
            .then(function (response) {
                return response.data;
            })
            .then(
                (result) => {
                    setIsLoaded(true);
                    setJobTypeCountByCompanyId(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    };

    useEffect(() => {
        getAllJobTypeCountCompany();
    }, []);

    return (
        <div>
            <CChart
                class=" w-72 h-72 mt-2"
                type="doughnut"
                data={{
                    labels: allJobTypeCountByCompanyId?.map((key) => key.jobTypeName),
                    datasets: [
                        {
                            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                            data: allJobTypeCountByCompanyId?.map((key) => key.countTitle),
                        },
                    ],
                }}
            />
        </div>
    )
}

export default CompanyJobTypeCount