import React from "react"
// import { SignUpItem } from "../models/signup"
import { Grid, Paper, Avatar, Typography, TextField, Button, FormControl, FormHelperText, FormGroup, FormControlLabel } from "@material-ui/core"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Checkbox } from "@material-ui/core";
import { Link } from 'react-router-dom';


const Signup = (): JSX.Element => {
    const paperStyle = { padding: '40px 40px', width: 350, margin: "30px auto" }
    const headerStyle = { margin: "5" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid container justify="center">
                    <Grid item>
                        <Avatar style={avatarStyle}>
                            <AddAPhotoOutlinedIcon />
                        </Avatar>
                        <h2 style={headerStyle}> Create Account</h2>
                        <Typography variant='caption'>Please fill this form to create an account ! </Typography>

                    </Grid>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder='Enter your name' />
                    <TextField fullWidth label='Email' placeholder='abc@gmail.com' />
                    <TextField fullWidth label='UserName' />
                    
                    <Button component={Link} to='/details' variant='contained' color='primary'>Save</Button>
                </form>
            </Paper>

        </Grid>
    )
}

export default Signup