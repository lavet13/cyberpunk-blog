import {
  defineStyle,
  SystemStyleFunction,
  StyleFunctionProps,
  SystemStyleObject,
} from '@chakra-ui/react';

import { mode } from '@chakra-ui/theme-tools';

const styles = {
  // same as using defineStyle
  global: (props: StyleFunctionProps): SystemStyleObject => ({
    // body: {
    //   bg: mode(`linear-gradient(90deg, #f5ed00 70%, #e6de00 70%), #fff700`, ``)(
    //     props
    //   ),
    // },
  }),
};

export default styles;
