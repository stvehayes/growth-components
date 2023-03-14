import { ThemeProvider, BaseStyles, Box } from '@primer/react'
import Layout from './layouts/Layout'
import ColorModeSwitcher from './components/ColorModeSwitcher'
import Banner from './components/Banner'

function App() {
    return (
        <ThemeProvider colorMode="light">
            <BaseStyles>
                <ColorModeSwitcher />
                <Layout>
                    <Banner />
                    <Banner type="accent" action />
                    <Banner type="attention" action />
                    <Banner type="danger" action />
                    <Banner type="done" action />
                </Layout>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
