import Layout from '../layouts/Layout'
import Banner from '../components/banner/Banner'
import { Box, Heading, Link, Text } from '@primer/react'
import { CopilotIcon } from '@primer/octicons-react'

function Banners() {
    const types = [
        {
            type: 'default',
            title: 'This is a default banner',
            actions: [],
        },
        {
            type: 'accent',
            title: 'This is an accent banner',
            actions: [
                {
                    text: 'Action',
                    href: '/',
                    variant: 'default',
                },
            ],
        },
        {
            type: 'attention',
            title: 'This is an attention banner',
            actions: [
                {
                    text: 'Action',
                    href: '/',
                    variant: 'default',
                },
                {
                    text: 'Learn more',
                    href: '/',
                    variant: 'invisible',
                },
            ],
        },
        {
            type: 'danger',
            title: 'This is a danger banner',
            actions: [
                {
                    text: 'Action',
                    href: '/',
                    variant: 'default',
                },
                {
                    text: 'Learn more',
                    href: '/',
                    variant: 'invisible',
                },
            ],
        },
        {
            type: 'done',
            title: 'This is a done banner',
            actions: [
                {
                    text: 'Action',
                    href: '/',
                    variant: 'default',
                },
                {
                    text: 'Learn more',
                    href: '/',
                    variant: 'invisible',
                },
            ],
        },
    ]

    return (
        <Layout>
            {types.map((type) => (
                <Banner
                    // One of: default, accent, attention, danger, done
                    type={type.type}
                    // One of: false, true
                    actions={type.actions}
                    // String
                    title={type.title}
                >
                    Lorem ipsum <Link href="/">dolor sit amet</Link>,
                    consectetur adipiscing elit.
                </Banner>
            ))}
            <Box
                sx={{
                    border: '1px solid',
                    borderColor: 'border.default',
                    borderRadius: 6,
                    width: '100%',
                }}
            >
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
                                    textAlign: [
                                        'center',
                                        'center',
                                        'left',
                                        'left',
                                    ],
                                }}
                            >
                                This is a section that contains some
                                information.
                            </Heading>
                            <Text
                                color="fg.muted"
                                sx={{
                                    fontSize: '0.875rem',
                                    textAlign: [
                                        'center',
                                        'center',
                                        'left',
                                        'left',
                                    ],
                                    width: '100%',
                                }}
                            >
                                Action can be performed automatically.
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Banner
                    inline
                    icon={CopilotIcon}
                    type="accent"
                    actions={[
                        {
                            text: 'Request feature',
                            href: '/',
                            variant: 'default',
                        },
                    ]}
                    title="Code 55% faster with GitHub Copilot"
                    trial="false"
                >
                    Try <Link href="/">GitHub Copilot</Link>, and the{' '}
                    <Link href="/">GitHub Pull Requests and Issues</Link>{' '}
                    extensions.
                </Banner>
            </Box>
        </Layout>
    )
}

export default Banners
