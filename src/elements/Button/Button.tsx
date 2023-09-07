import { Button } from "@chakra-ui/react";
import React from "react";

type Props = {
  label: string;
  onClick: () => void;
  size: string;
  variant: string;
  bg: string;
  leftIcon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  rightIcon?:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  isLoading?: boolean;
  loadingText?: string;
  disabled: boolean;
};

export default function SmartCta({
  label,
  onClick,
  size,
  variant,
  bg,
  leftIcon,
  rightIcon,
  isLoading,
  loadingText,
  disabled,
}: Props) {
  return (
    <Button
      size={size}
      variant={variant}
      bg={bg}
      onClick={onClick}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      isLoading={isLoading}
      loadingText={loadingText}
      isDisabled={disabled}
    >
      {label}
    </Button>
  );
}
