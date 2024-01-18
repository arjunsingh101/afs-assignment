import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface InputProps {
  value: any;
  dataArray: { id: string; label: string }[];
  handleChange: (event: SelectChangeEvent) => void;
}
const BasicSelect = ({ value, dataArray, handleChange }: InputProps) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Select Search Filter
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Select Search Filter"
          onChange={handleChange}
        >
          {dataArray.map((data: any) => (
            <MenuItem value={data.id} id={data.id}>
              {data.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default BasicSelect;
