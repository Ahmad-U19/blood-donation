import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Prayer = () => {
    const [prayerData, setPrayerData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Prayer API";
        axios.get('https://api.aladhan.com/v1/calendar/2026/1?latitude=51.508515&longitude=-0.1254872&method=2')
            .then((response) => {
                setPrayerData(response.data.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">
                Prayer Times for January 2026
            </h2>

            <table className="table table-bordered text-center">
                <thead className="table-dark">
                    <tr>
                        <th>Date</th>
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
                            <td>{day.timings.Fajr}</td>
                            <td>{day.timings.Dhuhr}</td>
                            <td>{day.timings.Asr}</td>
                            <td>{day.timings.Maghrib}</td>
                            <td>{day.timings.Isha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
