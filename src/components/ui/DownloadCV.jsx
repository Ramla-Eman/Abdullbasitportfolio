import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

const DownloadCV = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Ramla Eman 2024.pdf";
    link.download = "Ramla Eman 2024.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div>
      <button onClick={downloadCV} className="bg-button hover:bg-button-hover text-white py-2 px-6 rounded-full text-2xl flex items-center gap-2 font-semibold">
        <p>Download CV</p> <MdOutlineFileDownload />
      </button>
    </div>
  );
};

export default DownloadCV;
