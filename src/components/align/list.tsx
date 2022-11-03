import { Stack } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface Props {
  gap?: number;
  children?: ReactNode;
}

export const ListAlign: FC<Props> = ({ children, gap }) => {
  return (
    <>
      <Stack spacing={gap ? gap : 2} direction="column" align="center" width="100%">
        {children}
      </Stack>
    </>
  );
};
