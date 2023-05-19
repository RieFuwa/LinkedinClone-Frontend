import { CChart } from '@coreui/react-chartjs'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function JobTypeByCount(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allJobTypeCount, setJobTypeCount] = useState([]);

    const getAllJobTypeCount= () => {
        axios
            .get("/job/getJobTypeByCount" )
            .then(function (response) {
                return response.data;
            })
            .then(
                (result) => {
                    setIsLoaded(true);
                    setJobTypeCount(result);
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
                    labels: allJobTypeCount?.map((key) => key.jobTypeName),
                    datasets: [
                        {
                            backgroundColor: ['#df3398', '#f1c232', '#00D8FF', '#DD1B16'],
                            data: allJobTypeCount?.map((key) => key.countTitle),
                        },
                    ],
                }}
            />
        </div>
    )
}

export default JobTypeByCount