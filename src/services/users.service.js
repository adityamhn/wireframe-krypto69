import axios from 'axios';
const key ='zofeq8dlz1jff65ilw4y0u';
const mainURL = "https://dummy-wireframe.iecsemanipal.com";


export const GetAllUsers = ()=>{
    return axios.get(`${mainURL}/social-media/users`)
}