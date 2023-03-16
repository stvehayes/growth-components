import { MarkGithubIcon, VersionsIcon, XIcon } from '@primer/octicons-react'
import { Box, Button, Heading, IconButton, Text } from '@primer/react'

function Promo({ children, ...props }) {
    const { action, hasImage, hasLogo, logo, image, title } = props

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '350px',
                border: '1px solid',
                borderColor: 'border.default',
                borderRadius: 6,
                mb: 3,
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            {hasImage && (
                <Box
                    sx={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: 150,
                        borderBottom: '1px solid',
                        borderColor: 'border.default',
                    }}
                ></Box>
            )}
            <Box
                sx={{
                    p: 3,
                }}
            >
                {hasLogo && (
                    <Box sx={{ mb: 3, display: 'flex', alignItems: 'center' }}>
                        <MarkGithubIcon size={24} />
                        <Heading sx={{ fontSize: 3, ml: 2 }}>{logo}</Heading>
                    </Box>
                )}
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
                {action && (
                    <Button
                        block
                        sx={{
                            mt: 3,
                        }}
                    >
                        {action}
                    </Button>
                )}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 2,
                        right: 2,
                    }}
                >
                    <IconButton variant="invisible" icon={XIcon} />
                </Box>
            </Box>
        </Box>
    )
}

export default Promo
