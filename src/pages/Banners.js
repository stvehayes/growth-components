import Layout from '../layouts/Layout'
import Banner from '../components/Banner'
import { Link } from '@primer/react'

function Banners() {
    const types = [
        {
            type: 'default',
            title: 'This is a default banner',
            action: false,
        },
        {
            type: 'accent',
            title: 'This is an accent banner',
            action: true,
        },
        {
            type: 'attention',
            title: 'This is an attention banner',
            action: true,
        },
        {
            type: 'danger',
            title: 'This is a danger banner',
            action: true,
        },
        {
            type: 'done',
            title: 'This is a done banner',
            action: true,
        },
    ]

    return (
        <Layout>
            {types.map((type) => (
                <Banner
                    // One of: default, accent, attention, danger, done
                    type={type.type}
                    // One of: false, true
                    action={type.action}
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
