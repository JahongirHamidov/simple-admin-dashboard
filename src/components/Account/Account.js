import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {useAccountStyles} from './AccountStyle'
import { Avatar } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

const countries = [
    {
      value: 'United States',
    },
    {
      value: 'United Kingdom',
    },
    {
      value: 'Canada',
    },
    {
      value: 'Japan',
    },
  ];
const states = [
    {
      value: 'New York',
    },
    {
      value: 'London',
    },
    {
      value: 'Toronto',
    },
    {
      value: 'Tokyo',
    },
  ];
  

export  function Account() {

    const classes = useAccountStyles()
    const bull = <span className={classes.bullet}>•</span>

    const [state, setState] = React.useState('Toronto');
    const [country, setCountry] = React.useState('Canada')

    const handleChange = (event) => {
      setState(event.target.value);
    };
    const handleCountryChange = (event) => {
        setCountry(event.target.value);
      };
  

    return (
        <div className={classes.main}>
            <Card className={classes.root}>
                <div className={classes.grid}>
                   
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        John Doe
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Los Angeles, USA
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       12:34 AM (GTM-7)
                    </Typography>
                    </CardContent>
                    <CardContent>
                        <Avatar className={classes.large}  />

                    </CardContent>
                </div>
                    <Divider />
                <CardActions>
                    <Button size="small" color="primary" >
                    Upload Picture
                    </Button>
                    <Button size="small" >
                    Remove Picture
                    </Button>
                </CardActions>
            </Card>

            <Card>
                <div className={classes.div} >

                   <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} gutterBottom>
                                <b>
                                    Profile
                                </b>
                            </Typography>
                            <Typography>

                            </Typography>
                        </CardContent>
                    <div >
                        <div className={classes.row}>
                            <TextField
                                label="First name"
                                id="margin-dense"
                                defaultValue=""
                                className={classes.textField}
                                helperText="Please specify the first name"
                                margin="First name"
                            />
                            <TextField
                                label="Last name"
                                id="margin-dense"
                                defaultValue=""
                                className={classes.textField}
                                margin="Last name"
                            />
                        </div>
                        <div className={classes.row}>
                            <TextField
                                label="Email address"
                                id="margin-dense"
                                defaultValue=""
                                className={classes.textField}
                                margin="Email address"
                            />
                            <TextField
                                label="Phone number"
                                id="margin-dense"
                                defaultValue=""
                                className={classes.textField}
                                margin="Phone number"
                            />
                        </div>
                        <div className={classes.row}>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select State"
                                value={state}
                                onChange={handleChange}
                                helperText="Please select your state"
                                variant="outlined"
                                className={classes.textField}
                                >
                                {states.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Select Country"
                                value={country}
                                onChange={handleCountryChange}
                                helperText="Please select your country"
                                variant="outlined"
                                className={classes.textField}
                                >
                                {countries.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>

                        
                    </div>
                    <Divider />
                        <CardActions>
                            <Button size="small" color='primary' variant='contained'>
                                Save details
                            </Button>
                        </CardActions>
                    </Card>

                </div>
            </Card>
        </div>
    )
}
