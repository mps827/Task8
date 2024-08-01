import classes from "./style/ImageUploader.module.scss";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useState } from "react";
import { Camera } from "iconsax-react";
import { DocumentDownload } from "iconsax-react";
import { useTranslation } from "@/providers/locale-provider";
import Image from "next/image";
import BaseButton from "../base/BaseButton";
interface MyComponent {
  title: string;
}
const ImageUploader = (props: MyComponent) => {
  const { t9n } = useTranslation();
  const [images, setImages] = useState([]);
  const maxNumber = 69;
  const uploaderButtonIcon = () => {
    return <DocumentDownload />;
  };
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className={classes.uploaderContainer}>
            <div className={" flex flex-col w-full items-end gap-7 "}>
              <div className={" flex flex-row w-full items-start gap-1.5  "}>
                <Camera className={" text-Blue-500 " + classes.headerIcon} />
                <span className={classes.headerTitle}>{props.title}</span>
              </div>
              <div className={classes.uploaderBox}>
                <div className={classes.uploaderBody}>
                  <span>{t9n.uploader_title}</span>
                </div>
                <div className={" flex w-full items-center justify-center "}>
                  <BaseButton
                    title={t9n.upload}
                    RightIcon={uploaderButtonIcon()}
                    onClickHandler={onImageUpload}
                    square={true}
                    color="primary"
                  />
                </div>
              </div>
            </div>
            <div
              className={
                " flex flex-row w-full items-center justify-end gap-3 "
              }
            >
              {imageList.map((image, index) => (
                <img
                  key={index}
                  className={
                    " border border-2 rounded-xl border-dashed border-black"
                  }
                  src={image.dataURL}
                  alt=""
                  width="60"
                />
              ))}
            </div>
          </div>
          //   <div className="upload__image-wrapper">
          //     <button
          //       style={isDragging ? { color: "red" } : undefined}
          //       onClick={onImageUpload}
          //       {...dragProps}
          //     >
          //       Click or Drop here
          //     </button>
          //     &nbsp;
          //     <button onClick={onImageRemoveAll}>Remove all images</button>
          //     {imageList.map((image, index) => (
          //       <div key={index} className="image-item">
          //         <img src={image.dataURL} alt="" width="100" />
          //         <div className="image-item__btn-wrapper">
          //           <button onClick={() => onImageUpdate(index)}>Update</button>
          //           <button onClick={() => onImageRemove(index)}>Remove</button>
          //         </div>
          //       </div>
          //     ))}
          //   </div>
        )}
      </ImageUploading>
    </div>
  );
};
export default ImageUploader;
