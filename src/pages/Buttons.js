import styled from 'styled-components'
import { Box, Button, StyledOcticon, Text } from '@primer/react'
import Layout from '../layouts/Layout'
import { XCircleFillIcon } from '@primer/octicons-react'

function Buttons() {
    const hover = '1.1'
    const active = '1.3'
    const sx = {
        bg: 'fg.default',
        color: 'canvas.default',
        boxShadow: 'none',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        '&:hover': {
            bg: 'fg.default',
            color: 'canvas.default',
            filter: `brightness(${hover})`,
            border: '1px solid rgba(255, 255, 255, 0.15)',
        },
        '&:active': {
            bg: 'fg.default',
            color: 'canvas.default',
            filter: `brightness(${active})`,
            border: '1px solid rgba(255, 255, 255, 0.15)',
        },
    }

    return (
        <Layout>
            <ButtonGroup>
                <Button sx={sx}>Buy Enterprise</Button>
                <Button variant="invisible">Learn more</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button sx={sx}>Buy Enterprise</Button>
                <Button>Learn more</Button>
            </ButtonGroup>
            <Divider />
            <Box sx={{ mb: 2 }}>
                <StyledOcticon color="danger.emphasis" icon={XCircleFillIcon} />
                <Text
                    sx={{
                        fontSize: 1,
                        ml: 2,
                    }}
                >
                    Don't do this
                </Text>
            </Box>
            <ButtonGroup>
                <Button sx={sx}>Buy Enterprise</Button>
                <Button variant="primary">Learn more</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button sx={sx}>Learn more</Button>
            </ButtonGroup>
        </Layout>
    )
}

export default Buttons

const ButtonGroup = styled(Box)`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
`
