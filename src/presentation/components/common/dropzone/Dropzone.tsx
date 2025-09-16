import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Typography, useTheme } from "@mui/material";

import Input from "../input/Input";
import Button from "../buttons/Button";
import { VideoIcon } from "src/presentation/assets/icons/VideoIcon";
import { GalleryIcon } from "src/presentation/assets/icons/GalleryIcon";
import { DropzoneProps } from "./IDropzone";
import { StyledDropzone } from "./Dropzone.styles";

function Dropzone({ type }: DropzoneProps) {
  const theme = useTheme();

  const onDrop = useCallback((accepteFiles: File[]) => {
    console.log("accepteFiles => ", accepteFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
  });
  const label = type === "image" ? "عکس" : "فایل";
  return (
    <StyledDropzone {...getRootProps()} isDragActive={isDragActive}>
      <Input {...getInputProps()} />
      {type === "image" ? (
        <GalleryIcon size={24} color={theme.palette.neutral[100]} />
      ) : (
        <VideoIcon size={24} color={theme.palette.neutral[100]} />
      )}
      {isDragActive ? (
        <Typography variant="body1" color="neutral.200">
          اینجا رها کنید ...
        </Typography>
      ) : (
        <>
          <Typography variant="body1" color="neutral.200">
            {label} را انتخاب کنید و یا بکشید و اینجا رها کنید
          </Typography>
          <Button
            variant="outlined"
            size="small"
            colorType="secondary"
            onClick={open}
          >
            افزودن {label}
          </Button>
        </>
      )}
    </StyledDropzone>
  );
}

export default Dropzone;
