import React from 'react'
import { Bar } from 'react-chartjs-2'
import DashboardWrapper, { DashboardWrapperMain} from '../components/dashboard-wrapper/DashboardWrapper'
import { colors, data } from '../constants'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardWrapperMain>
                {/****main layout */}
               
            </DashboardWrapperMain>
            
        </DashboardWrapper>
    )
}

export default Dashboard
