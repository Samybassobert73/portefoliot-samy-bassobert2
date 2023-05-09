'use client'
import { Button, ButtonGroup, VisuallyHidden } from '@chakra-ui/react'
import {FcGoogle} from 'react-icons/fc'

const providers = [
  { name: 'Google', icon: <FcGoogle /> },
]

export const OAuthButtonGroup = () => (
  <ButtonGroup variant="outline" spacing="4" width="full">
    {providers.map(({ name, icon }) => (
      <Button key={name} width="full">
        <VisuallyHidden>Sign in with {name}</VisuallyHidden>
        {icon}
      </Button>
    ))}
  </ButtonGroup>
)