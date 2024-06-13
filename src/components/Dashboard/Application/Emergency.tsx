import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


export default function Emergency() {
  const [name, setName] = React.useState("Cat in the Hat");
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [maritalStatus, setMaritalStatus] = React.useState("");
  const [gender, setGender] = React.useState('');
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };


  return (
    <>
      <Card raised={true} sx={{ marginTop: "30px" }}>
        <CardContent>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-controlled"
                label="First Name"
                color="success"
                // value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
              <TextField
                id="outlined-controlled"
                label="Last Name"
                color="success"
                // value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />

              <TextField
                id="outlined-controlled"
                label="Email"
                color="success"
                // value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
            </Box>
          </div>
        

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-controlled"
                label="Contact Address"
                color="success"
                // value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
              <TextField
                id="outlined-controlled"
                label="Phone Number"
                color="success"
                // value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />

              <TextField
                id="outlined-controlled"
                label="Student"
                color="success"
                // value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
              />
            </Box>
          </div>

     
        </CardContent>
      </Card>
    </>
  );
}
