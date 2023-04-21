import { useState } from 'react'
import { Box, Heading, Link, StyledOcticon, Text } from '@primer/react'
import Layout from '../layouts/Layout'
import Tip from '../components/tip/Tip'
import tips from '../lib/data'
import {
    CheckCircleFillIcon,
    CheckCircleIcon,
    CheckIcon,
} from '@primer/octicons-react'
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
