import React from "react";

export default function EditIcon({ ...attr }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-8 mt-1 hover:text-blue-500 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...attr}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  );
}
