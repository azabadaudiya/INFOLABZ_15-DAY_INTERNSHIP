// src/components/Resulttble.js
import React from 'react';
import { Table } from 'react-bootstrap';
import { Passbadge, Failbadge } from './Badges';

function Resulttble() {
    const data = [
        { id: 1, name: 'John Doe', maths: 90, phy: 80, chem: 85, pass: true },
        { id: 2, name: 'Jane Smith', maths: 60, phy: 70, chem: 65, pass: true },
        { id: 3, name: 'Alice Johnson', maths: 50, phy: 45, chem: 40, pass: false },
    ];

    return (
        <div>
            <h2>Results Table</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr No.</th>
                        <th>Student Name</th>
                        <th>Maths Marks</th>
                        <th>Phy Marks</th>
                        <th>Chem Marks</th>
                        <th>Pass / Fail Badge</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.name}</td>
                            <td>{student.maths}</td>
                            <td>{student.phy}</td>
                            <td>{student.chem}</td>
                            <td>{student.pass ? <Passbadge /> : <Failbadge />}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Resulttble;
