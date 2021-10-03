import React, { Props } from "react"
// import { SignUpItem } from "../models/signup"
import { Grid, Paper, Avatar, Typography, TextField, Button, FormControl, FormHelperText, FormGroup, FormControlLabel } from "@material-ui/core"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Checkbox } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Wizard, { WizardStep } from "../../components/Wizard/Wizard";
import Box from '@material-ui/core/Box';
import "./SignupPage.scss"
import logoTiny from "../../assets/mm-logo-tiny.png";
import avatar1 from "../../assets/avatars/avatar1.png";
import avatar2 from "../../assets/avatars/avatar2.png";
import avatar3 from "../../assets/avatars/avatar3.png";
import avatar4 from "../../assets/avatars/avatar4.png";
import avatar5 from "../../assets/avatars/avatar5.png";
import { useHistory } from "react-router-dom";

export interface Registration {
    name: string,
    email: string,
    password: string,
    terms: boolean,
    avatar: number
}

function selectAvatar(e: React.MouseEvent<HTMLSpanElement>): void {
    const target = e.currentTarget;

    document.querySelectorAll("#choose-avatar > span").forEach(element => 
        element.classList.remove("selected")
    );

    target.classList.add("selected");
}

const Signup = (): JSX.Element => {
    const history = useHistory();
    const paperStyle = { padding: '40px 40px', width: 350, margin: "30px auto" }

    function processForm(): void {
        /* retrieve:
        username,
        email,
        password,
        avatar,
        t&cs
        */
       
        const nameEl = document.getElementById("name") as HTMLInputElement;
        const emailEl = document.getElementById("email") as HTMLInputElement;
        const passwordEl = document.getElementById("password") as HTMLInputElement;
        const tAndCEl = document.getElementById("t-and-c") as HTMLInputElement;

        const name = nameEl.value;
        const email = emailEl.value;
        const password = passwordEl.value;
        const tAndC = tAndCEl.checked;

        const avatarEls = document.querySelectorAll<HTMLSpanElement>("#choose-avatar > span");
        const avatarIndex = Array.from(avatarEls).findIndex(s => s.classList.contains("selected"));

        const registration = {
            name: name,
            email: email,
            password: password,
            terms: tAndC,
            avatar: avatarIndex
        }

        console.debug("SUBMISSION", registration);

        history.push("/profile", registration);
    }

    return (
        <>
        <Wizard step={WizardStep.SIGN_UP} />
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
                        <TextField id="name" fullWidth label='Name' placeholder='Enter your name' />
                    </Box>
                    <Box mt={1}>
                        <TextField id="email" fullWidth label='Email' placeholder='abc@example.com' />
                    </Box>
                    <Box mt={1}>
                        <TextField id="password" fullWidth label='Password' type="password" />
                    </Box>

                    <Box mt={1}>
                        <span>I accept the <Link className="melon-link" to="/legal/t-and-c">Terms &amp; Conditions</Link></span>
                        <Checkbox id="t-and-c" defaultChecked color="primary" />
                    </Box>

                    
                    <Box mt={1}>
                        <Button onClick={processForm} variant='contained' color='primary'>Join</Button>
                    </Box>
                </form>

            </Paper>

        </Grid>
        </>
    )
}

export default Signup;