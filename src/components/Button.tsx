import React from "react";
import { Button as ButtonNativeBase, Text, IButtonProps } from "native-base";

interface Props extends IButtonProps {
  title: string;
}

function Button({ title }: Props) {
  return (
    <ButtonNativeBase>
      <Text>{title}</Text>
    </ButtonNativeBase>
  );
}

export default Button;
