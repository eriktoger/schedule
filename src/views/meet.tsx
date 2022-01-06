import { useState } from "react";
import Header from "../components/header";
import Employees from "../components/employees";
import Search from "../components/search";
import { SearchAndSort } from "../types";

const initialSearchAndSort: SearchAndSort = {
  name: "",
  office: "",
  nameOrder: 1,
  officeOrder: 1,
  sortField: "name",
};
const Meet = () => {
  const [searchAndSort, setSearchAndSort] = useState(initialSearchAndSort);
  return (
    <>
      <div>
        <Header />
        <Search
          searchAndSort={searchAndSort}
          setSearchAndSort={setSearchAndSort}
        />
      </div>
      <Employees searchAndSort={searchAndSort} />
    </>
  );
};

export default Meet;