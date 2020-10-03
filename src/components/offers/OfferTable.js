import React from "react";
import {
  offersTableColumns,
  offersSampleData,
  offersTableActions,
} from "contexts/OffersContext";
import ActionTable from "components/tables/ActionTable";

const OfferTable = () => {
  return (
    <ActionTable
      columns={offersTableColumns}
      actions={offersTableActions}
      data={offersSampleData}
    />
  );
};

export default React.memo(OfferTable);
