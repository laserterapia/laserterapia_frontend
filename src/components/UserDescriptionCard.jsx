import React from "react";

import '../styles/Components/UserDescriptionCard.css'

const UserDescriptionCard = (props) => {

  return (
      <div className='user_description_card'>
        <div className='user_profile_picture'>
          
        </div>
        <div className='user_data'></div>
        <div className='purple_bar'></div>

      </div>    
  );
};

export default withRouter(UserDescriptionCard);
