import { VersionsIcon, XIcon } from '@primer/octicons-react'
import {
    Box,
    Button,
    Heading,
    IconButton,
    StyledOcticon,
    Text,
} from '@primer/react'

function Banner({ children, ...props }) {
    const { title, type, actions } = props

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: ['flex-start', 'flex-start', 'center', 'center'],
                width: '100%',
                border: '1px solid',
                borderColor: 'border.default',
                borderRadius: 6,
                mb: 3,
                p: 3,
                gap: '1rem',
                flexDirection: 'row',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    bg:
                        type === 'accent'
                            ? 'accent.subtle'
                            : type === 'attention'
                            ? 'attention.subtle'
                            : type === 'danger'
                            ? 'danger.subtle'
                            : type === 'done'
                            ? 'done.subtle'
                            : 'canvas.subtle',
                    borderRadius: 100,
                    height: '40px',
                    width: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-start',
                    flexShrink: 0,
                }}
            >
                <StyledOcticon
                    icon={VersionsIcon}
                    sx={{
                        color:
                            type === 'accent'
                                ? 'accent.emphasis'
                                : type === 'attention'
                                ? 'attention.emphasis'
                                : type === 'danger'
                                ? 'danger.emphasis'
                                : type === 'done'
                                ? 'done.emphasis'
                                : 'fg.default',
                    }}
                />
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
                    <Heading
                        as="h2"
                        sx={{
                            fontSize: 2,
                            lineHeight: '1.1',
                        }}
                    >
                        {title || 'Banner Title'}
                    </Heading>
                    <Text sx={{ fontSize: 1, color: 'fg.muted' }}>
                        {children || 'Write your description.'}
                    </Text>
                </Box>
                {actions.length != 0 && (
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            flexDirection: [
                                'row',
                                'row',
                                'row-reverse',
                                'row-reverse',
                            ],
                            width: ['100%', '100%', 'auto', 'auto'],
                        }}
                    >
                        {actions.map((action) => (
                            <Button variant={action.variant}>
                                {action.text}
                            </Button>
                        ))}
                    </Box>
                )}

                <Box
                    sx={{
                        position: [
                            'absolute',
                            'absolute',
                            'relative',
                            'relative',
                        ],
                        top: [2, 2, 0, 0],
                        right: [2, 2, 0, 0],
                    }}
                >
                    <IconButton variant="invisible" icon={XIcon} />
                </Box>
            </Box>
        </Box>
    )
}

export default Banner
