import React from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Dashboard = () => {
    const history = useHistory();
    const token = localStorage.getItem('token');
    if (!token) {
        // Redirect to Home page if not logged in
        history.push('/');
        return null;
    }

    const user = JSON.parse(localStorage.getItem('user'));

    const tableData = [
        { serialNumber: 1, name: 'Roman Reigns', dateJoined: '2022-01-01', role: 'Admin', status: 'Active' },
        { serialNumber: 2, name: 'Ratan Tat', dateJoined: '2022-02-15', role: 'Moderator', status: 'Suspended' },
        { serialNumber: 3, name: 'John Cena', dateJoined: '2022-03-20', role: 'Publisher', status: 'Inactive' },
        { serialNumber: 4, name: 'Bob Davis', dateJoined: '2022-04-10', role: 'Admin', status: 'Active' },
        { serialNumber: 5, name: 'Eve Gomez', dateJoined: '2022-05-05', role: 'Moderator', status: 'Active' },
    ];

    console.log("Dashboard component renders");

    return (
        <div className="text-center mt-5">

            <Table striped bordered hover className="mt-4">
                <thead>
                    <tr>
                        <th>Serial Number</th>
                        <th>Name</th>
                        <th>Date Joined</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row) => (
                        <tr key={row.serialNumber}>
                            <td>{row.serialNumber}</td>
                            <td>{row.name}</td>
                            <td>{row.dateJoined}</td>
                            <td>{row.role}</td>
                            <td>{row.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Dashboard;
