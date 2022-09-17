// import React {useStrat5e} from 'react';
import { Input } from "@chakra-ui/react";
import style from "./SearchCompt.module.css";
function SearchCompt({ setSearch, search }) {
  return (
    <>
      <Input
        className={style.SearchCompt}
        w="20rem"
        color="green"
        placeholder="Search"
        _placeholder={{ opacity: 0.9, color: "black" }}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
}

export default SearchCompt;
