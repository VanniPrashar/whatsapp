import axios from 'axios';

const url = 'http://localhost:8000';

export const addUser = async (data) => {
    try {
      let response =  await axios.post(`${url}/add`, data);
      return response.data;
    } catch (error) {
       console.log('Error while callinng addUser API', error); 
    }
}

export const getUsers = async () => {
   try {
     let response = await axios.get(`${url}/users`);
     return response.data;
   } catch (error) {
      console.log('Error while calling getUsers api ', error);
   }
}

export const setConversation = async (data) => {
   try {
      await axios.post(`${url}/conversation/add`, data);
   } catch (error) {
      console.log('Error while calling setConversation api ', error);
   }
}

export const getConversation = async (data) => {
   try {
      await axios.post(`${url}/conversation/get`, data);
   } catch (error) {
      console.log('Error while calling getConversation api ', error);
   }
}

export const newMessages = async (data) => {
   try {
      await axios.post(`${url}/message/add`, data);
   } catch (error) {
      console.log('Error while calling newMessage api ', error);
   }
}

export const getMessages = async (id) => {
   try {
     let response = await axios.post(`${url}/message/get/${id}`);
     return response.data;
   } catch (error) {
      console.log('Error while calling getMessages api ', error);
   }
}

export const uploadFile = async (data) => {
   try {
   return await axios.post(`${url}/file/upload`, data);
    
   } catch (error) {
      console.log('Error while calling uploadFile api ', error);
   }
}