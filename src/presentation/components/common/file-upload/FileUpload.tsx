import { ChangeEvent, useRef, useState } from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";

import Button from "../buttons/Button";
import { HouseIcon } from "src/presentation/assets/icons/HouseIcon";
import { DeleteIcon } from "src/presentation/assets/icons/DeleteIcon";
import { IconWrapper } from "src/presentation/assets/icons/IconWrapper.style";
import { FileUploadProps } from "./IFileUpload";
import { VisuallHiddenInput } from "./FileUpload.styles";
import { IconButtonWithBorder } from "../IconButtonWithBorder";

function FileUpload({
  onFileSelect,
  accept = "*/*",
  maxSize = 5 * 1024 * 1024,
  label,
}: // disabled = false,
FileUploadProps) {
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
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        mr: 1.25,
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          width: 90,
        }}
      >
        {selectedFile ? (
          <Avatar
            src={URL.createObjectURL(selectedFile)}
            sx={{ width: 48, height: 48 }}
          />
        ) : (
          <IconWrapper>
            <HouseIcon color="#C9A8E5" />
          </IconWrapper>
        )}
        <Typography variant="body2" color="neutral.200">
          {label}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* <label htmlFor="sensorIcon"> */}
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
        {/* </label> */}
        <IconButtonWithBorder
          color={theme.palette.error.main}
          onClick={handleRemoveFile}
        >
          <DeleteIcon size={16} />
        </IconButtonWithBorder>
      </Box>
    </Box>
  );
}

export default FileUpload;
