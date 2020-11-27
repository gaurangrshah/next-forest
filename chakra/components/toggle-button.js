import React from 'react';
import { Button } from '@chakra-ui/core';

const ToggleButton = ({ actions, condition, labels, variant = 'outline', ...rest }) => {
  return (
    <Button
      variant={variant}
      onClick={() => console.log(condition ? actions[0]() : actions[1]())}
      {...rest}
    >
      {condition ? labels[0] : labels[1]}
    </Button>
  );
};

export default ToggleButton;

// TODO: create a ToggleLink with next/link
