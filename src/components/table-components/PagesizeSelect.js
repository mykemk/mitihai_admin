import React, { useContext } from "react";
import { TableContext } from "../../contexts/TableContext";

const PagesizeSelect = () => {
  const { state, setPageSize } = useContext(TableContext);
  return (
    <div className="pageSizeSelect">
      <select
        value={state.pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}>
        {[5, 10, 50, 100].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.memo(PagesizeSelect);
