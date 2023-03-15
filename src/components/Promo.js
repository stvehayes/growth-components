import { VersionsIcon, XIcon } from '@primer/octicons-react'
import {
  Box,
  Button,
  Heading,
  IconButton,
  Text,
} from '@primer/react'

function Promo({ children, ...props }) {
  const { title, action, type } = props

  return (
    <Box
      sx={{
        bg:
            type === 'image'
              ? 'background-image: url(https://images.unsplash.com/photo-1678737173300-9132f44a5029?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=786&q=80)'
              : type === 'logo'
                ? 'canvas.default'
                  : type === 'default'
                    ? 'canvas.default'
                    : 'canvas.subtle',
        width: '100%',
        maxWidth: '350px',
        border: '1px solid',
        borderColor: 'border.default',
        borderRadius: 6,
        mb: 3,
        p: 3,
        position: 'relative',
      }}
    >
      
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
          <Button block
          sx={{
            mt: 3,
          }}>
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
  )
}

export default Promo
