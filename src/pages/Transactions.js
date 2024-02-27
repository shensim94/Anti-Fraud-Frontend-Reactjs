
import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import axios from 'axios';


export default function Transactions() {
    const [transactions, setTransactions] = useState([]);

    const loadTransactions = async () => {
        const response = await fetch('/api/antifraud/history');
        const transactions = await response.json();
        console.log(transactions);
        setTransactions(transactions);
    }
    useEffect(() => {
        loadTransactions();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Transaction Amount</TableCell>
                        <TableCell align="right">IPv4 Address</TableCell>
                        <TableCell align="right">Card Number</TableCell>
                        <TableCell align="right">Region</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Result</TableCell>
                        <TableCell align="right">Feedback</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {transactions.map((row) => (
                    <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">{row.ip}</TableCell>
                    <TableCell align="right">{row.number}</TableCell>
                    <TableCell align="right">{row.region}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.result}</TableCell>
                    <TableCell align="right">{row.feedback}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
        </Table>
    </TableContainer>
  );
}