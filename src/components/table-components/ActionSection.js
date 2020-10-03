import React, { useContext } from "react";
import { Icon } from "@blueprintjs/core";
import { Link } from "react-router-dom";
import { TableContext } from "utils/component-utils/createManagePage";

const ActionSection = ({ actions }) => {
  let { name } = useContext(TableContext);
  return (
    <td>
      {actions.delete && (
        <button className="table-action-btns">
          <Icon icon="trash" iconSize={Icon.SIZE_STANDARD} />
        </button>
      )}
      {actions.update && (
        <button className="table-action-btns">
          <Link to={`/${name}s/update`}>
            <Icon icon="edit" iconSize={Icon.SIZE_STANDARD} />
          </Link>
        </button>
      )}
      {actions.print && (
        <button className="table-action-btns">
          <Icon icon="print" iconSize={Icon.SIZE_STANDARD} />
        </button>
      )}
      {actions.stopSales && (
        <button className="table-action-btns primaryAction">stop sales</button>
      )}
      {actions.approve && (
        <button className="table-action-btns primaryAction">approve</button>
      )}
      {actions.decline && (
        <button className="table-action-btns primaryAction">decline</button>
      )}
      {actions.approvePayment && (
        <button className="table-action-btns primaryAction">
          Confirm payment
        </button>
      )}
      {actions.eventsActions && (
        <>
          <button type="button" className="table-action-btns primaryAction">
            <Link to="/pastevents/update">update</Link>
          </button>
          <button type="button" className="table-action-btns primaryAction">
            <Link to="/pastevents/photos">photos</Link>
          </button>
        </>
      )}
    </td>
  );
};

export default React.memo(ActionSection);
