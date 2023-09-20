/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function BlogComps({ date, title, imageSrc,updatedDate }) {
  return (
    <Link to="/downloadpdf/id">
      <div className="bg-white p-6 w-[18rem] md:w-[14rem] rounded-xl shadow-lg transition duration-500">
        <div className="relative">
          <img className="w-full rounded-xl" src={imageSrc} alt="Blog Cover" />
          <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
            {date}
          </p>
        </div>
        <h1 className="mt-4 text-gray-800 text-lg font-bold cursor-pointer">
          {title}
        </h1>
        <h1 className="mt-4 text-gray-800 text-lg font-bold cursor-pointer">
          {updatedDate}
        </h1>
        <div className="my-2 mx-6 flex justify-between"></div>
        <button className="mt-4 text-md hover:bg-indigo-600 w-full text-white bg-indigo-400 py-1 px-3 rounded-xl hover:shadow-xl">
          Read More
        </button>
      </div>
    </Link>
  );
}

function Downloads() {
  const [pdfs, setAffairs] = useState([]);
  useEffect(() => {
    axios
      .get("/api/pdfs")
      .then((response) => {
        setAffairs(response.data.data.pdf);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="mx-auto py-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-3 p-4 md:mx-0 overflow-y-auto lg:my-0">
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 mx-10 md:mx-0 gap-6">
            {pdfs.map((pdf) => {
              const createdAt = new Date(pdf.createdAt);
              const updatedAt = new Date(pdf.updatedAt);
              const formattedDate = createdAt.toLocaleString("default", {
                day: "numeric",
                month: "long",
              });
              const updatedDate = updatedAt.toLocaleString("default", {
                day: "numeric",
                month: "long",
              });
              return (
                <BlogComps
                  key={pdf.id}
                  date={formattedDate}
                  title={pdf.name}
                  imageSrc={pdf.photo}
                  updatedDate={updatedDate}
                />
              );
            })}
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

export default Downloads;
