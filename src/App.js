import { ThemeProvider, BaseStyles, Link } from '@primer/react'
import Layout from './layouts/Layout'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import Banner from './components/Banner'

function App() {
    const types = [
        {
            type: 'default',
            title: 'This is a default banner',
            action: false,
        },
        {
            type: 'accent',
            title: 'This is an accent banner',
            action: true,
        },
        {
            type: 'attention',
            title: 'This is an attention banner',
            action: true,
        },
        {
            type: 'danger',
            title: 'This is a danger banner',
            action: true,
        },
        {
            type: 'done',
            title: 'This is a done banner',
            action: true,
        },
    ]
    return (
        <ThemeProvider colorMode="light">
            <BaseStyles>
                <ColorModeSwitcher />
                <Layout>
                    {types.map((type) => (
                        <Banner
                            // One of: default, accent, attention, danger, done
                            type={type.type}
                            // One of: false, true
                            action={type.action}
                            // String
                            title={type.title}
                        >
                            Lorem ipsum <Link>dolor sit amet</Link>, consectetur
                            adipiscing elit.
                        </Banner>
                    ))}
                </Layout>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
