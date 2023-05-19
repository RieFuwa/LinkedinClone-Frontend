import { CChart } from '@coreui/react-chartjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AllUser() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userByCount, setUserByCount] = useState([]);

    const getAllJobTypeCount= () => {
        axios
            .get("/user/getAllUserByCount" )
            .then(function (response) {
                return response.data;
            })
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUserByCount(result);
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
                    backgroundColor: ['#00D8FF'],
                    data: [userByCount],

                },
            ],
        }}
    />
</div>
  )
}

export default AllUser