import React, { memo } from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { useTableFilterSettings } from "../../utils/hooks/useFilterSettings";
import SearchFilter from "components/table-components/SearchFilter";
import { TableContextProvider } from "../../contexts/TableContext";
import ActionTableHead from "components/table-components/ActionTableHead";
import ActionTablebody from "components/table-components/ActionTablebody";
import PaginationSection from "components/table-components/PaginationSection";
import PagesizeSelect from "components/table-components/PagesizeSelect";

const ActionTable = ({ columns, data, state, actions }) => {
  const { defaultColumn } = useTableFilterSettings();
  const tableInstance = useTable(
    { columns, data, defaultColumn, initialState: { pageIndex: 0 } },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  );
  const { getTableProps } = tableInstance;
  return (
    <div className="tableContainer">
      <TableContextProvider value={tableInstance}>
        <SearchFilter className="tableSearch" />
        <PagesizeSelect />
        <table {...getTableProps}>
          <ActionTableHead />
          <ActionTablebody actions={actions} />
        </table>
        <PaginationSection />
      </TableContextProvider>
    </div>
  );
};

export default memo(ActionTable);
