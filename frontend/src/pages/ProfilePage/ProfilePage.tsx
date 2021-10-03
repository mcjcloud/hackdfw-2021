import { Grid, Paper, Typography, TextField, Button, FormControl, FormHelperText, FormGroup, FormControlLabel, FormLabel, RadioGroup, Box } from "@material-ui/core"
// import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Checkbox } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
// import Picker from 'emoji-picker-react';
import React from "react";
import { RouteComponentProps, StaticContext } from "react-router";
import Wizard, { WizardStep } from "../../components/Wizard/Wizard";
import { Registration } from "../SignupPage/SignupPage";
import avatar1 from "../../assets/avatars/avatar1.png";
import avatar2 from "../../assets/avatars/avatar2.png";
import avatar3 from "../../assets/avatars/avatar3.png";
import avatar4 from "../../assets/avatars/avatar4.png";
import avatar5 from "../../assets/avatars/avatar5.png";
import "./ProfilePage.scss";
import MultiSelect from "@antlerengineering/multiselect";

type LocationState = Registration & {
    from: Location;
};

interface ProfileState {
    selections: string[];
}

const Profile = (props: RouteComponentProps<{}, StaticContext, LocationState>): JSX.Element => {
    const paperStyle = { padding: '40px 40px', width: 350, margin: "30px auto" }
    const marginTop = { marginTop: 5 }

    const avatars = [
        avatar1,
        avatar2,
        avatar3,
        avatar4,
        avatar5
    ];

    const initial_state: ProfileState = {
        selections: []
    };

    const [state, setState] = React.useState(initial_state);

    function updateSelections(value: string[], reason: any): void {
        const modified_state = { ... state };
        modified_state.selections = value;
        setState(modified_state);
    }

    return (
        <>
        <Wizard step={WizardStep.YOUR_PROFILE}/>

        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid container justify="center">
                    <Grid item>
                        <div className="profile-header-section">
                            <Typography variant='caption'>Welcome{props.location.state?.name ? ", " + props.location.state.name : ""}!</Typography>
                            <img className="avatar" src={avatars[props.location.state?.avatar ? props.location.state.avatar : 0]} />
                        </div>

                        <Typography component="h6" variant="h4">Tell us about yourself</Typography>
                    </Grid>
                </Grid>
                <form>
                    <Box mt={2}>
                        <TextField label='Age' />
                        <TextField label='Zip Code' />
                    </Box>

                    <Box mt={2}>
                        <FormControl component="fieldset" style={marginTop}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" style={{ display: 'initial' }}>
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    
                    <Box mt={2}>
                        <MultiSelect
                            value={state.selections} // From useState
                            onChange={updateSelections} // From useState
                            options={['The Shawshank Redemption', 'The Godfather']}
                            label="Movie"
                            labelPlural="Movies"
                            multiple={true}
                        />
                    </Box>
                    
                    <Box mt={2}>
                        <Button type='submit' variant='contained' color='primary'>Submit</Button>
                    </Box>
                </form>
            </Paper>

        </Grid>
        </>
    )
}

export default Profile