import { Grid, Paper, Typography, TextField, Button, FormControl, FormHelperText, FormGroup, FormControlLabel, FormLabel, RadioGroup, Box } from "@material-ui/core"
// import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';
import { Checkbox } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
// import Picker from 'emoji-picker-react';
import React from "react";
import { RouteComponentProps, StaticContext } from "react-router";
import Wizard, { WizardStep } from "../../components/Wizard/Wizard";
import "./JoinPage.scss";
import avatar1 from "../../assets/avatars/avatar1.png";
import avatar2 from "../../assets/avatars/avatar2.png";
import avatar3 from "../../assets/avatars/avatar3.png";
import avatar4 from "../../assets/avatars/avatar4.png";
import avatar5 from "../../assets/avatars/avatar5.png";
import { Link, useHistory } from "react-router-dom";

interface MessageObj {
    _id: string;
    message: Message;
}
interface Message {
    message: string;
}

interface JoinState {
    messages: MessageObj[];
}

const Join = (): JSX.Element => {
    const history = useHistory();

    function join(): void {
        history.push("/join");
    }
    
    const initial_state: JoinState = {
        messages: []
    };

    const [state, setState] = React.useState(initial_state);

    React.useEffect(() => {
        fetch("http://localhost:8080/messages")
            .then(response => response.json())
            .then(data => setState(data));
    }, []);

    function sendMessage() {
        const m = document.getElementById("message") as HTMLInputElement;
        const ms = m.value;
        alert(ms);
        fetch('http://localhost:8080/messages', {
            method: 'POST', // or 'PUT'
            body: ms,
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            const modified_state = { ... state };
            modified_state.messages.push(data);
            setState(modified_state);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }

    return (
        <>
            <Wizard step={WizardStep.JOIN}/>

            <div className="matches-container">
                <span className="pre-match">
                    <div className="p-title">
                        <Typography variant="h4">Posts</Typography>
                        <Link to="/schedule"><Button type='submit' variant='contained' color='default'>View Schedule</Button></Link>
                    </div>

                    <div className="posts">
                        <div className="post">
                            <div className="post-meta">
                                <span className="pa-img"><img src={avatar3} /></span>
                                <span className="pa-meta">
                                    <div>Sebastian King</div>
                                    <div>7:10 AM, Oct 3</div>
                                </span>
                            </div>
                            <div>This is my first post!</div>
                        </div>
                    </div>

                </span>
                <div className="match2">
                    <div className="avatar-section"><img src="https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/158881/238442/heroimage0.172831001604055122.jpg" /></div>
                    <div className="info">
                        <div className="top-row">
                            <Typography className="inline-heading" variant="h6">Threshold of Hope</Typography>
                            <span className="heading-caption">
                                <small>
                                &nbsp;— Group since Jan 16, 2020
                                </small>
                            </span>
                        </div>
                        <div>
                            <span className="description-section">
                                <div className="main-join">
                                    The Threshold of Hope group offers online support groups, chat rooms, and forums for members to share their feelings, provide daily check-ins, discuss their experiences with depression, and share encouragement and support.
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="matches-container">
                <span className="pre-match">
                </span>
                <div className="match2 chat">
                    <Typography variant="h6">Chat</Typography>

                    {
                        state.messages.map(message => 
                            <>
                                <div><strong>Sebastian King:</strong> {message.message.message}</div>
                            </>
                        )
                    }

                    <Box mt={3} className="inline-text-fields">
                        <TextField id="message" className="inline-text-fields-49" label='Message' /><br />
                        <Button type='submit' variant='contained' color='primary' onClick={sendMessage}>Send</Button>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default Join