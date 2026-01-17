import { useEffect } from "react";
import "./About.css";

export const About = () => {
    useEffect(() => {
        document.title = "About Us | SRC Blood Donation";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-transition">
            <div className="aboutHeading animate-fade-in">
                <h1 className="animate-slide-down">About SRC Blood Donation</h1>
            </div>

            <div className="container aboutContainer">
                <div className="row">
                    <div className="col-md-12 aboutText animate-slide-up">
                        <h2 className="text-danger">Who We Are</h2>
                        <p>
                            SRC Blood Donation is a non-profit organization committed to saving lives through voluntary blood donation. We believe that every drop of blood can make a difference and bring hope to someone in need. Our goal is to create awareness about the importance of regular blood donation and to connect kind-hearted donors with patients and hospitals quickly and safely. We organize blood donation drives, awareness campaigns, and community programs to encourage people to donate. Our dedicated team works tirelessly to ensure that the process is safe, transparent, and efficient. At SRC Blood Donation, we value compassion, humanity, and service to others. We aim to build a strong network of donors who contribute selflessly to society. Together, we can make sure that no one loses their life due to a shortage of blood.
                        </p>

                        <h2 className="text-danger mt-4">Our Mission</h2>
                        <p>
                            The mission of SRC Blood Donation is to promote the spirit of humanity by encouraging safe and regular blood donations. We aim to ensure that every patient in need has quick and easy access to life-saving blood. Our organization works to spread awareness about the importance of donating blood and how one donation can save multiple lives. We organize community drives and educational campaigns to inspire people to become regular donors. SRC Blood Donation is dedicated to maintaining a safe and transparent process for both donors and recipients. We believe that saving lives should be a shared responsibility. Through teamwork, compassion, and commitment, we strive to create a world where blood shortage is never a reason for losing a life.
                        </p>

                        <h2 className="text-danger mt-4">Our Vision</h2>
                        <p>
                            The vision of SRC Blood Donation is to build a society where every individual understands the value of giving blood and saving lives. We dream of a future where blood is always available for those who need it, at the right time and in the safest way possible. Our goal is to create a strong network of regular donors who are motivated by compassion and care for humanity. We aim to make blood donation a part of everyday life, not just an act during emergencies. SRC Blood Donation envisions hospitals and communities working together to ensure no one suffers due to blood shortage. We want to inspire younger generations to carry forward this noble mission of saving lives. Through dedication, awareness, and unity, we hope to build a healthier and more caring world for everyone.
                        </p>

                        <h2 className="text-danger mt-4">Why Choose SRC Blood Donation?</h2>
                        <ul>
                            <li>Safe and trusted donation process</li>
                            <li>Regular blood donation and awareness campaigns</li>
                            <li>Committed to saving lives through voluntary blood donation</li>
                            <li>Collaboration with hospitals and clinics</li>
                            <li>Quick and friendly donor support team</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}