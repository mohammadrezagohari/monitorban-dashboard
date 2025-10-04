import { Box } from "@mui/material";
import { createContext, ReactNode, useContext } from "react";
import {
  StyledBody,
  StyledTable,
  StyledTableHeader,
  StyledTableRow,
} from "./Table.styles";

const TableContext = createContext({ columns: "" });

function Table({
  columns,
  children,
}: {
  columns: string;
  children: ReactNode;
}) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledTableHeader role="row" columns={columns} as="header">
      {children}
    </StyledTableHeader>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <StyledTableRow role="row" columns={columns}>
      {children}
    </StyledTableRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return;
  // <Empty>No cabins available</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
