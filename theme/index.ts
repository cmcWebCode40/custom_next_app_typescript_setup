import { createMuiTheme } from '@material-ui/core';

import palette from './palette';

const theme = createMuiTheme({
  palette,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
});

export default theme;
