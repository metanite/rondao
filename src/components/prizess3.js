import React  from 'react';
import Trackss3 from './trackss3'
import HackerText from './hackerText'

const totalPrize = "In Total Prizes for Season Three, Across 6 Tracks"
const totalPrizeStart = "<p>"
const totalPrizeEnd = "</p>"
const Prizess3 = () => {

  return (    
     <>
        <div id="tracks" className="row prizes text-center text-white no-gutters">
            <div className="col-sm-12 px-3">
              <HackerText text="$1,200,000" triggerStart="bottom 95%" className="prizes-header-s3 "/>
              <p className="section-description m-auto"><span>{totalPrizeStart}</span>{totalPrize}<span>{totalPrizeEnd}</span></p>
            </div>
        </div>
         <Trackss3/>
      </>
  )
}

export default Prizess3

