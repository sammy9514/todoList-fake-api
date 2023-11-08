import axios from "axios";

const URL: string = " http://localhost:3004/posts";

export const createTask = async (data: any) => {
  try {
    return axios.post(`${URL}/`, data);
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async () => {
  try {
    return axios.get(`${URL}/`).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

// export const deleteTask = async (id: any) => {
//   try {
//     return axios.delete(`${URL}/${id}`, id).then((res) => {
//       return res.data;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const deletaTask = async (id: any) => {
  try {
    return axios.delete(`${URL}/${id}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = (id: any) => {
  try {
    return axios.patch(`${URL}/${id}`, id).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
