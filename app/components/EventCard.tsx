import React from 'react';
import ModalObj from './ModalObj';
//https://upload.wikimedia.org/wikipedia/en/5/5f/LOL_Worlds_logo.svg

//<h2 className="card-title">Shoes!</h2>

// NOTE! THE IMAGE SHOULDN'T BE SHOWN UNTIL YOU MAKE A SELECTION

const EventCard = () => {

return (
<div className="card w-80 shadow-xl bg-dark-champ bg-no-repeat bg-center border border-bordercolor">
  <figure><img src="https://championsqueue.gg/logo-worlds.webp" alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-center">What was the largest gold comeback someone has made this year?</p>
    <div className="card-actions justify-center">
      <ModalObj labelText='What was the largest gold comeback someone has made this year?' />
    </div>
  </div>
</div>
)};

export default EventCard;