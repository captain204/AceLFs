import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import { useDropzone } from "react-dropzone";
import DeleteIcon from "@mui/icons-material/Delete";

interface FileUploadProps {
  fieldName: string;
  accept: string;
  formik: any;
}

const FileUpload: React.FC<FileUploadProps> = ({
  fieldName,
  accept,
  formik,
}) => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      formik.setFieldValue(fieldName, acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  const handleRemoveFile = () => {
    formik.setFieldValue(fieldName, null);
  };

  return (
    <Paper variant="outlined" sx={{ p: 2, textAlign: "center" }}>
      <Box
        {...getRootProps({ className: "dropzone" })}
        sx={{
          p: 2,
          border: "2px dashed #0AB99D",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        <input {...getInputProps()} />
        <Typography variant="body1">
          Drag 'n' drop {fieldName} file here, or click to select file
        </Typography>
      </Box>
      {formik.touched[fieldName] && formik.errors[fieldName] ? (
        <Typography variant="body2" sx={{ color: "red", mt: 1 }}>
          {formik.errors[fieldName]}
        </Typography>
      ) : null}
      {formik.values[fieldName] && (
        <Box
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="body2">
            {formik.values[fieldName].name}
          </Typography>
          <IconButton
            aria-label="delete"
            onClick={handleRemoveFile}
            sx={{ color: "red" }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
    </Paper>
  );
};

export default FileUpload;

