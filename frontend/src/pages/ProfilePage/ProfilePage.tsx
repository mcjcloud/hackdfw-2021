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
import { useHistory } from "react-router-dom";

type LocationState = Registration & {
    from: Location;
};

interface ProfileState {
    selections: string[];
}

export const Categories = [
    'Diabetes',
    'Attention Deficit Disorder (ADD)',
    'Obsessive Compulsive Disorder (OCD)',
    'Grief and Loss',
    'Autism',
    'Cancer',
    'Bipolar',
    'Anxiety',
    'Depression'
];

const Profile = (props: RouteComponentProps<{}, StaticContext, LocationState>): JSX.Element => {
    const history = useHistory();
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

    function processProfile(): void {
        history.push("/matches");
    }

    return (
        <>
            <Wizard step={WizardStep.YOUR_PROFILE}/>

            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid container justify="center">
                        <Grid item>
                            <div className="profile-header-section">
                                <Typography variant='caption' align="center">Welcome{props.location.state?.name ? ", " + props.location.state.name : ""}!</Typography>
                                <img className="avatar" src={avatars[props.location.state?.avatar ? props.location.state.avatar : 0]} />
                            </div>

                            <Typography component="h6" align="center" variant="h5">We're so glad you're here</Typography>
                            <Typography component="h6" align="center" variant="h5">Tell us more about yourself</Typography>
                        </Grid>
                    </Grid>
                    <form>
                        <Box mt={2} className="inline-text-fields">
                            <span>
                                <TextField className="inline-text-fields-49" label='Age' />
                            </span>
                            <span>
                                <TextField className="inline-text-fields-49" label='Zip Code' />
                            </span>
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
                                options={Categories}
                                label="Topics of Interest"
                                labelPlural="Topics of Interest"
                                multiple={true}
                            />
                        </Box>

                        <Box mt={2}>
                            <ul>
                                {
                                    state.selections.map(cat => {
                                        return (
                                            <>
                                                <li>
                                                    {cat}
                                                </li>
                                                <li className="li-no-style">
                                                    <FormControl component="fieldset" style={marginTop}>
                                                        <RadioGroup aria-label="diagnosis-type" name="diagnosis-type" style={{ display: 'initial' }}>
                                                            <FormControlLabel className="diagnosis-radio-button" value="self" control={<Radio />} label="Self Diagnosed" />
                                                            <FormControlLabel className="diagnosis-radio-button" value="med" control={<Radio />} label="Medically Diagnosed" />
                                                        </RadioGroup>
                                                    </FormControl>
                                                </li>
                                            </>
                                        );
                                    })
                                }
                            </ul>
                        </Box>
                        
                        <Box className="text-center" mt={2}>
                            <Button type='submit' variant='contained' color='primary' onClick={processProfile}>Continue</Button>
                        </Box>
                    </form>
                </Paper>

            </Grid>
        </>
    )
}

export default Profile