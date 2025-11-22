import { ChangeEvent, useRef, useState } from "react";
import { Typography, useTheme } from "@mui/material";

import Button from "../buttons/Button";
import { HouseIcon } from "src/presentation/assets/icons/HouseIcon";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { FileUploadProps } from "./IFileUpload";
import { IconButtonWithBorder } from "../IconButtonWithBorder";
import {
  ButtonsContainer,
  ImageContainer,
  StyledFileUpload,
  VisuallHiddenInput,
} from "./FileUpload.styles";
import Avatar from "../avatar/Avatar";

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
          <HouseIcon color={theme.palette.primary[200]} />
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

        <IconButtonWithBorder
          iconColor={theme.palette.error.main}
          onClick={handleRemoveFile}
        >
          <DeleteIcon size={16} />
        </IconButtonWithBorder>
      </ButtonsContainer>
    </StyledFileUpload>
  );
}

export default FileUpload;
