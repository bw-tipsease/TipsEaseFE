import React, { useState, useContext } from "react";
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
    color: "#c9c9c9",
    height: "65em"
  }
}));

function WorkersGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {props.workerList.map((worker, index) => {
          if (props.filter === "all" || props.filter === worker.workType) {
            return (
              <Grid item xs={12} sm={6}>
                <Paper className={classes.paper}>
                  <WorkerCard
                    id={worker.id}
                    name={worker.name}
                    workType={worker.workType}
                    workDuration={worker.workDuration}
                    image={worker.image}
                    removeWorker={props.removeWorker}
                  />
                </Paper>
              </Grid>
            );
          }
        })}
      </Grid>
    </div>
  );
}

export default WorkersGrid;
