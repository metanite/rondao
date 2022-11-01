import React  from 'react';
import Tracks from '../components/tracks'
import HackerText from '../components/hackerText'

const Prizes = () => {

  return (    
     <>
        <div id="tracks" className="row prizes text-center text-white no-gutters">
            <div className="col-sm-12 px-3">
              <HackerText  tag="h2" text="$1 MILLION" triggerStart="bottom 95%" className="prizes-header"/>
              <p className="section-description m-auto">In Total Prizes, Across 6 Tracks</p>
            </div>
        </div>
         <Tracks/>
      </>
  )
}

export default Prizes

