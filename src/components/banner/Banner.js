import { InfoIcon, VersionsIcon, XIcon } from '@primer/octicons-react'
import {
    Box,
    Button,
    Heading,
    IconButton,
    StyledOcticon,
    Text,
} from '@primer/react'

function Banner({ children, ...props }) {
    const {
        actions,
        icon,
        inline,
        noDescription,
        hasTrial,
        state,
        title,
        type,
    } = props

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: ['flex-start', 'flex-start', 'center', 'center'],
                width: '100%',
                borderTop: '1px solid',
                borderBottom: inline ? 'none' : '1px solid',
                borderRight: inline ? 'none' : '1px solid',
                borderLeft: inline ? 'none' : '1px solid',
                borderColor: 'border.default',
                borderRadius: inline ? 0 : 6,
                mb: inline ? 0 : 3,
                p: 3,
                gap: '1rem',
                flexDirection: 'row',
                position: 'relative',
            }}
        >
            {!hasTrial && (
                <Box
                    sx={{
                        height: '40px',
                        width: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 100,
                        alignSelf: 'flex-start',
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
                >
                    <VersionsIcon />
                </Box>
            )}
            {hasTrial && (
                <StyledOcticon
                    icon={InfoIcon}
                    sx={{
                        color:
                            type === 'attention'
                                ? 'attention.fg'
                                : type === 'danger'
                                  ? 'severe.fg'
                                  : 'accent.emphasis',
                    }}
                />
            )}
            {!type === 'trial' && (
                <StyledOcticon
                    icon={icon || VersionsIcon}
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
            )}
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
                    {/* {!type === 'trial' && ( */}
                    <Heading
                        as="h2"
                        sx={{
                            fontWeight: noDescription ? '400' : 'bold',
                            fontSize: noDescription ? 1 : 2,
                            lineHeight: '1.1',
                        }}
                    >
                        {title || 'Banner Title'}
                    </Heading>
                    {/* )} */}
                    {noDescription ? null : (
                        <Text sx={{ fontSize: 1, color: 'fg.muted' }}>
                            {children || 'Write your description.'}
                        </Text>
                    )}
                </Box>
                {actions.length !== 0 && (
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
