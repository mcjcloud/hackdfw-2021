import React from "react"
// import { SignUpItem } from "../models/signup"
import { Grid, Paper, Avatar, Typography, TextField, Button, FormControl, FormHelperText, FormGroup, FormControlLabel } from "@material-ui/core"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Checkbox } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Wizard from "../../components/Wizard/Wizard";
import Box from '@material-ui/core/Box';
import "./SignupPage.scss"
import logoTiny from "../../assets/mm-logo-tiny.png";
import avatar1 from "../../assets/avatars/avatar1.png";
import avatar2 from "../../assets/avatars/avatar2.png";
import avatar3 from "../../assets/avatars/avatar3.png";
import avatar4 from "../../assets/avatars/avatar4.png";
import avatar5 from "../../assets/avatars/avatar5.png";

function selectAvatar(e: React.MouseEvent<HTMLSpanElement>): void {
    const target = e.currentTarget;

    document.querySelectorAll("#choose-avatar > span").forEach(element => 
        element.classList.remove("selected")
    );

    target.classList.add("selected");
}

const Signup = (): JSX.Element => {
    const paperStyle = { padding: '40px 40px', width: 350, margin: "30px auto" }
    const headerStyle = { margin: "5" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (
        <>
        <Wizard stage="Sign Up"/>
        <Grid className="text-center">

            <div className="div-inline-center intro-text-container">
                <p>
                    <span className="intro-text">Life twisting your melon, man?</span>
                    <br />
                    <span className="intro-text">Feeling a little bit meloncholy?</span>
                </p>
                <p className="intro-text-extra">Get support that will make you feel like 1 in a melon.</p>
            </div>

            <Paper elevation={20} style={paperStyle}>
                <div>
                    <Box mb={2}>
                        <div><small>Welcome to</small></div>
                        <div><strong>
                            <l>M</l>ELON<img src={logoTiny} /><l>M</l>ENTOR
                        </strong></div>
                    </Box>

                    <Typography component="h6" variant="h4">Create an Account</Typography>

                    <Box mt={2}>
                        <Typography variant='caption'>Please choose an avatar!</Typography>
                        <div id="choose-avatar" className="choose-avatar">
                            <span onClick={selectAvatar} className="selected"><img src={avatar1} /></span>
                            <span onClick={selectAvatar}><img src={avatar2} /></span>
                            <span onClick={selectAvatar}><img src={avatar3} /></span>
                            <span onClick={selectAvatar}><img src={avatar4} /></span>
                            <span onClick={selectAvatar}><img src={avatar5} /></span>
                        </div>
                    </Box>
                </div>
        
                <form>

                    <Box mt={1}>
                        <TextField fullWidth label='Name' placeholder='Enter your name' />
                    </Box>
                    <Box mt={1}>
                        <TextField fullWidth label='Email' placeholder='abc@example.com' />
                    </Box>
                    <Box mt={1}>
                        <TextField fullWidth label='Password' type="password" />
                    </Box>
                    
                    <Box mt={1}>
                        <Button component={Link} to='/details' variant='contained' color='primary'>Join</Button>
                    </Box>
                </form>

            </Paper>

        </Grid>
        </>
    )
}

export default Signup;