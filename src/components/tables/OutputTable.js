import React from "react";
// import { useGetData } from "../../utils/hooks/useGetData";
const OutputTable = ({ data, title }) => {
  // const { data, error, loading } = useGetData(url);
  return (
    <>
      {data.length ? (
        <div>
          <h3 className="centreTitle">{title}</h3>
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => {
                  return <td key={key}>{key}</td>;
                })}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => {
                let values = Object.values(row);
                return (
                  <tr key={index}>
                    {values.map((value, index) => {
                      return <td key={`${value}${index}`}>{value}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        "Loading..."
      )
      // ) : (
      //   error
      }
    </>
  );
};

export default OutputTable;
