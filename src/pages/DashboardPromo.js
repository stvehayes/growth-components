import Layout from '../layouts/Layout'
import Promo from '../components/Promo'
import { Link } from '@primer/react'

function DashboardPromo() {
    const types = [
        // action: string
        // hasImage: boolean
        // hasLogo: boolean
        // image: string
        // logo: string
        // title: string
        {
            action: 'Learn more',
            hasImage: true,
            hasLogo: false,
            image: 'https://source.unsplash.com/random/350x200',
            title: 'This is an image dashboard promo',
        },
        {
            action: 'Learn more',
            hasImage: false,
            hasLogo: true,
            logo: 'Galaxy',
            title: 'This is a logo dashboard promo',
        },
        {
            hasImage: false,
            title: 'This is a default dashboard promo',
            action: 'Learn more',
            hasLogo: false,
        },
    ]

    return (
        <Layout>
            {types.map((type) => (
                <Promo
                    action={type.action}
                    hasImage={type.hasImage}
                    hasLogo={type.hasLogo}
                    image={type.image}
                    logo={type.logo}
                    title={type.title}
                >
                    Lorem ipsum <Link href="/">dolor sit amet</Link>,
                    consectetur adipiscing elit.
                </Promo>
            ))}
        </Layout>
    )
}

export default DashboardPromo
