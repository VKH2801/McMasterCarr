import React from 'react';
import Header from  '../../organisms/Header/Header';
import ScrewsCategories from '../../organisms/ScrewsCategories/ScrewsCategories';

export default function SelectedCategories() {
  return (
    <div className='highres tab-inactive' id="ShellLayout_Cntnr">
      <Header></Header>
      
      <div id='ShellLayout_Content_Cntnr' className="shell-contentcontainer">
        <ScrewsCategories></ScrewsCategories>
        
      </div>
    </div>
  );
}
