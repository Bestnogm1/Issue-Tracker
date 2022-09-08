// import React {useStrat5e} from 'react';
import { Input } from "@chakra-ui/react";
function SearchCompt({ setSearch, search }) {
  return (
    <>
      <Input
        w="10rem"
        color="green"
        placeholder="Search Assigned_To"
        _placeholder={{ opacity: 0.4, color: "inherit" }}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default SearchCompt;
