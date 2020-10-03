import React from "react";

import ActionTable from "components/tables/ActionTable";
import {
  faqsActions,
  faqsTableColumns,
  faqsSampleData,
} from "../../contexts/FaqsContext";

const FaqsTable = () => {
  return (
    <ActionTable
      columns={faqsTableColumns}
      actions={faqsActions}
      data={faqsSampleData}
    />
  );
};

export default FaqsTable;
