import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useProfileContext } from "../../contexts/ProfileContexts/ProfileContexts";

function AssigneeForm({ setAssignees, assignees }) {
  const { profiles } = useProfileContext();
  const [newProfile, setNewProfile] = useState([...profiles]);

  useEffect(() => {
    function changeData(data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("name")) {
          data[i]["value"] = data[i]["name"];
          delete data[i]["name"];
        }
        if (!data[i]["label"]) {
          data[i]["label"] = data[i]["value"];
        }
        delete data[i]["createdAt"];
        delete data[i]["email"];
        delete data[i]["updatedAt"];
        delete data[i]["ticketAssignedToMe"];
      }
      setNewProfile(data);
    }
    changeData(newProfile);
  }, [profiles]);

  return (
    <div>
      <>
        <Select
          variant="filled"
          isMulti
          defaultValue={assignees}
          name="Assignees"
          options={newProfile}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(e) => setAssignees(e)}
        />
      </>
    </div>
  );
}

export default AssigneeForm;
