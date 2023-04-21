import { useState } from 'react'
import { Box, Link, Text } from '@primer/react'
import Layout from '../layouts/Layout'
import Tip from '../components/tip/Tip'
import tips from '../lib/data'
import PR from '../components/pr/PR'

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
            <Text
                sx={{
                    fontSize: '0.75rem',
                    textAlign: 'center',
                    fontFamily: 'mono',
                    width: '100%',
                    mb: 3,
                    color: 'fg.subtle',
                }}
            >
                Note: The PR view is only one specific use-case for this
                component.
            </Text>
            <Box
                sx={{
                    border: '1px solid',
                    borderColor: 'border.default',
                    borderRadius: 6,
                    width: '100%',
                }}
            >
                <PR />
                <Tip
                    index={tipIndex}
                    total={tips.length}
                    nextClick={handleNextClick}
                    prevClick={handlePrevClick}
                >
                    <Text>
                        {tips[tipIndex].description}
                        <Link href="https://github.com">
                            {tips[tipIndex].link}
                        </Link>
                    </Text>
                </Tip>
            </Box>
        </Layout>
    )
}

export default Dialogs
