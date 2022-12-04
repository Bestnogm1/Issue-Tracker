import { Icon, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FcAddImage } from "react-icons/fc";
import { FcRemoveImage } from "react-icons/fc";

const AddImages = ({ setFileForImg, fileForImg }) => {
  const [previewImage, setPreviewImage] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (fileForImg) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreviewImage(fileReader.result);
      };
      fileReader.readAsDataURL(fileForImg);
    } else {
      setPreviewImage(null);
    }
  }, [fileForImg]);

  return (
    <>
      {previewImage ? (
        <>
          <Image
            boxSize="150px"
            objectFit="cover"
            src={previewImage}
            alt="preview img"
          />
          <Icon
            as={FcRemoveImage}
            color="white"
            aria-label="Call Sage"
            fontSize="35px"
            onClick={() => setFileForImg(null)}
          />
        </>
      ) : (
        <>
          <Icon
            as={FcAddImage}
            color="white"
            aria-label="Call Sage"
            fontSize="85px"
            onClick={(e) => {
              e.preventDefault();
              fileInputRef.current.click();
            }}
          />
        </>
      )}
      <input
        ref={fileInputRef}
        onChange={(e) => setFileForImg(e.target.files[0])}
        style={{ display: "none" }}
        type="file"
        accept="image/*"
      />
    </>
  );
};

export default AddImages;
