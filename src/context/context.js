import React, { useState } from 'react';
import { RiBarChartGroupedFill } from 'react-icons/ri'
import { BiLoaderAlt } from 'react-icons/bi'

const dashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const items = [
        {
            id: 1,
            icon: <RiBarChartGroupedFill className='icon' />,
            label: 'Total revenue',
            value: '$34,152',
            color: 'blue',
            stat: 2.65
        },
        {
            id: 2,
            icon: <BiLoaderAlt className='icon' />,
            label: 'Orders',
            value: "5,643",
            color: 'green',
            stat: 0.82,
        },
        {
            id: 3,
            icon: <BiLoaderAlt className='icon' />,
            label: 'Customers',
            value: "45,254",
            color: 'blue',
            stat: -6.24,
        },
        {
            id: 4,
            icon: <RiBarChartGroupedFill className='icon' />,
            label: 'Growth',
            value: "+12.58%",
            color: 'orange',
            stat: 10.52,
        }
    ]

    // toggle Sidebar
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return <dashboardContext.Provider value={{
        isSidebarOpen,
        setIsSidebarOpen,
        openSidebar,
        closeSidebar,
        items
    }}>
        {children}
    </dashboardContext.Provider>
}

const useGlobal = () => React.useContext(dashboardContext);

export { DashboardProvider, useGlobal };