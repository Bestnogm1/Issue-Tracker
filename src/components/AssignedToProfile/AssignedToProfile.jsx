import { useEffect, useState } from "react";
import * as profileService from "../../services/profileService";

function AssignedToProfile({
  formData,
  handleChange,
  searchResults,
  handleProfileSelection,
}) {
  return (
    <>
      <input
        type="text"
        name="assignedTo"
        value={formData.assignedTo ?? formData.name}
        onChange={handleChange}
      />
      {searchResults.map((profile) => (
        <button
          type="button"
          key={profile._id}
          onClick={handleProfileSelection}
        >
          <p>{profile.name}</p>
        </button>
      ))}
    </>
  );
}

export default AssignedToProfile;
