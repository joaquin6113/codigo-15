import React, { useEffect, useState } from "react";
import { CloudArrowDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import "./drag-drop.css";
import { create, update } from "../../services";
import { useParams } from "react-router-dom";

export default function DragNdrop({
  onFilesSelected,
  width,
  height,
}) {
    const { id } = useParams()

  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const newFiles = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length > 0) {
      const newFiles = Array.from(droppedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  useEffect(() => {
    onFilesSelected(files);
  }, [files, onFilesSelected]);

  const sendFiles = async (file) =>{
    console.log(file.buffer)
    const { data } = await create({files: {file: file}}, "tools/upload")
    await update(id, {url: data.location}, "products")
  }  

  return (
    <section className="drag-drop" style={{ width: width, height: height }}>
      <div
        className={`document-uploader ${
          files.length > 0 ? "upload-box active" : "upload-box"
        }`}
        onDrop={handleDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <>
          <div className="upload-info">
            <div>
              <p>Drag and drop your files here</p>
              <p>
                Limit 15MB per file. Supported file: .JPG
              </p>
            </div>
          </div>
          <CloudArrowDownIcon width="45px"/>
          <input
            type="file"
            hidden
            id="browse"
            onChange={handleFileChange}
            accept=".jpg"
            multiple
          />
          {files.length === 0 && 
          <label htmlFor="browse" className="browse-btn">
            Browse files
          </label>}
        </>

        {files.length > 0 && (
          <div className="file-list">
            <div className="file-list__container">
              {files.map((file, index) => (
                <div className="file-item" key={index}>
                  <div className="file-info">
                    <p>{file.name}</p>
                    <XMarkIcon onClick={() => handleRemoveFile(index)} className="bg-red-600 text-white rounded-full w-6 cursor-pointer float-right hover:scale-125 transition duration-300 ml-10"/>
                  </div>
                  <div className="file-actions">
                    <button onClick={() => handleRemoveFile(index)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {files.length > 0 && files.length < 2 && (
          <div className="success-file">
            <p onClick={() => sendFiles(files)}>Seleccionar imagen</p>
          </div>
        )}
      </div>
    </section>
  );
};