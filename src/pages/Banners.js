import Layout from '../layouts/Layout'
import Banner from '../components/banner/Banner'
import { Link } from '@primer/react'

function Banners() {
    const types = [
        {
            type: 'default',
            title: 'This is a default banner',
            actions: [],
        },
        {
            type: 'accent',
            title: 'This is an accent banner',
            actions: [
                {
                    text: 'Action',
                    href: '/',
                    variant: 'default',
                },
            ],
        },
        {
            type: 'attention',
            title: 'This is an attention banner',
            actions: [
                {
                    text: 'Action',
                    href: '/',
                    variant: 'default',
                },
                {
                    text: 'Learn more',
                    href: '/',
                    variant: 'invisible',
                },
            ],
        },
        {
            type: 'danger',
            title: 'This is a danger banner',
            actions: [
                {
                    text: 'Action',
                    href: '/',
                    variant: 'default',
                },
                {
                    text: 'Learn more',
                    href: '/',
                    variant: 'invisible',
                },
            ],
        },
        {
            type: 'done',
            title: 'This is a done banner',
            actions: [
                {
                    text: 'Action',
                    href: '/',
                    variant: 'default',
                },
                {
                    text: 'Learn more',
                    href: '/',
                    variant: 'invisible',
                },
            ],
        },
    ]

    return (
        <Layout>
            {types.map((type) => (
                <Banner
                    // One of: default, accent, attention, danger, done
                    type={type.type}
                    // One of: false, true
                    actions={type.actions}
                    // String
                    title={type.title}
                >
                    Lorem ipsum <Link href="/">dolor sit amet</Link>,
                    consectetur adipiscing elit.
                </Banner>
            ))}
        </Layout>
    )
}

export default Banners
