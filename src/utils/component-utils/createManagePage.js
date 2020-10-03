import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "app/MainSection";

export const TableContext = React.createContext(null);
const TableProvider = TableContext.Provider;

const createManagePage = (
  Managetable,
  name,
  hasAddButton = true,
  isProductPage = false,
  isStockPage = false,
  isEventsPage = false,
) => {
  const Managepage = () => {
    const { setAction, setSection } = useContext(NavigationContext);

    useEffect(() => {
      setSection(`${name}s`);
      setAction("Manage");
    }, [setSection, setAction]);
    return (
      <div>
        <div className="manageHeader">
          {hasAddButton && (
            <button className="managementAction">
              <Link to={`/${name}s/create`}>
                {isStockPage ? `Update ${name}` : `Add ${name}`}
              </Link>
            </button>
          )}
          {isProductPage && (
            <button className="managementAction">
              <Link to="/stocks">Manage Stock</Link>
            </button>
          )}
          {isEventsPage && (
            <button className="managementAction">
              <Link to="/pastevents">Past Events</Link>
            </button>
          )}
        </div>
        <TableProvider value={{ name: name }}>
          <Managetable />
        </TableProvider>
      </div>
    );
  };
  return Managepage;
};
export default createManagePage;
