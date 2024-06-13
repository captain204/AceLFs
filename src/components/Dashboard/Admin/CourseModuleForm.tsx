import { TextField, TextareaAutosize, InputLabel, Card } from "@mui/material";

export default function CourseModuleForm() {
  return (
    <Card className="px-5 py-3" style={{marginBottom: 40}}>
      <TextField
        id="courseName"
        name="courseName"
        label="Course name"
        color="success"
        className="mb-4"
        // value={formik.values.firstName}
        // onChange={formik.handleChange}
        // error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        // helperText={formik.touched.firstName && formik.errors.firstName}
      />
    <InputLabel>Description</InputLabel>
      <TextareaAutosize
        id="description"
        name="description"
        aria-label="Description"
        maxRows={3}
        minRows={3}
        className="border"
      />
    </Card>
  );
}
