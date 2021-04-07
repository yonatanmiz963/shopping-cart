
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ItemPreview.scss'


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 300,
    },
});


export function ItemPreview({ item, onAddToCart }) {
    const classes = useStyles();
    return (
        <div className="item-preview">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={item.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {'$' + item.price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Add to cart
              </Button>
                    <Button onClick={() => onAddToCart(item)} size="small" color="primary">
                        Add To Cart
              </Button>
                </CardActions>
            </Card>
        </div>
    )
}
