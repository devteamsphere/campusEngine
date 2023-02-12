import axios from 'axios';
export const url = "http://localhost:8000";
//auth

export const signIn = async (data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/api/auth/signin`, data);
    } catch (error) {
console.log(error)
    }
}
export const signup = async (data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/api/auth/signup`, data);
    } catch (error) {
console.log(error)
    }
}

//user

export const getUserInfo = async (data) => {
    try {
        console.log(data);
        return await axios.get(`${url}/api/user/getUserInfo`, {headers: {authorization:data}});
    } catch (error) {
console.log(error)
    }
}
export const getResume = async (data) => {
    try {
        console.log(data);
        return await axios.get(`${url}/api/user/getResume`, {headers: {authorization:data}});
    } catch (error) {
console.log(error)
    }
}
export const updateResume = async (token,data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/api/user/updateResume`,data, {headers: {authorization:token}});
    } catch (error) {
console.log(error)
    }
}

export const Upload = async (data,email) => {
    try {
        console.log(data);
      return await axios.post(`${url}/uploadImage`, {image:data,email:email});
    } catch (error) {
      console.log(error);
      console.log("Error while calling signup API: ", error);
    }
  };

  // Company Routes

  // create job 
    export const createJob = async (token,data) => {
    try {
        console.log(data);
        return await axios.post(`${url}/api/company/createJob`,data, {headers: {authorization:token}});
    } catch (error) {
console.log(error)
    }
}
    export const listCompanyJob = async (token) => {
    try {
        // console.log(data);
        return await axios.get(`${url}/api/company/listCompanyJob`, {headers: {authorization:token}});
    } catch (error) {
console.log(error)
    }
}
    export const getJobDetail = async (token,id) => {
    try {
        // console.log(data);
        return await axios.post(`${url}/api/company/getJobInfo`,{jobId:id}, {headers: {authorization:token}});
    } catch (error) {
console.log(error)
    }
}
