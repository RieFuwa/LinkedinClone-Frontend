import { CChart } from '@coreui/react-chartjs'
import React from 'react'

function Bar() {
    return (
        <div>
            <CChart
            
                type="bar"
                data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'GitHub Commits',
                            backgroundColor: '#f87979',
                            data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                        },
                    ],
                }}
                labels="months"
            />
        </div>
    )
}

export default Bar