import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <SyncLoader color="#ffffff" size={6} />
    </div>
  );
};

export default Loader;
