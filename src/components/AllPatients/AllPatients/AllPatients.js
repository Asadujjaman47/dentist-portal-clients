import React, { useEffect, useState } from 'react';
import AppointmentDateTable from '../../Dashboard/AppointmentDateTable/AppointmentDateTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/dashboard/allpatients')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div className='container-fluid row'>
            {/* <Sidebar></Sidebar> */}
            <div className="col-md-10 p-4 pr-5s" style={{ position: "align-right" }}>
                <h5 className='text-brand'>All Patients</h5>
                <AppointmentDateTable appointments={appointments}></AppointmentDateTable>
            </div>
        </div>
    );
};

export default AllPatients;