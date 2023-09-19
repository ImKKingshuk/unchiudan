import React from "react";
import {
  FaDownload,
  FaFileAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaSearch,
} from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";
function DownloadPage() {
  return (
    <div className="mx-auto py-[8rem] ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className="mx-0 col-span-3 xl:mx-0 p-4 md:mx-0 overflow-y-auto lg:my-0">
          <h1 className="text-center font-bold text-[2rem] md:text-[2.5rem] mb-6 ">
            UPSC download title 1 pdf note 1
          </h1>
          <div className="mx-6 my-12">
            <img
              alt="meow"
              src="/Images/upsc.jpeg"
              class="w-full mx-auto rounded-lg"
            />
          </div>

          <div className="w-18 md:mx-12 flex-col p-4 border border-2 mx-4 rounded-lg mt-16">
            <div className="flex justify-between space-x-3 ">
              <FaFileAlt className="w-12 h-12" />

              <h1 className="text-center text-lg ">
                Monthly Current Affairs of Jun 2020 PDF Download Set no- 205
              </h1>
            </div>
            <div className="flex justify-between md:mx-12  mt-4">
              <span>Size: 10MB</span> <span>Downloads: 125</span>
              <span>Last Updated: 30 August</span>
            </div>
            <a href="#">
              <div className="mt-6 flex w-fit hover:bg-teal-500 px-3 py-1 justify-between space-x-3 text-lg mx-auto rounded-full bg-teal-300 text-white">
                <FaDownload className="w-6 h-6" />
                <span>Download</span>
              </div>
            </a>
          </div>
          <div className="flex justify-between mt-6  ">
            <span className="text-center text-md ">Share with Friends :</span>
            <span className="flex text-gray-400 justify-center space-x-4">
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaFacebook className="text-blue-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaTwitter className="text-blue-400 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-blue-600 w-7 h-7" />
              </a>
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-green-500 w-7 h-7" />
              </a>
            </span>
          </div>

          <h1 className="mt-10 text-[1.3rem] font-[550] text-center">
            Monthly Current Affairs of Jun 2020 PDF Download Set no- 205
          </h1>
          <p className="mt-4 text-justify text-lg">
            Monthly Current Affairs of Jun 2020 PDF Download is now out by
            UnchiUdaan.in You can Download it here and Get Daily 10 Questions of
            Latest Current Affairs of Jun 2020 on UnchiUdaan Facebook Page. You
            can also Download other Previous Monthly Current Affairs of Jun 2020
            along with Current affairs of Jun available in Free Download page of
            this Website. <br /> <br /> This PDF is the Successive Series of
            Unchiudaan Monthly Current affairs PDF of Jun that is Being Issued
            by Unchi Udaan. You can also Download the Previous Month PDF for
            Free Monthly PDF. You can also download other PDFs{" "}
          </p>
          <div className="flex justify-between mt-10 ">
            <span className="text-center text-md ">Share with Friends :</span>
            <span className="flex text-gray-400 justify-center space-x-4">
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaFacebook className="text-blue-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaTwitter className="text-blue-400 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaInstagram className="text-pink-500 w-7 h-7" />
              </a>

              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaLinkedin className="text-blue-600 w-7 h-7" />
              </a>
              <a className=" " href="" target="_blank" rel="noreferrer">
                <FaWhatsapp className="text-green-500 w-7 h-7" />
              </a>
            </span>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

export default DownloadPage;
