import Layout from '../layouts/Layout'
import Banner from '../components/banner/Banner'
import { Box, Heading, Link, Text } from '@primer/react'
import { CopilotIcon } from '@primer/octicons-react'

function Trials() {
    const types = [
        {
            type: 'accent',
            title: 'You have 30 days remaining on your trial.',
            actions: [
                {
                    text: 'View tasks',
                    href: '/',
                    variant: 'default',
                },
            ],
        },
        {
            type: 'attention',
            title: 'Your trial expires in 3 days.',
            icon: CopilotIcon,
            actions: [
                {
                    text: 'Buy Enterprise',
                    href: '/',
                    variant: 'default',
                },
                {
                    text: 'Talk to sales',
                    href: '/',
                    variant: 'invisible',
                },
            ],
        },
        {
            type: 'danger',
            title: 'Your trial has expired.',
            actions: [
                {
                    text: 'Buy Enterprise',
                    href: '/',
                    variant: 'default',
                },
                {
                    text: 'Talk to sales',
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
                    noDescription={true}
                    icon={type.icon}
                    hasTrial={true}
                >
                    Lorem ipsum <Link href="/">dolor sit amet</Link>,
                    consectetur adipiscing elit.
                </Banner>
            ))}
        </Layout>
    )
}

export default Trials
