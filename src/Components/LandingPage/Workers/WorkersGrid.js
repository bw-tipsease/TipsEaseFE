import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import WorkerCard from './WorkerCard';
import mockData from './MockData';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    background: '#202020',
    color: '#c9c9c9',
    boxShadow: '0px 4px 12px 0px rgba(201,201,201,1)',
  },
}));

function WorkersGrid() {

  const [workers, setWorkers] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios.get('https://tipsease-backend-new.herokuapp.com/api/tippers')

    .then(res => {
      console.log(res.data);
      setWorkers(res.data);
    })

    .catch(err => {
      console.log(err);
    })
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {workers.map(worker => 
          <Grid item xs={12} md={12} lg={6}>
          <Paper className={classes.paper}>
          <WorkerCard key={worker.index} image={worker.photo_url} firstName={worker.first_name} lastName = {worker.last_name} role={worker.email} />
          </Paper>
        </Grid>
        )}
        </Grid>
    </div>
  );
}

export default WorkersGrid;