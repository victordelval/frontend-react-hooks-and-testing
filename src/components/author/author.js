import React from 'react'

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Author() {
  return (
    <Typography variant="body1" color="textSecondary" align="center">
      <Link color="inherit" href="https://victordelval.com/">
        Víctor del Val
      </Link>
    </Typography>
  );
}

export default Author