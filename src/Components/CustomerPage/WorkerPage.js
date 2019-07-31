import React from "react";
import CreateWorker from "./CreateWorker/CreateWorker";

function WorkerPage(props) {
  return (
    <div className="form">
      <CreateWorker
        workerList={props.workerList}
        setWorkerList={props.setWorkerList}
      />
    </div>
  );
}

export default WorkerPage;
