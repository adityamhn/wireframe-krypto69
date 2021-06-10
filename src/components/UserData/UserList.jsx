import React from 'react'
import { GetAllUsers } from '../../services/users.service';
import { UserData } from './UserData';
import './UserList.scss'
export const UserList = () => {
    const [allUsers,setAllUsers] = React.useState([]);


    React.useEffect(()=>{
            GetAllUsers().then(
                response=>response.data
            )
                .then(users=>{
                    setAllUsers(users.data);
                    console.log(users);
                })
    },[])


    return (
        <div className="userlist-main-div">
            {allUsers.map(user=>{
                return (<UserData name={`${user.firstName} ${user.lastName}`}
                    DOB={user.dateOfBirth}
                    email={user.email}
                    sex={user.gender}
                    image={user.picture}
                    />);
            })}
            
        </div>
    )
}
