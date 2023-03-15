import Layout from '../layouts/Layout'
import Promo from '../components/Promo'
import { Link } from '@primer/react'

function DashboardPromo() {
  const types = [
    {
      type: 'image',
      image: true,
      title: 'This is an image dashboard promo',
      action: 'Learn more',
      logo: false,
    },
    {
      type: 'logo',
      image: true,
      title: 'This is a logo dashboard promo',
      action: 'Learn more',
      logo: true,
    },
    {
      type: 'default',
      image: false,
      title: 'This is a default dashboard promo',
      action: 'Learn more',
      logo: false,
    },
  ]


  
  return (
    <Layout>
      {types.map((type) => (
        <Promo
          type={type.type}
          title={type.title}
          action={type.action}
        >
          Lorem ipsum <Link href="/">dolor sit amet</Link>,
          consectetur adipiscing elit.
        </Promo>
      ))}
    </Layout>
  )
}

export default DashboardPromo
