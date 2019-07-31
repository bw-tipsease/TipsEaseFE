import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WorkerCard from './WorkerCard';
import mockData from './MockData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    background: '#202020',
    color: '#c9c9c9',
    boxShadow: '0px 4px 12px 0px rgba(201,201,201,1)',
  },
}));

function WorkersGrid() {

  const [workers, setWorkers] = useState(mockData);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {workers.map(worker => 
          <Grid item xs={12} md={10} lg={6}>
          <Paper className={classes.paper}>
          <WorkerCard name={worker.name} role={worker.role} timeEmployed={worker.timeEmployed} />
          </Paper>
        </Grid>
        )}
        </Grid>
    </div>
  );
}

export default WorkersGrid;