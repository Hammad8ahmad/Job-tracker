import React from "react";

const EmptyState = ({ filteredJobs }) => {
  return (
    <div className="  flex items-center justify-center text-black py-10 px-5  text-6xl mt-10">
      <div>You currently have {filteredJobs.length} jobs.</div>
    </div>
  );
};

export default EmptyState;
