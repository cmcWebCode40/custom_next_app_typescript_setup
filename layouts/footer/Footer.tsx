import { Link, makeStyles, Typography } from '@material-ui/core';
import { BrandName } from '../../constants';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    bottom: '-33%'
  }
}));
const Footer = () => {
  const classes = useStyles();

  return (
    <Typography
      className={classes.root}
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {'Copyright © '}
      <Link color="inherit" href={process.env.PUBLIC_URL}>
        {BrandName}
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;
