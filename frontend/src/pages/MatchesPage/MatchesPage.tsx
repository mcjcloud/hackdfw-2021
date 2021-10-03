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
                <div className="avatar-section"><img src="https://dariusforoux.com/wp-content/uploads/2015/08/motivational-quotes.png" /></div>
                    <div className="info">
                        <div className="top-row">
                            <Typography className="inline-heading" variant="h6">A Daily Dose of Motivation</Typography>
                            <span className="heading-caption">
                                <small>
                                &nbsp;— Group since Oct 3, 2020
                                </small>
                            </span>
                            <span className="top-row-right">
                                <Button size="small" variant="outlined">Preview</Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button size="small" variant="contained" color='primary'>Join</Button>
                            </span>
                        </div>
                        <div>
                            <span className="description-section">
                                <div className="main">
                                    The daily motivators pride themselves in helping others find their inspiration. Whether you're looking to set a new goal, or struggling to remember why you started, you can count on us to always push you to be your best and pick you up if you're feeling at your worst.
                                </div>
                                <div className="sec">
                                    <span className="highlighted-person">
                                        <img src={avatar1} />
                                        <p><strong>Ashley</strong><br />Adams</p>
                                        <small className="qual">TPSA</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar5} />
                                        <p><strong>Rufus</strong><br />King</p>
                                        <small className="qual">Mentor</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar4} />
                                        <p><strong>Evan</strong><br />Giia</p>
                                        <small className="qual">S.W.</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar3} />
                                        <p><strong>Melonie</strong><br />Mater</p>
                                        <small className="qual">TPSA</small>
                                    </span>
                                </div>
                            </span>
                            <span className="extra-section">
                                <h4>Scheduled Events/Meetups</h4>
                                <ul>
                                    <li>Spooktober 5k - 3:00pm Wed.</li>
                                    <li>Confidence Workshop - 7pm Sat.</li>
                                </ul>

                                <p className="right-align"><small>300 members</small></p>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="match">
                <div className="avatar-section"><img src="https://s3.envato.com/files/e1b3360c-78b6-40fb-bf8b-d78b15f27a1e/inline_image_preview.jpg" /></div>
                    <div className="info">
                        <div className="top-row">
                            <Typography className="inline-heading" variant="h6">Insomniacs who code</Typography>
                            <span className="heading-caption">
                                <small>
                                &nbsp;— Group since Nov 10, 2018
                                </small>
                            </span>
                            <span className="top-row-right">
                                <Button size="small" variant="outlined">Preview</Button>
                                &nbsp;&nbsp;&nbsp;
                                <Button size="small" variant="contained" color='primary'>Join</Button>
                            </span>
                        </div>
                        <div>
                            <span className="description-section">
                                <div className="main">
                                    Insomniacs who code is a group of people from all walks of life that feel the most productive while the rest of the world sleeps... At least that's what they tell themselves. More often than not, its an outlet for those in need of a new rubber duck following the untimely demise of their latest debugging buddy, or its a place to talk about a cool project you're working on!
                                </div>
                                <div className="sec">
                                    <span className="highlighted-person">
                                        <img src={avatar1} />
                                        <p><strong>David</strong><br />Smith</p>
                                        <small className="qual">Mentor</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar5} />
                                        <p><strong>Josh</strong><br />Michaels</p>
                                        <small className="qual">Mentor</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar3} />
                                        <p><strong>Stacy</strong><br />Johnson</p>
                                        <small className="qual">Councellor</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar4} />
                                        <p><strong>Lisa</strong><br />Sample</p>
                                        <small className="qual">TPSA</small>
                                    </span>
                                    <span className="highlighted-person">
                                        <img src={avatar2} />
                                        <p><strong>Tam</strong><br />Nguyen</p>
                                        <small className="qual">Mentor</small>
                                    </span>
                                </div>
                            </span>
                            <span className="extra-section">
                                <h4>Scheduled Events/Meetups</h4>
                                <ul>
                                    <li>Virtual Think Tank - 3am CST Thurs.</li>
                                    <li>Anger Management Workshop 10pm CST Sat.</li>
                                </ul>

                                <p className="right-align"><small>101 members</small></p>
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Matches