import React from "react";
import { useTable } from "react-table";
import Popup from "reactjs-popup";

// function handleClick(data, callBack){
//   console.log(data);
//   <Popup trigger={callBack} modal>
//     <span>Content</span>
//   </Popup>
// }

function Table({ columns, data }) {
  
  const {
    getTableProps, 
    getTableBodyProps,
    headerGroups, 
    rows, 
    prepareRow 
  } = useTable({
    columns,
    data
  });

//   const styles = {
//     table: {
//         borderCollapse: "collapse",
//         width: "100%"
//     },
//     thead: {
//         border: "1px solid #ddd",
//         padding: "8px"
//     },
//     td: {
//         border: "1px solid #ddd",
//         padding: "8px"
//     },
//     tr: nth-child(even){ backgroundColor: "#f2f2f2"},
//   };

  return (
    <table {...getTableProps()}>
      <thead >
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} onClick={() => console.log(row.original)}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;