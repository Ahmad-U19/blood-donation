import './Favourite.css'
import { useEffect } from 'react';

export const Favourite = ({ favourites, removeFavourite }) => {
    useEffect(() => {
        document.title = "Favourites | SRC Blood Donation";
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-transition">
            <div className="container my-5">
                <h2 className="text-center text-danger fw-bold mb-4 animate-slide-down">Your Favorite Blood Types</h2>
                <p className="text-center text-muted mb-5 animate-slide-up">Here are the blood types you’ve marked as favorites.</p>

                {favourites && favourites.length > 0 ? (
                    <div className="row justify-content-center g-4">
                        {favourites.map((fav, index) => (
                            <div className="col-md-4 col-sm-6 animate-card" key={fav.id} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="favorite-card shadow-sm h-100">
                                    <h4 className="text-danger">{fav.type}</h4>
                                    <p>{fav.description}</p>
                                    <button
                                        className="btn btn-outline-danger btn-sm mt-3"
                                        onClick={() => removeFavourite(fav.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center text-muted animate-fade-in">
                        <h4>No favorites added yet.</h4>
                        <p>Go to Blood Types page to add some!</p>
                    </div>
                )}
            </div>
        </div>
    );
}