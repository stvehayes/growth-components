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
            path: '/tip',
            title: 'Tip',
        },
        {
            path: '/trial',
            title: 'Trial',
        },
        {
            path: '/promo',
            title: 'Promo',
        },
        {
            path: '/dialog',
            title: 'Dialog',
        },
    ]

    return (
        <Box
            sx={{
                bg: 'canvas.default',
                px: 3,
                py: 8,
                m: '0 auto',
            }}
        >
            <UnderlineNav
                sx={{ bg: 'canvas.default', maxWidth: 925, m: '0 auto' }}
            >
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
