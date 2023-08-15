import React from "react";
import { Butn2 } from "./css";

const Pagination = ({ totalPost, postPerpag, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerpag); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return <Butn2 key={index} onClick={()=>setCurrentPage(page)}>{page}</Butn2>;
      })}
    </div>
  );
};

export default Pagination;
