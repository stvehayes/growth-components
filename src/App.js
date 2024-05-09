import { ThemeProvider, BaseStyles } from '@primer/react'
import { Routes, Route } from 'react-router-dom'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import Navigation from './components/navigation/Navigation'
import Banners from './pages/Banners'
import Dialogs from './pages/Dialogs'
import DashboardPromo from './pages/DashboardPromo'
import Tips from './pages/Tips'
import Trials from './pages/Trials'

function App() {
    const routes = [
        {
            path: '/',
            element: <Banners />,
        },
        {
            path: '/tip',
            element: <Tips />,
        },
        {
            path: '/promo',
            element: <DashboardPromo />,
        },
        {
            path: '/dialog',
            element: <Dialogs />,
        },

        {
            path: '/trial',
            element: <Trials />,
        },
    ]
    return (
        <ThemeProvider colorMode="light">
            <BaseStyles>
                <ColorModeSwitcher />
                <Navigation />
                <Routes>
                    {routes.map((route) => (
                        <Route path={route.path} element={route.element} />
                    ))}
                </Routes>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
