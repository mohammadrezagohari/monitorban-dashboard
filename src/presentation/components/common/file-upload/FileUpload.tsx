import { Typography, useTheme } from "@mui/material";
import { ChangeEvent, useRef, useState } from "react";

import Avatar from "../avatar/Avatar";
import Button from "../buttons/Button";
import { Icon } from "../icons/components/Icon";
import {
  ButtonsContainer,
  ImageContainer,
  StyledFileUpload,
  VisuallHiddenInput,
} from "./FileUpload.styles";
import { FileUploadProps } from "./IFileUpload";

function FileUpload({
  onFileSelect,
  accept = "*/*",
  maxSize = 5 * 1024 * 1024,
  label,
  initialImage,
}: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const theme = useTheme();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setError("");

    if (!files || files.length === 0) {
      setSelectedFile(null);
      onFileSelect(null);
      return;
    }

    const file = files[0];

    if (file.size > maxSize) {
      // Condition for file size
      console.log(file.size);
    }

    setSelectedFile(file);
    onFileSelect(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setError("");
    onFileSelect(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <StyledFileUpload>
      <ImageContainer>
        <Avatar src={selectedFile ? URL.createObjectURL(selectedFile) : ""}>
          {/* @ts-ignore */}
          <Icon name="house" color={theme.palette.primary[200]} />
        </Avatar>

        <Typography variant="body2" color="neutral.200">
          {label}
        </Typography>
      </ImageContainer>

      <ButtonsContainer>
        <Button
          component="label"
          role={undefined}
          variant="outlined"
          size="xxsmall"
          colorType="primary"
        >
          بارگذاری عکس
          <VisuallHiddenInput
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept={accept}
          />
        </Button>

        {/* <IconButtonWithBorder
          iconColor={theme.palette.error.main}
          onClick={handleRemoveFile}
        >
          <DeleteIcon size={16} />
        </IconButtonWithBorder> */}
      </ButtonsContainer>
    </StyledFileUpload>
  );
}

export default FileUpload;
