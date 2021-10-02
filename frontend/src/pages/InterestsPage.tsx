import React from "react"
// import { SignUpItem } from "../models/signup"
import { Grid, Paper, Typography, TextField, Button, FormControl, FormHelperText, FormGroup, FormControlLabel, FormLabel, RadioGroup } from "@material-ui/core"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Checkbox } from "@material-ui/core";
import { Label } from "@material-ui/icons";
import Radio from '@material-ui/core/Radio';


const Interests = (): JSX.Element => {
    const paperStyle = { padding: '40px 40px', width: 350, margin: "30px auto" }
    const headerStyle = { margin: "5" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = {marginTop:5}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid container justify="center">
                    <Grid item>
                        <h2 style={headerStyle}> More Details</h2>
                        <Typography variant='caption'>Please fill more details ! </Typography>

                    </Grid>
                </Grid>
                <form>
                    <TextField fullWidth label='Age' />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" style={{display:'initial'}}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Interests</FormLabel>
                        <FormGroup aria-label='interests' style={{display:'initial'}}>
                        <FormControlLabel control={<Checkbox  />} label="Photgraphy" />
                        <FormControlLabel control={<Checkbox  />} label="Music" />
                        <FormControlLabel control={<Checkbox  />} label="Instruments" />
                        <FormControlLabel control={<Checkbox  />} label="Hiking" />
                        <FormControlLabel control={<Checkbox  />} label="Movies" />
                        </FormGroup>
                    </FormControl>
                    <TextField fullWidth label='Status' placeholder='How are you feeling ?' margin="normal"/>
                    <TextField fullWidth label='Groups' />
                    {/* <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                    </FormGroup> */}
                    <Button type='submit' variant='contained' color='primary'>Submit</Button>
                </form>
            </Paper>

        </Grid>
    )
}

export default Interests