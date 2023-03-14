import { VersionsIcon, XIcon } from '@primer/octicons-react'
import {
    Box,
    Button,
    Heading,
    IconButton,
    StyledOcticon,
    Text,
} from '@primer/react'

function Banner(props) {
    const { type } = props

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                maxWidth: '768px',
                border: '1px solid',
                borderColor: 'border.default',
                borderRadius: 6,
                mb: 3,
                p: 3,
                gap: '1rem',
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
                    alignSelf: 'start',
                    borderRadius: 50,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px',
                    my: 'auto',
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
            <Box sx={{ width: '100%' }}>
                <Heading as="h2" sx={{ fontSize: 2, lineHeight: '1' }}>
                    {props.title || 'Banner Title'}
                </Heading>
                <Text sx={{ fontSize: 1, color: 'fg.muted' }}>
                    {props.description || 'Write your description.'}
                </Text>
            </Box>
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                <Button>Action</Button>
                <IconButton variant="invisible" icon={XIcon} />
            </Box>
        </Box>
    )
}

export default Banner
