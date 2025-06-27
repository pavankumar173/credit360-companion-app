import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    alert(`Uploading file: ${file?.name || 'No file selected'}`);
    // TODO: Implement API call to FastAPI backend
  };

  return (
    <form className="upload-form" onSubmit={handleUpload}>
      <input
        type="file"
        accept=".csv,.json"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
