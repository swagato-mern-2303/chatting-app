import { getStorage, ref, uploadString } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useState, createRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { ToastContainer, Zoom, toast } from "react-toastify";

function ProfileImgUpload() {
  const [image, setImage] = useState();
  const cropperRef = createRef();

  const storage = getStorage();
  const storageRef = ref(storage, "user-profile-img");

  const handleChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      const message = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      uploadString(storageRef, message, "data_url").then(() => {
        setTimeout(() => navigate("/"), 3500);
        toast.success("Image uploaded successfully");
      });
    }
  };

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-primary-accent/20">
      <ToastContainer
        position="top-center"
        autoClose={2500}
        transition={Zoom}
      />
      <form
        className="flex max-w-[500px] flex-col rounded-md bg-white p-8 shadow-2xl sm:w-auto"
        noValidate
      >
        <h1 className="mb-12 text-[32px] font-semibold text-primary-color-400">
          Upload Image
        </h1>
        <input
          className="rounded-[8.6px] border-2 px-[27px] py-[20px] text-[20.641px] font-semibold text-primary-color-400"
          type="file"
          onChange={handleChange}
        />
        {image && (
          <Cropper
            ref={cropperRef}
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            aspectRatio={1}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            guides={true}
          />
        )}

        <div className="mt-16 flex flex-col gap-3 text-lg font-semibold sm:flex-row">
          <button
            className="rounded-lg bg-primary-accent p-4 text-white duration-200 hover:bg-blue-800"
            type="button"
            onClick={getCropData}
          >
            Upload Image
          </button>
          <button
            className="rounded-lg bg-red-500 p-4 text-white duration-200 hover:bg-red-800"
            type="button"
            onClick={() => navigate("/")}
          >
            Back to Home Page
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileImgUpload;
