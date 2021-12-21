import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export default function TimingTable({
    rows,
    onEditRow,
    onDeleteRow,
}) {
    if (Array.isArray(rows) && rows.length < 1) {
        return (
            <div>
                No data to display
            </div>
        );
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={4} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.project}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.project}
                            </TableCell>
                            <TableCell align="right">
                                {`${row.timings.hours}:${row.timings.mins}:${row.timings.seconds}`}
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => { onEditRow(row); }}>
                                    Resume
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => { onDeleteRow(row); }}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
