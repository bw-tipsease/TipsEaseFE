import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WorkerCard from './WorkerCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    background: '#252525',
    color: '#c9c9c9',
  },
}));

function WorkersGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
          <WorkerCard />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
          <WorkerCard />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
          <WorkerCard />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
          <WorkerCard />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
          <WorkerCard />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className={classes.paper}>
          <WorkerCard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default WorkersGrid;