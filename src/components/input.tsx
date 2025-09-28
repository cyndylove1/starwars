import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export interface InputProps {
  label?: string;
  required?: boolean;
  type?: string;
  name?: string;
}

export default function Input({
  label,
  required,
  type = "text",
  name,
}: InputProps) {
  return (
    <Box sx={{ "& .MuiTextField-root": { width: "100%" } }}>
      <TextField
        required={required}
        type={type}
        name={name}
        id={`outlined-${name}`}
        label={label}
        sx={{
          "& .MuiOutlinedInput-root": {
            height: "48px",
            "& fieldset": { borderColor: "#A4A7B7" },
            "&:hover fieldset": { borderColor: "#A4A7B7" },
            "&.Mui-focused fieldset": { borderColor: "#0A74DC" },
          },
          "& .MuiInputLabel-root": {
            color: "#B0B9C8",
            fontSize: "12px",
            fontWeight: 500,
          },
          "& .MuiInputLabel-root.Mui-focused": { color: "#B0B9C8" },
          "& .MuiInputBase-input": {
            fontSize: "14px",
            color: "#0B2253",
            fontWeight: 500,
            lineHeight: "24px",
            backgroundColor: "transparent",
          },
        }}
      />
    </Box>
  );
}
