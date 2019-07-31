import React from "react";
import CreateForm from "./CreateForm";

function CreateWorker(props) {
  return (
    <div>
      <CreateForm workerList={props.workerList} setWorkerList={props.setWorkerList}/>
    </div>
  );
}

export default CreateWorker;
