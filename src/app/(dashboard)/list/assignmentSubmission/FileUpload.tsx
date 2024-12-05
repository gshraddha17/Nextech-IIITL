// components/FileUpload.tsx
"use client";

import React, { useState } from "react";

interface FileUploadProps {
  assignmentId: number;
}

const FileUpload: React.FC<FileUploadProps> = ({ assignmentId}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      // Handle the PDF upload logic (e.g., send it to the server or store it)
      console.log("Uploading file for assignment ID:", assignmentId);

      // Example: Remove the assignment after uploading
      await fetch(`/api/remove-assignment?id=${assignmentId}`, { method: "POST" });

      // Mark the assignment as submitted and notify the parent component
      setIsSubmitted(true); // This will call the parent handler
    }
  };

  return (
    <div
      style={{
        backgroundColor: isSubmitted ? "green" : "transparent", // Change the background color for the whole row
        transition: "background-color 0.3s ease", // Smooth transition for color change
        padding: "10px", // You can add padding if needed
      }}
    >
      <input
        type="file"
        accept=".pdf"
        onChange={handleUpload}
        disabled={isSubmitted}  // Disable upload button once submitted
      />
    </div>
  );
};

export default FileUpload;
