import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Footbar } from './Components/Footbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Donation } from './Components/Donation'
import { Login } from './Components/Login'
import { Favourite } from './Components/Favourite'
import { BloodDetail } from './Components/BloodDetail'
import { Prayer } from './Components/Prayer'


import './App.css'

function App() {
  const [favourites, setFavourites] = useState([]);

  const addToFavourite = (bloodType) => {
    if (favourites.some(fav => fav.id === bloodType.id)) {
      alert("Blood type already in favourites");
    } else {
      setFavourites([...favourites, bloodType]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter(fav => fav.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Navbar favouritesCount={favourites.length} />

        <div className="main-content">
          <Routes>
            <Route path="/blood-donation" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/donation" element={<Donation addToFavourite={addToFavourite} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favourite" element={<Favourite favourites={favourites} removeFavourite={removeFavourite} />} />
            <Route path="/blood-type/:id" element={<BloodDetail />} />
            <Route path="/prayer-api" element={<Prayer />} />
          </Routes>
        </div>

        <Footbar />
      </div>
    </BrowserRouter>
  );
}


export default App
