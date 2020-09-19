import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


export default function SimpleTable({rows}) {

  return (
    <TableContainer component={Paper}>
      <Table className='table' aria-label="simple table">
        <TableHead className='tableHead'>
          <TableRow>
            <TableCell className='header'>Name of product</TableCell>
            <TableCell align="right" className='header'>Price</TableCell>
            <TableCell align="right" className='header'>Label</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Name}>
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.Label}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}