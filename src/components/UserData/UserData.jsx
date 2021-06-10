import React from 'react'
import './UserData.scss';
export const UserData = ({name,DOB,email,sex,image}) => {
    return (
        <div className="userdata-main-div">
            <div className="picture-section">
                <img src={image} className="user-image"/>
            </div>
            <div className="data-section">
                <div className="first-section">
                    <div className="main-text">
                    {sex==="male" ? "Mr." : "Ms."} {name}
                    </div>
                    <div className="main-text">
                        DOB : {DOB.slice(0,10)}
                    </div>
                    <div className="main-text">
                        {email}
                    </div>
                    

                <div className="second-section">
                    <div className="gender-section">
                        
                        Gender : {sex}
                        
                            
                    </div>
                    <div className="see-details-section">

                            see details
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}
