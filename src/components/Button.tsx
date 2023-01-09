import React from 'react'
import {Button as ButtonNativeBase,Text} from 'native-base'

interface Props {
    title: string
}

function Button() {
  return (
    <ButtonNativeBase>
        <Text>
            Login com Google
        </Text>
    </ButtonNativeBase>
  )
}

export default Button