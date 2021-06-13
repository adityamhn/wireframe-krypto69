import axios from 'axios';
const key ='zofeq8dlz1jff65ilw4y0u';
const mainURL = "https://dummy-wireframe.iecsemanipal.com";


export const GetAllUsers = async()=>{
    const res = await axios.get(mainURL + `/social-media/users?apikey=${key}`)
    return res.data
}

export const GetUserDetails = async(userid)=>{
    const res = await axios.get(mainURL + `/social-media/user/${userid}?apikey=${key}`)
    return res.data
}

export const GetAllPosts = async()=>{
    const res = await axios.get(mainURL + `/social-media/posts?apikey=${key}`)
    return res.data
}

export const GetParticularPost = async(postid)=>{
    const res = await axios.get(mainURL + `/social-media/post/${postid}?apikey=${key}`)
    return res.data
}

export const GetAllCompanies = async()=>{
    const res = await axios.get(mainURL + `/stocks?apikey=${key}`)
    return res.data
}

export const GetStockReport = async(stockid)=>{
    const res = await axios.get(mainURL + `/stock/${stockid}?apikey=${key}`)
    return res.data
}

export const GetAllGovtInst = async()=>{
    const res = await axios.get(mainURL + `/institutions?apikey=${key}`)
    return res.data
}

export const GetInstDetails = async(instid)=>{
    const res = await axios.get(mainURL + `/institution/${instid}?apikey=${key}`)
    return res.data
}