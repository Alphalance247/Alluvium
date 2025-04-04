import { useState } from "react";
import styles from "../../styles/Knowledge-Zone/kz.module.scss";
import Image from "next/image";
import { FiUpload } from "react-icons/fi";
// import { UploadCloud } from "lucide-react"; // or any upload icon

const ImageUpload = () => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 5 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      alert("File must be less than 5MB");
    }
  };

  return (
    <div>
      <label> Upload Image</label>
      <div className={styles.imageUpload}>
        <label htmlFor="file-upload" className={styles.countrySelect}>
          {preview ? (
            <Image
              src={preview}
              alt="preview"
              className="object-cover object-fit-cover m-auto object-fit-contain"
              width={300}
              height={300}
              style={{ borderRadius: "10px", margin: "auto" }}
            />
          ) : (
            <div className={styles.upload_here__style}>
              <FiUpload
                size={18}
                className=" text-center mx-auto d-flex flex-column justify-content-center mb-4"
              />
              <p className={styles.upload__here}>
                Drop here to attach or{" "}
                <span style={{ color: "#E37915" }}>upload</span>{" "}
              </p>
              <p className={styles.size}>Max size: 5MB</p>
            </div>
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="d-none"
            // style={{ display: "none" }}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageUpload;
