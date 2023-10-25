import React, { useState } from 'react';

const dashboardContext = React.createContext();

const DashboardProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

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
        closeSidebar
    }}>
        {children}
    </dashboardContext.Provider>
}

const useGlobal = () => React.useContext(dashboardContext);

export { DashboardProvider, useGlobal };