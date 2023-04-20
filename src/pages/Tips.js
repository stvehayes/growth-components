import { useState } from 'react'
import { Link, Text } from '@primer/react'
import Layout from '../layouts/Layout'
import Tip from '../components/tip/Tip'
import tips from '../lib/data'

function Dialogs() {
    const [tipIndex, setTipIndex] = useState(0)

    const handlePrevClick = () => {
        setTipIndex((prevIndex) =>
            prevIndex === 0 ? tips.length - 1 : prevIndex - 1
        )
    }

    const handleNextClick = () => {
        setTipIndex((prevIndex) =>
            prevIndex === tips.length - 1 ? 0 : prevIndex + 1
        )
    }

    return (
        <Layout>
            <Tip
                index={tipIndex}
                total={tips.length}
                nextClick={handleNextClick}
                prevClick={handlePrevClick}
            >
                <Text>
                    {tips[tipIndex].description}
                    <Link href="https://github.com">{tips[tipIndex].link}</Link>
                </Text>
            </Tip>
        </Layout>
    )
}

export default Dialogs
