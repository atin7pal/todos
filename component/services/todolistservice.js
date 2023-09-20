import { BASE_URL } from "./constant";

// const GetTodoList = async () => {
//   return await fetch(`${BASE_URL}/todos`).then((res) => res.json());
//   //       .then((data) => {
//   //         resolve(data)
//   //       }).catch((err)=> {
//   //         reject(err)
//   //       });;
// };

export const GetTodoListotherway = () => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/todos`)
      .then((res) => res.json())
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
