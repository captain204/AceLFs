import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import { useDropzone } from "react-dropzone";
import DeleteIcon from "@mui/icons-material/Delete";

interface FileUploadProps {
  fieldName: string;
  accept: string;
  formik: any;
  required?: boolean;
}

const formatFieldName = (fieldName: string) => {
  return fieldName.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).toUpperCase();
};

const FileUploadUpdate: React.FC<FileUploadProps> = ({
  fieldName,
  accept,
  formik,
  required = false,
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
        Drag &#39;n&#39; drop <span style={{ color: '#0AB99D' }}>{formatFieldName(fieldName)}</span> file here, or click to select file {required && <span style={{ color: 'red' }}>(required)</span>}
        </Typography>
      </Box>
      {formik.touched[fieldName] && formik.errors[fieldName] && (
        <Typography variant="body2" sx={{ color: "red", mt: 1 }}>
          {formik.errors[fieldName]}
        </Typography>
      )}
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

export default FileUploadUpdate;