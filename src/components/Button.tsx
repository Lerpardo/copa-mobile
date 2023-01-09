import React from "react";
import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";

interface Props extends IButtonProps {
  title: string;
  type?:'PRIMARY' | 'SECONDARY'
}

function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase

     { ...rest }>
      <Text>{title}</Text>
    </ButtonNativeBase>
  );
}

export default Button;
