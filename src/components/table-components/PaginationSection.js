import React, { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";

const PaginationSection = () => {
  const {
    state,
    page,
    rows,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useContext(TableContext);
  return (
    <div className="actionBtns">
      <p className="recordsDetails">
        Showing {rows.length !== 0 ? state.pageIndex * state.pageSize + 1 : 0}-
        {state.pageIndex * state.pageSize + page.length} of {rows.length}
        {rows.length > 1 ? " entries" : " entry"}
      </p>
      <div className="recordsNav">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button style={{ backgroundColor: "green", color: "white" }}>
          {state.pageIndex + 1}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationSection;
