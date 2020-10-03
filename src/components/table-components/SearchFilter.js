import React, { useContext, useState } from "react";
import { useAsyncDebounce } from "react-table";
import { TableContext } from "../../contexts/TableContext";

function SearchFilter({ className }) {
  const { setGlobalFilter, state } = useContext(TableContext);
  const [value, setValue] = useState(state.globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className={className}>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search..."
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </div>
  );
}
export default React.memo(SearchFilter);
