import React from "react";

export interface AlertProps {
  type: "success" | "danger";
  text: string;
  show: boolean; // Include show property
}

const Alert: React.FC<AlertProps> = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div
        className={`p-2 ${
          type === "danger" ? "bg-red-800" : "bg-blue-800"
        } items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`}
        role="alert"
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-blue-500"
          } uppercase px-2 py-1 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className="mr-2 text-left">{text}</p>
      </div>
    </div>
  );
};

export default Alert;
