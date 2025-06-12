import React from 'react';
import SubTitle from './components/SubTitle';
import OpeningParagraph from './components/OpeningParagraph';

function PageIntroduction(){
    return(<>
    <div className="body-container fade-in-bottom" style={{ '--fade-duration': '3s', 'animationDelay': '0.9s' }}>
      <SubTitle />
      <OpeningParagraph />
    </div>
    </>)
}

export default PageIntroduction;