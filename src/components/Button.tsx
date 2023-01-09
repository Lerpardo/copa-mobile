import React from 'react'
import {Button as ButtonNativeBase,Text} from 'native-base'

interface Props {
    title: string
}

function Button({title} : Props) {
  return (
    <ButtonNativeBase>
        <Text>
            {title}
        </Text>
    </ButtonNativeBase>
  )
}

export default Button