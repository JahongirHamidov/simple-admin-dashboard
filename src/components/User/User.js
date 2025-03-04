import React from 'react'
import { useUserStyles } from './UserStyle'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Paper } from '@material-ui/core'
import { useLocation } from 'react-router-dom'



export function User(props) {
        const classes = useUserStyles()
        const [expanded, setExpanded] = React.useState(false)
        const handleExpandClick = () => {
            setExpanded(!expanded)}
        const {state}  = useLocation()
        

    return (
        <>
            <Paper elevation={3} className={classes.main}>  
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                        <Avatar 
                            aria-label="recipe" 
                            className={classes.avatar} 
                            src={state.picture.large} />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title={`${state.name.first} ${state.name.last}`}
                            subheader={state.email}
                        />
                        <CardMedia
                            className={classes.media}
                            image={state.picture.large}
                            title="Paella dish"
                        />
                            
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {`Nationality: ${state.nat} `} <br/>
                                {`${state.location.country}. ${state.location.city}. ${state.location.state}`} <br/>
                                {`Email: ${state.email}`} <br/>
                                {`Phone: ${state.phone}`}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                            <ShareIcon />
                            </IconButton>
                            <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                    minutes.
                            </Typography>
                            <Typography paragraph>
                                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                                    saffron broth and remaining 4 1/2 cups chicken broth bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                    minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                            <Typography>
                                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>                        
            </Paper>      
        </>  
    )
}
