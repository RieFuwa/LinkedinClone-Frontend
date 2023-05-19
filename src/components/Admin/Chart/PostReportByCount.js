import { CChart } from '@coreui/react-chartjs';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function PostReportByCount() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [allPost, setAllPost] = useState([]);

    const getAllPost = () => {
        axios
            .get("/post/getAll")
            .then(function (response) {
                return response.data;
            })
            .then(
                (result) => {
                    setIsLoaded(true);
                    setAllPost(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    };
    useEffect(() => {
        getAllPost();
    }, []);
    return (
        <div>
            <CChart
                class=" w-72 h-72 mt-2"
                type="doughnut"
                data={{
                    labels: allPost?.map((key) => key.id),
                    datasets: [
                        {
                            backgroundColor: ['#df3398', '#f1c232', '#00D8FF', '#DD1B16'],
                            data: allPost?.map((key) => key.reportList.length),
                        },
                    ],
                }}
            />
        </div>
    )
}

export default PostReportByCount