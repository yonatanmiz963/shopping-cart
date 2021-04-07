import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './CartPreview.scss'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  // bullet: {
  //   display: 'inline-block',
  //   margin: '0 2px',
  //   transform: 'scale(0.8)',
  // },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function CartPreview({item}) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
        </Typography> */}
        <Typography variant="h5" component="h2">
          {item.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        ${item.price}
        </Typography>
        {/* <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
  );
}