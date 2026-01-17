import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { bloodTypes } from '../data/bloodTypes';

export const BloodDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [blood, setBlood] = useState(null);

    useEffect(() => {
        const foundBlood = bloodTypes.find(b => b.id === parseInt(id));
        setBlood(foundBlood);
    }, [id]);

    useEffect(() => {
        if (blood) {
            document.title = `${blood.type} | SRC Blood Donation`;
            window.scrollTo(0, 0);
        }
    }, [blood]);

    if (!blood) {
        return (
            <div className="container my-5 text-center">
                <h2>Blood Type Not Found</h2>
                <button
                    className="btn btn-primary mt-3"
                    onClick={() => navigate('/donation')}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="page-transition">
            <main className="flex-grow-1">
                <div className="container my-5">
                    <h2 className="text-center text-danger fw-bolder fs-1">
                        {blood.type}
                    </h2>

                    <p className="text-center fs-5 text-secondary mb-5">
                        {blood.description}
                    </p>

                    <div className="row align-items-center">
                        <div className="col-md-5 text-center">
                            <img
                                src={blood.image}
                                alt={`${blood.type} Blood Type`}
                                className="img-fluid rounded shadow-lg"
                                style={{ maxWidth: "300px" }}
                            />
                        </div>

                        <div className="col-md-7">
                            <h3 className="fw-bold text-danger mb-3">Overview</h3>
                            <p className="fs-5 text-dark">{blood.overview}</p>

                            <h3 className="fw-bold text-danger mt-4 mb-3">
                                Compatibility
                            </h3>
                            <ul className="fs-5 text-dark">
                                <li>
                                    <strong>Can receive blood from:</strong>{" "}
                                    {blood.compatibility.receive.join(", ")}
                                </li>
                                <li>
                                    <strong>Can donate blood to:</strong>{" "}
                                    {blood.compatibility.donate.join(", ")}
                                </li>
                            </ul>

                            <h3 className="fw-bold text-danger mt-4 mb-3">
                                Why {blood.type} Donors Are Important
                            </h3>
                            <p className="fs-5 text-dark">{blood.importance}</p>
                        </div>
                    </div>

                    <div className="mt-5 text-center">
                        <h4 className="fw-bold text-danger">Did You Know?</h4>
                        <p className="fs-5 text-dark">{blood.didYouKnow}</p>
                    </div>
                </div>

                <button
                    className="donate-btn-2 mx-auto d-block mt-5"
                    onClick={() => navigate('/donation')}
                >
                    Go Back
                </button>
            </main>
        </div>
    );
};
