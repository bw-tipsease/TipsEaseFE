import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WorkerCard from "./WorkerCard";
import { workerContext } from "../../Context/Contexts";

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

const list = [
  {
    name: "PJ Wise",
    workDuration: "1 year 2 months",
    image:
      "https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Colin de Vries",
    workDuration: "1 year 2 months",
    image:
      "https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Daniel Rolon",
    workDuration: "1 year 2 months",
    image:
      "https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Bryce Soghigian",
    workDuration: "1 year 2 months",
    image:
      "https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Roger McConkie",
    workDuration: "1 year 2 months",
    image:
      "https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  },
  {
    name: "Luis Mendes",
    workDuration: "1 year 2 months",
    image:
      "https://images.pexels.com/photos/1851471/pexels-photo-1851471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }
];

function WorkersGrid() {
  const classes = useStyles();
  const { workerList, setWorkerList } = useContext(workerContext);
  const [worker, setWorker] = useState(list);

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
                  image={worker.image}
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
