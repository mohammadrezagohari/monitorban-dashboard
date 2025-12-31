import { Typography, useTheme } from "@mui/material";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import Button from "../buttons/Button";
import { Icon } from "../icons/components/Icon";
import Input from "../input/Input";
import { StyledDropzone } from "./Dropzone.styles";
import { DropzoneProps } from "./IDropzone";

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
  const inputProps = getInputProps();
  console.log(inputProps);
  const label = type === "image" ? "عکس" : "فایل";
  return (
    <StyledDropzone {...getRootProps()} isDragActive={isDragActive}>
      <Input {...(inputProps as any)} id={`dropzone-input-${type}`} />
      {type === "image" ? (
        <Icon name="gallery" color={theme.palette.neutral[100]} />
      ) : (
        <Icon name="video" color={theme.palette.neutral[100]} />
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
