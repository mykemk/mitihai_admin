import React, { useEffect } from "react";
const PermisionSection = (props) => {
  let { append, permision } = props;
  useEffect(() => {
    append({});
  }, [append]);
  return <tr key={permision}>{props.children}</tr>;
};

export default React.memo(PermisionSection);
