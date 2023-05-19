import { CChart } from '@coreui/react-chartjs'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function JobApplyByCountCompany(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allJobCountByCompanyId, setAllJobCountByCompanyId] = useState([]);

    const getAllJobCountByCompanyId = () => {
        axios
            .get("/job/getJobApplyByCountCompany/" + localStorage.getItem("signedCompanyId"))
            .then(function (response) {
                return response.data;
            })
            .then(
                (result) => {
                    setIsLoaded(true);
                    setAllJobCountByCompanyId(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    };

    useEffect(() => {
        getAllJobCountByCompanyId();
    }, []);

    return (
        <div>
            <CChart
                class=" w-72 h-72 mt-2"
                type="doughnut"
                data={{
                    labels: allJobCountByCompanyId?.map((key) => key.jobId),
                    datasets: [
                        {
                            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                            data: allJobCountByCompanyId?.map((key) => key.countTitle),
                        },
                    ],
                }}
            />
        </div>
    )
}

export default JobApplyByCountCompany