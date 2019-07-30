import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WorkerCard from "./WorkerCard";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    background: "#232323",
    color: "#c9c9c9"
  }
}));

const workerList = [
  {
    name: "PJ",
    workDuration: "1 year 2 months"
  },
  {
    name: "PJ",
    workDuration: "1 year 2 months"
  },
  {
    name: "PJ",
    workDuration: "1 year 2 months"
  },
  {
    name: "PJ",
    workDuration: "1 year 2 months"
  },
  {
    name: "PJ",
    workDuration: "1 year 2 months"
  },
  {
    name: "PJ",
    workDuration: "1 year 2 months"
  }
];

function WorkersGrid() {
  const classes = useStyles();
  const [worker, setWorker] = useState(workerList);
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {worker.map((worker, index) => {
          return (
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
                <WorkerCard
                  name={worker.name}
                  workDuration={worker.workDuration}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default WorkersGrid;
