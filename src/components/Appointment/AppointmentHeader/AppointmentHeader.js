import React from 'react';
import chair from '../../../images/chair.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';

const AppointmentHeader = ({ handleDateChange }) => {

    return (
        <div>
            <main style={{ height: '600px' }} className='row d-flex align-items-center'>
                <div className="col-md-4 offset-md-1">
                    <h1 style={{ color: '#3A4256' }}>Appointment</h1>

                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />

                    <div className='mt-5 ml-5'>
                        <Link to="/dashboard/appointment">
                            <button className='btn btn-primary'>
                                GET APPOINTMENT BY DATE
                            </button>
                        </Link>
                    </div>


                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid" />
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;