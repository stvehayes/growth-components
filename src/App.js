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
                    <Banner type="accent" />
                    <Banner type="attention" />
                    <Banner type="danger" />
                    <Banner type="done" />
                </Layout>
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
