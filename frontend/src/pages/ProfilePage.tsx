import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, IconButton, makeStyles, ThemeProvider, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttons: {
    marginTop: theme.spacing(4),
  },
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', 
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const groupCards = [1, 2, 3];
const interestCards = [1, 2, 3];

export default function ProfilePage() {
  const classes = useStyles();

  return(
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.content}>
            <Container maxWidth="sm">
              <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              >
                Welcome @MelonBall
              </Typography>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
             Bio
            </Typography>
            <div>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined">Edit Profile</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">Edit Public Details</Button>
                </Grid>
              </Grid>
            </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {groupCards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    title="Bipolar Sunshine" 
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      About the group
                    </Typography>
                    <Typography>
                      14 Members Online 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Visit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {interestCards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia}
                    title="Bipolar Sunshine" 
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Interest
                    </Typography>
                    <Typography>
                      325 Users Following
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Similar</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  )
}
  