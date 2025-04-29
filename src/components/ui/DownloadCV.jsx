import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const DownloadCV = () => {
  return (
    <div>
      <button className="bg-button hover:bg-button-hover text-white py-2 px-6 rounded-full text-2xl flex items-center gap-2 font-semibold">
        <p>Download CV</p> <MdOutlineFileDownload />
      </button>
    </div>
  );
};

export default DownloadCV;
