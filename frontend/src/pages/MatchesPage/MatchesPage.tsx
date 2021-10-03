import { Grid, Paper, Typography, TextField, Button, FormControl, FormHelperText, FormGroup, FormControlLabel, FormLabel, RadioGroup, Box } from "@material-ui/core"
// import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Checkbox } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
// import Picker from 'emoji-picker-react';
import React from "react";
import { RouteComponentProps, StaticContext } from "react-router";
import Wizard, { WizardStep } from "../../components/Wizard/Wizard";
import "./MatchesPage.scss";
import avatar1 from "../../assets/avatars/avatar1.png";
import avatar2 from "../../assets/avatars/avatar2.png";
import avatar3 from "../../assets/avatars/avatar3.png";
import avatar4 from "../../assets/avatars/avatar4.png";
import avatar5 from "../../assets/avatars/avatar5.png";
import { useHistory } from "react-router-dom";

const Matches = (): JSX.Element => {
    const history = useHistory();

    function join(): void {
        history.push("/join");
    }

    return (
        <>
            <Wizard step={WizardStep.MATCHES}/>

            <div className="matches-container">
                <div className="match">
                    <div className="avatar-section"><img src="https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/158881/238442/heroimage0.172831001604055122.jpg" /></div>
                    <div className="info">
                        <div className="top-row">
                            <Typography className="inline-heading" variant="h6">Threshold of Hope</Typography>
                            <span className="heading-caption">
                                <small>
                                &nbsp;— Group since Jan 16, 2020
                                </small>
                            </span>
                            <span className="top-row-right">
                                <Button size="small" variant="outlined">Preview</Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button size="small" variant="contained" color='primary' onClick={join}>Join</Button>
                            </span>
                        </div>
                        <div>
                            <span className="description-section">
                                <div className="main">
                                    The Threshold of Hope group offers online support groups, chat rooms, and forums for members to share their feelings, provide daily check-ins, discuss their experiences with depression, and share encouragement and support.
                                </div>
                                <div className="sec">
                                    <span className="highlighted-person">
                                        <img src={avatar1} />
                                        <p><strong>Rob</strong><br />James</p>
                                        <small className="qual">TPSA</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar5} />
                                        <p><strong>Hugh</strong><br />Evans</p>
                                        <small className="qual">Counsellor</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar4} />
                                        <p><strong>Priy</strong><br />Vardy</p>
                                        <small className="qual">S.W.</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar3} />
                                        <p><strong>Rohit</strong><br />Dhoy</p>
                                        <small className="qual">TPSA</small>
                                    </span>
                                </div>
                            </span>
                            <span className="extra-section">
                                <h4>Scheduled Events/Meetups</h4>
                                <ul>
                                    <li>Tea &amp; Biscuits - 4:30pm Wed.</li>
                                    <li>Group Mentor - 7pm Sat.</li>
                                </ul>

                                <p className="right-align"><small>66 members</small></p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="match">
                    test
                </div>
                <div className="match">
                    test
                </div>
            </div>
        </>
    )
}

export default Matches