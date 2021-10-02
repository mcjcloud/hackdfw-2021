import { Grid, Paper, Typography, TextField, Button, FormControl, FormHelperText, FormGroup, FormControlLabel, FormLabel, RadioGroup } from "@material-ui/core"
// import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Checkbox } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
// import Picker from 'emoji-picker-react';
import React, { useState } from "react";

const Interests = (): JSX.Element => {
    const paperStyle = { padding: '40px 40px', width: 350, margin: "30px auto" }
    const headerStyle = { margin: "5" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    // const [status, setStatus] = useState("");
    // const onEmojiClick = (event: any, emojiObject: any) => {
    //     setStatus(`${status} ${emojiObject}`);
    // };
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
                        <RadioGroup aria-label="gender" name="gender1" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Interests</FormLabel>
                        <FormGroup aria-label='interests' style={{ display: 'initial' }}>
                            <FormControlLabel control={<Checkbox />} label="Photgraphy" />
                            <FormControlLabel control={<Checkbox />} label="Music" />
                            <FormControlLabel control={<Checkbox />} label="Instruments" />
                            <FormControlLabel control={<Checkbox />} label="Hiking" />
                            <FormControlLabel control={<Checkbox />} label="Movies" />
                        </FormGroup>
                    </FormControl>
                    {/* <TextField fullWidth id="input-with-icon-textfield" label='Status' placeholder='How are you feeling ?' margin="normal"
                        InputProps={{
                            startAdornment: (
                                <Picker onEmojiClick={onEmojiClick} pickerStyle={{ width: '100%' }} />
                            ),
                        }}
                        onChange={e => setStatus(e.target.value)}
                        value={status} /> */}
                    <TextField fullWidth label='Status' placeholder='How are you feeling ?' />

                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Groups</FormLabel>
                        <FormGroup aria-label='interests' style={{ display: 'initial' }}>
                            <FormControlLabel control={<Checkbox />} label="Nerds" />
                            <FormControlLabel control={<Checkbox />} label="Musicians" />
                            <FormControlLabel control={<Checkbox />} label="Bipolar Sunshine" />
                            <FormControlLabel control={<Checkbox />} label="Subtract ADD" />
                            <FormControlLabel control={<Checkbox />} label="Movie Buffers" />
                        </FormGroup>
                    </FormControl>
                    <Button type='submit' variant='contained' color='primary'>Submit</Button>
                </form>
            </Paper>

        </Grid>
    )
}

export default Interests