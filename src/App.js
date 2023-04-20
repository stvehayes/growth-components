import { ThemeProvider, BaseStyles } from '@primer/react'
import { Routes, Route } from 'react-router-dom'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import Navigation from './components/navigation/Navigation'
import Banners from './pages/Banners'
import Buttons from './pages/Buttons'
import Dialogs from './pages/Dialogs'
import DashboardPromo from './pages/DashboardPromo'
import Tips from './pages/Tips'

function App() {
    const routes = [
        {
            path: '/',
            element: <Banners />,
        },
        {
            path: '/buttons',
            element: <Buttons />,
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
            path: '/tip',
            element: <Tips />,
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
