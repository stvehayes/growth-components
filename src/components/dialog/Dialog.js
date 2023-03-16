import React from 'react'
import {
    Box,
    Button,
    Dialog as PrimerDialog,
    Heading,
    Text,
} from '@primer/react'
import { useState } from 'react'

function Dialog({ children, ...props }) {
    const [isOpen, setIsOpen] = useState(false)
    const returnFocusRef = React.useRef(null)
    const { title } = props

    return (
        <>
            <Button ref={returnFocusRef} onClick={() => setIsOpen(true)}>
                Open Dialog
            </Button>
            <PrimerDialog
                returnFocusRef={returnFocusRef}
                isOpen={isOpen}
                onDismiss={() => setIsOpen(false)}
                aria-labelledby="header-id"
                sx={{
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        backgroundImage: 'url(https://placekitten.com/400/200)',
                        height: '200px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                ></Box>
                <Box
                    sx={{
                        p: 4,
                    }}
                >
                    <Heading as="h1" sx={{ fontSize: 4 }}>
                        {title || 'Dialog title'}
                    </Heading>
                    <Text
                        sx={{
                            fontSize: 1,
                            color: 'fg.muted',
                        }}
                    >
                        {children || 'Write some content here.'}
                    </Text>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            flexDirection: 'row-reverse',
                            gap: '0.5rem',
                            mt: 3,
                        }}
                    >
                        <Button>Learn more</Button>
                        <Button
                            variant="invisible"
                            onClick={() => setIsOpen(false)}
                        >
                            Close
                        </Button>
                    </Box>
                </Box>
            </PrimerDialog>
        </>
    )
}

export default Dialog
