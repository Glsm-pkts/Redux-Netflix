import React from 'react';
import { baseImgUrl } from '../constans';

const ActorCard = ({actor}) => {
  return (
    <div className='line-clamp-1 w-[160px]'>
        <img className='h-[175px]' src={baseImgUrl + actor.profile_path} alt="" />
        <h2>{actor.original_name}</h2>
        <h2 className='line-clamp-1'>{actor.character}</h2>
      
    </div>
  );
}

export default ActorCard;
