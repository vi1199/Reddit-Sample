import React, {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
};
export const AppInit = ({children}: Props) => {
  return <>{children}</>;
};
