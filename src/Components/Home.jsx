import React, { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

import mainBg from '../assets/Images/pexels-pranidchakan-boonrom-101111-1350560.jpg';

export const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Home | SRC Blood Donation";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-transition">
            <div className="main-image text-center text-danger position-relative animate-fade-in">
                <img src={mainBg} alt="Main Picture" className="main-pic shadow-lg" />
                <div className="hero-overlay">
                    <h1 className="fade-text animate-slide-up">A single drop of kindness can save a life  Donate blood today</h1>
                    <button className="image-btn btn-primary-custom animate-slide-up" style={{ animationDelay: '0.2s' }} onClick={() => navigate('/login')}>Donate</button>
                </div>
            </div>

            <div className="container-fluid my-5 whyDonate">
                <h2 className="text-center text-danger mb-4 animate-slide-down">Why Donate Blood?</h2>
                <div className="row">
                    <div className="col-md-4 mb-4 animate-card" style={{ animationDelay: '0.1s' }}>
                        <div className="p-3 h-100">
                            <h3>Reduces Risk of Heart Attack and Stroke</h3>
                            <p>Donating blood regularly can help lower the risk of heart attacks and strokes. High levels of iron in
                                the blood can cause thickening and oxidative damage to arteries, leading to heart problems.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 animate-card" style={{ animationDelay: '0.3s' }}>
                        <div className="p-3 h-100">
                            <h3>Stimulates New Blood Cells Production</h3>
                            <p>Each time you donate blood, your body naturally begins to produce new red blood cells to replace the
                                lost ones. This process helps keep your blood fresh and your bone marrow active.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4 animate-card" style={{ animationDelay: '0.5s' }}>
                        <div className="p-3 h-100">
                            <h3>Enhances Blood Flow</h3>
                            <p>Regular blood donation improves the flow and circulation of blood throughout your body. When you
                                donate, your body replenishes your blood supply with newer, healthier cells.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="donor text-center py-5 bg-danger text-white animate-fade-in">
                <h2 className="animate-slide-up">Become a Donor Today!</h2>
                <p className='text1 animate-slide-up' style={{ animationDelay: '0.2s' }}>Join our community of lifesavers by becoming a blood donor. Your contribution can make a significant
                    difference in the lives of those in need. Whether it's for surgeries, emergencies, or chronic conditions,
                    donated blood is essential for medical care.</p>
                <button className="donor-btn btn-light text-danger fw-bold mt-3 animate-slide-up" style={{ animationDelay: '0.4s', borderRadius: '30px', padding: '10px 30px' }} onClick={() => navigate('/login')}>Sign Up to Donate</button>
            </div>
        </div>
    );

}