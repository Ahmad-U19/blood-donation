import './Donation.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { bloodTypes } from '../data/bloodTypes';

export const Donation = ({ addToFavourite }) => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Blood Types | SRC Blood Donation";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-transition">
            <main className="container my-5 flex-grow-1">
                <div className="donor-1 mb-5 text-center animate-fade-in">
                    <h1 className="animate-slide-down">Become a Blood Donor</h1>
                    <p className="animate-slide-up">Your decision to donate blood can save lives. Join our community of donors and make a difference today.</p>
                    <button className="donate-btn-2 mx-auto d-block animate-slide-up" style={{ animationDelay: '0.2s' }} onClick={() => navigate('/login')}>Sign Up to Donate</button>
                </div>

                <div className="bloodTypes">
                    <h2 className="text-center animate-slide-down" style={{ animationDelay: '0.3s' }}>Know Your Blood Group</h2>
                    <div className="row justify-content-center mt-4 g-4">
                        {bloodTypes.map((blood, index) => (
                            <div className="col-sm-6 col-md-4 col-lg-3 animate-card" key={blood.id} style={{ animationDelay: `${(index + 1) * 0.1}s` }}>
                                <div className="bloodtype d-flex flex-column h-100 shadow-sm">
                                    <img src={blood.image} alt="" />
                                    <h3>{blood.type}</h3>
                                    <p>{blood.description}</p>
                                    <button
                                        className="donate-btn mt-auto"
                                        onClick={() => addToFavourite(blood)}
                                    >
                                        Add to Favourites
                                    </button>
                                    <Link className="text-decoration-none text-danger fw-bold fs-5 mt-3" to={`/blood-type/${blood.id}`}>Details</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <section className="donor-1 my-5 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
                    <h1 className="animate-slide-up">Become a Donor Today</h1>
                    <p className="animate-slide-up">Every drop of blood you donate can help save a life. Whether your blood type is common or rare, your contribution matters. Join SRC Blood Donation and become part of a life-saving mission.</p>
                    <p className="animate-slide-up"><b>Be a hero — Donate Blood, Save Lives!</b></p>
                    <button className="donate-btn-2 mx-auto d-block animate-slide-up" style={{ animationDelay: '0.6s' }} onClick={() => navigate('/login')}>Sign Up to Donate</button>
                </section>
            </main>
        </div>
    );
}