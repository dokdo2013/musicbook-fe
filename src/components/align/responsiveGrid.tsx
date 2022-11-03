import { Grid, GridItem } from "@chakra-ui/react";
import { FC, ReactNode, Children } from "react";

interface Props {
  gap?: number;
  width?: string;
  itemMinWidth?: number;
  children?: ReactNode;
}

export const ResponsiveGridAlign: FC<Props> = ({ children, gap, width, itemMinWidth = 150 }) => {
  return (
    <>
      <Grid
        templateColumns={`repeat(auto-fill, minmax(${itemMinWidth}px, 1fr))`}
        width={width}
        gap={gap ? gap : "10px"}
      >
        {Children.map(children, (child, idx) => {
          return (
            <GridItem key={idx} rowSpan={1} colSpan={1}>
              {child}
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};
