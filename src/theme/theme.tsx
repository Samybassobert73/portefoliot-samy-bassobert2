import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { config } from "./config";
import { breakpoints } from "./foundations/breakpoints";
export default extendTheme(
  { breakpoints }, // Breakpoints
  globalStyles,
  config 
 
);
