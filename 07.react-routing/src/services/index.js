import { BASE_URL } from "../constants";
import axios from "axios";

// get all data
async function getAllData(endpoint) {
    try {
        const response = await axios(`${BASE_URL}/${endpoint}`)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}
// get data id
async function getDataById(endpoint, id){
    try {
        const response = await axios(`${BASE_URL}/${endpoint}/${id}`)
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}

// delete data by id
async function deleteDataById(endpoint, id) {
    try {
        const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`)
        return response
    } catch (error) {
        console.log(error.message);
    }
}

// post new data
async function postNewData(endpoint, payload) {
    try {
        const response = await axios.post(`${BASE_URL}/${endpoint}`, payload)
        return response
    } catch (error) {
     console.log(error.message);
    }
}

// update data by id
async function editDataById(endpoint, payload, id) {
    try {
        const response = await axios.put(`${BASE_URL}/${endpoint}/${id}`, payload)
        return response
    } catch (error) {
     console.log(error.message);
    }
}


export { getAllData, getDataById, deleteDataById, postNewData, editDataById }