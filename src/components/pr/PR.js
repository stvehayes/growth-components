import { Box, Heading, Text, StyledOcticon, Button, Link } from '@primer/react'
import { CheckIcon, TriangleDownIcon } from '@primer/octicons-react'

export default function PR() {
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: ['column', 'column', 'row', 'row'],
                    alignItems: 'center',
                    gap: '1rem',
                    width: '100%',
                    p: 3,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        height: '30px',
                        width: '30px',
                        borderRadius: '50%',
                        bg: 'success.emphasis',
                    }}
                >
                    <StyledOcticon color="canvas.default" icon={CheckIcon} />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: [
                            'center',
                            'center',
                            'flex-start',
                            'flex-start',
                        ],
                    }}
                >
                    <Heading
                        as="h3"
                        sx={{
                            fontSize: '1rem',
                            lineHeight: '1.',
                            textAlign: ['center', 'center', 'left', 'left'],
                        }}
                    >
                        This branch has no conflicts with the base branch.
                    </Heading>
                    <Text
                        color="fg.muted"
                        sx={{
                            fontSize: '0.875rem',
                            textAlign: ['center', 'center', 'left', 'left'],
                            width: '100%',
                        }}
                    >
                        Merging can be performed automatically.
                    </Text>
                </Box>
            </Box>

            <Box
                sx={{
                    p: 3,
                    bg: 'canvas.subtle',
                    borderTop: '1px solid',
                    borderColor: 'border.default',
                    display: 'flex',
                    flexDirection: ['column', 'column', 'row', 'row'],
                    alignItems: 'center',
                    gap: '1rem',
                    width: '100%',
                }}
            >
                <Button trailingAction={TriangleDownIcon} variant="primary">
                    Merge pull request
                </Button>
                <Text
                    sx={{
                        fontSize: '0.875rem',
                        textAlign: ['center', 'center', 'left', 'left'],
                    }}
                >
                    You can also open this in{' '}
                    <Link href="https://github.com" target="_blank">
                        GitHub Desktop
                    </Link>{' '}
                    or{' '}
                    <Link href="https://github.com" target="_blank">
                        view command line instructions.
                    </Link>
                </Text>
            </Box>
        </Box>
    )
}
