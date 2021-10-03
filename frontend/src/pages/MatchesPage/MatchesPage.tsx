import { Grid, Paper, Typography, TextField, Button, FormControl, FormHelperText, FormGroup, FormControlLabel, FormLabel, RadioGroup, Box } from "@material-ui/core"
// import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Checkbox } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
// import Picker from 'emoji-picker-react';
import React from "react";
import { RouteComponentProps, StaticContext } from "react-router";
import Wizard, { WizardStep } from "../../components/Wizard/Wizard";

const Matches = (): JSX.Element => {
    const paperStyle = { padding: '40px 40px', width: 350, margin: "30px auto" };
    const marginTop = { marginTop: 5 };

    return (
        <>
            <Wizard step={WizardStep.MATCHES}/>

            <Grid>
                <Paper elevation={20} style={paperStyle}>
                </Paper>

            </Grid>
        </>
    )
}

export default Matches