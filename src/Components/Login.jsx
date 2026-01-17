import './Login.css'
import { useEffect } from 'react';

export const Login = () => {
    useEffect(() => {
        document.title = "Login | SRC Blood Donation";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-transition">
            <div className="login-container d-flex justify-content-center align-items-center animate-fade-in">
                <form className="text-white animate-slide-up shadow-lg" style={{ borderRadius: '15px' }}>
                    <h2 className="text-center mb-4">Welcome Back</h2>
                    <p className="text-center mb-4">Sign in to your account</p>

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="form-control" placeholder="Enter your username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" placeholder="Enter your password" required />

                    <div className="options d-flex justify-content-between align-items-center mt-3">
                        <label><input type="checkbox" /> Remember me</label>
                        <a href="#" className="text-white text-decoration-none">Forgot password?</a>
                    </div>

                    <button type="submit" className="login-button btn btn-light w-100 mt-4 fw-bold">Sign In</button>

                    <p className="register mt-3 text-center">New to SRC Blood Donation? <a href="#" className="text-white fw-bold">Create account</a></p>
                </form>
            </div>
        </div>
    );
}