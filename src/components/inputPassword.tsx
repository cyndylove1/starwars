import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

interface InputProps {
  label?: string;
}

export default function InputPassword({ label }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Password validation 
  const validatePassword = (value: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\[\]:;"'<>,.?/\\|`~]).{8,}$/;
    if (!regex.test(value)) {
      setError(
        "Password must be 8+ characters, include upper, lower, number, and special character."
      );
    } else {
      setError("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  return (
    <Box sx={{ "& .MuiTextField-root": { width: "100%" } }}>
      <TextField
        required
        id="outlined-password"
        type={showPassword ? "text" : "password"}
        label={label}
        value={password}
        onChange={handleChange}
        error={!!error}
        helperText={error || ""}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={togglePasswordVisibility}
                edge="end"
                sx={{
                  color: "#888D93",
                }}
              >
                {showPassword ? <FiEyeOff size={15} /> : <FiEye size={15} />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            height: "48px",
            pr: "20px",
            "& fieldset": {
              borderColor: "#A4A7B7",
            },
            "&:hover fieldset": {
              borderColor: "#A4A7B7",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#0A74DC",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#B0B9C8",
            fontSize: "12px",
            fontWeight: 500,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#B0B9C8",
          },
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
