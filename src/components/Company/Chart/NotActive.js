import { CChart } from '@coreui/react-chartjs'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

function NotActive(props) {


    return (
        <div>
            <CChart
                class=" w-72 h-72 mt-2"
                type="doughnut"
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],

                    datasets: [
                        {
                            backgroundColor: ['#df3398', '#f1c232', '#00D8FF', '#DD1B16'],
                            data: [12, 19, 3, 5, 2, 3],
                        },
                    ],
                }}
            />
        </div>
    )
}

export default NotActive