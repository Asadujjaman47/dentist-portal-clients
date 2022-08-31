import React, { useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const conatinerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}


const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);


    const handleDateChange = date => {
        setSelectedDate(date);
        console.log(date);

        // fetch('http://localhost:5000/appointmentByDate', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ date })
        // })
        //     .then(res => res.json())
        //     .then(data => { setAppointments(data) });
    }


    useEffect(() => {
        fetch('http://localhost:5000/appointmentByDate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => { setAppointments(data) });
    }, [selectedDate])


    return (
        <section>
            <div style={conatinerStyle} className="div container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;