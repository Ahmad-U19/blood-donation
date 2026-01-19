import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Prayer = () => {
    const [prayerData, setPrayerData] = useState([]);
    const [loading, setLoading] = useState(true);

    const date = new Date();
    const currentYear = date.getFullYear();
    const currentMonth = date.getMonth() + 1;
    const monthName = date.toLocaleString('default', { month: 'long' });

    useEffect(() => {
        document.title = "Prayer API";
        axios.get(`https://api.aladhan.com/v1/calendar/${currentYear}/${currentMonth}?latitude=51.508515&longitude=-0.1254872&method=2`)
            .then((response) => {
                setPrayerData(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching prayer data:", error);
                setLoading(false);
            });
    }, [currentYear, currentMonth]);

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">
                Prayer Times for {monthName} {currentYear}
            </h2>

            <div className="table-responsive">
                <table className="table table-bordered text-center table-hover table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Date</th>
                            <th>Islamic Date</th>
                            <th>Fajr</th>
                            <th>Dhuhr</th>
                            <th>Asr</th>
                            <th>Maghrib</th>
                            <th>Isha</th>
                        </tr>
                    </thead>

                    <tbody>
                        {prayerData.map((day, index) => (
                            <tr key={index}>
                                <td>{day.date.readable}</td>
                                <td>{day.date.hijri.day} {day.date.hijri.month.ar}</td>
                                <td>{day.timings.Fajr.split(' ')[0]}</td>
                                <td>{day.timings.Dhuhr.split(' ')[0]}</td>
                                <td>{day.timings.Asr.split(' ')[0]}</td>
                                <td>{day.timings.Maghrib.split(' ')[0]}</td>
                                <td>{day.timings.Isha.split(' ')[0]}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
