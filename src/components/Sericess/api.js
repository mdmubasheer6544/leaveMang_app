import axios from "axios";
const baseUrl = "http://localhost:8080";
export const getUsers = async () => {
  const url = "Credentials.json";
  return await axios.get(url);
};

export const postLeave = async (request) => {
  return await axios.post(`${baseUrl}/user/add-leave`, request);
};

export const getMyLeaves = async (userId) => {
  return await axios.get(`${baseUrl}/user/my-leaves/${userId}`);
};

export const getAllLeavesForAdmin = async () => {
  return await axios.get(`${baseUrl}/admin/all-leaves`);
};
export const getPendingLeavesForAdmin = async () => {
  return await axios.get(`${baseUrl}/admin/pending-leaves`);
};
export const getApprovedLeavesForAdmin = async () => {
  return await axios.get(`${baseUrl}/admin/approved-leaves`);
};
export const putChangeForAdmin = async (id,value) => {
  return await axios.put(`${baseUrl}/admin/update-status?id=${id}&value=${value}`);
};
