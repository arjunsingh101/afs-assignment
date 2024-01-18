import React, { ChangeEvent, useState } from "react";
import BasicSelect from "./selectInput";
import { Button, SelectChangeEvent, TextField } from "@mui/material";
import MuiTable from "./table";
import axios from "axios";
interface UserData {
  id: number;
  name: string;
  age: number;
  city: string;
}
const FilterForm = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("age");
  const [filterValue, setFilterValue] = useState("");
  const [filterError, setFilterError] = useState<any>(undefined);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  const dataArray = [
    { id: "name", label: "Name" },
    { id: "age", label: "Age" },
    { id: "city", label: "City" },
  ];

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get<UserData[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      const formattedData = response.data.map((user: any) => ({
        id: user.id,
        name: user.name,
        age: Math.floor(Math.random() * 100 + 1),
        city: user.address.city,
      }));
      setData(formattedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
    if (e.target.value === "" || e.target.value === undefined) {
      setFilterError("PLease enter any value");
    } else {
      setFilterError("");
    }
  };
  return (
    <div className="w-full h-full">
      <form className="flex ">
        <div className=" flex flex-col gap-6 w-[15%]">
          <div className="mt-10">
            <BasicSelect
              value={value}
              dataArray={dataArray}
              handleChange={handleChange}
            />
          </div>
          <div>
            <div>
              <p>Enter Value Filter:</p>
            </div>
            <div>
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                value={filterValue}
                onChange={handleFilterChange}
                helperText={filterError}
                error={!!filterError}
              />
            </div>
          </div>
          <div>
            <Button
              variant="outlined"
              sx={{ width: "100px", height: "40px" }}
              onClick={fetchData}
              disabled={filterValue === "" || filterValue === undefined}
            >
              Search
            </Button>
          </div>
        </div>
      </form>
      <div className="mt-6">
        <MuiTable data={data} loading={loading} />
      </div>
    </div>
  );
};

export default FilterForm;
