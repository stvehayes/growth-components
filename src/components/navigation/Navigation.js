import { Box, UnderlineNav } from '@primer/react'
import { useLocation } from 'react-router-dom'

function Navigation() {
    const location = useLocation().pathname

    function checkRoute(path) {
        return location === path ? true : false
    }

    const nav = [
        {
            path: '/',
            title: 'Banners',
        },
        {
            path: '/buttons',
            title: 'Buttons',
        },
        {
            path: '/promo',
            title: 'Promo',
        },
        {
            path: '/dialog',
            title: 'Dialog',
        },
        {
            path: '/tip',
            title: 'Tip',
        },
    ]

    return (
        <Box sx={{ bg: 'canvas.default', p: 3 }}>
            <UnderlineNav sx={{ bg: 'canvas.default' }}>
                {nav.map((item) => (
                    <UnderlineNav.Link
                        href={item.path}
                        selected={checkRoute(item.path)}
                    >
                        {item.title}
                    </UnderlineNav.Link>
                ))}
            </UnderlineNav>
        </Box>
    )
}

export default Navigation
