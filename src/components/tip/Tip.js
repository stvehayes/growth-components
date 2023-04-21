import {
    ChevronLeftIcon,
    ChevronRightIcon,
    LightBulbIcon,
} from '@primer/octicons-react'
import { motion } from 'framer-motion'
import { Box, Heading, IconButton, StyledOcticon, Text } from '@primer/react'

function Tip({ children, ...props }) {
    const variants = {
        enter: { opacity: 0, y: 20 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    }

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                borderTop: '1px solid',
                borderColor: 'border.default',
                p: 3,
                gap: '1rem',
                flexDirection: ['column', 'column', 'row', 'row'],
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                }}
            >
                <StyledOcticon icon={LightBulbIcon} />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '1rem',
                    width: '100%',
                    flexDirection: ['column', 'column', 'row', 'row'],
                    alignItems: 'center',
                }}
            >
                <Box sx={{ width: '100%', pr: [2, 2, 0, 0] }}>
                    <motion.div
                        key={props.index}
                        className="tip"
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30,
                        }}
                    >
                        <Heading
                            as="p"
                            sx={{
                                fontSize: '0.875rem',
                                lineHeight: '1.5',
                                fontWeight: 'normal',
                                textAlign: ['center', 'center', 'left', 'left'],
                            }}
                        >
                            {children || 'Title'}
                        </Heading>
                    </motion.div>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexShrink: 0,
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                <IconButton
                    onClick={props.prevClick}
                    variant="invisible"
                    icon={ChevronLeftIcon}
                />
                <Text
                    sx={{
                        margin: 0,
                        padding: 0,
                    }}
                >
                    {props.index + 1} of {props.total}
                </Text>
                <IconButton
                    onClick={props.nextClick}
                    variant="invisible"
                    icon={ChevronRightIcon}
                />
            </Box>
        </Box>
    )
}

export default Tip
