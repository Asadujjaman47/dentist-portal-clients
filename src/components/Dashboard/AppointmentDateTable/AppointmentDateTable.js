import React from 'react';

const AppointmentDateTable = ({ appointments }) => {
    <table className='table table-borderless'>
        <thead>
            <tr>
                <th className='text-secodary text-left' scope='col'>All Patients</th>
                <th className='text-secodary' scope='col'>Name</th>
                <th className='text-secodary' scope='col'>Gender</th>
                <th className='text-secodary' scope='col'>Age</th>
                <th className='text-secodary' scope='col'>Weight</th>
                <th className='text-secodary' scope='col'>Phone</th>
                <th className='text-secodary' scope='col'>Email</th>
            </tr>
        </thead>
        <tbody>
            {
                appointments.map((appointment, index) =>
                    <tr>
                        <td>{index + 1}</td>
                        <td>{appointment.name}</td>
                        <td>{appointment.gender}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.weight}</td>
                        <td>{appointment.phone}</td>
                        <td>{appointment.email}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
};

export default AppointmentDateTable;