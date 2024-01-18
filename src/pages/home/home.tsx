import React from "react";
import ResponsiveAppBar from "../../components/header";
import FilterForm from "../../components/filterForm";

const HomeScreen = () => {
  return (
    <div className="w-full h-full">
      <ResponsiveAppBar />
      <div className="flex w-full bg-white px-10">
        <FilterForm />
      </div>
    </div>
  );
};

export default HomeScreen;
