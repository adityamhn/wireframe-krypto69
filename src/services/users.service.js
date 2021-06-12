import axios from 'axios';
const key ='zofeq8dlz1jff65ilw4y0u';
const mainURL = "https://dummy-wireframe.iecsemanipal.com";


export const GetAllUsers = async()=>{
    const res = await axios.get(mainURL + `/social-media/users?apikey=${key}`)
    return res.data
}