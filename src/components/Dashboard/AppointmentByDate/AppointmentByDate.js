import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({ appointments }) => {
    console.log(appointments);
    return (
        <div>
            <h2 className='text-brand text-center'>Appointment</h2>
            {
                appointments.length
                    // ? appointments.map(app => <li key={app._id}>{app.name}</li>)
                    ? <AppointmentShortList appointments={appointments}></AppointmentShortList>
                    : <div className="p-5">
                        <h4 className='lead text-center'>No Appointments</h4>
                    </div>
            }
        </div>
    );
};

export default AppointmentByDate;