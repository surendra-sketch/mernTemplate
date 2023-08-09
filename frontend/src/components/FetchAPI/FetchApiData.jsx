// import React, { useState, useEffect } from "react";
// import "./style.css";
// import axios from "axios";
// import { View, Delete, Edit } from "../Icons/Icons";
// const FetchApiData = () => {
//   const [people1, setpeople] = useState([]);

//   useEffect(() => {
//     // const Fetchapi = async () => {
//     //   await fetch("http://localhost:5000/api/users/getuser")
//     //     .then((res) => res.json())
//     //     .then((data) => setpeople(data));
//     // };
//     // Fetchapi();

//     axios
//       .get("http://localhost:5000/api/users/getuser")
//       .then((res) => setpeople(res.data))
//       .catch((err) => console.log(err));
//     // console.log(dataaa);
//     // fetch("http://localhost:5000/api/users/getuser")
//     //   .then((res) => res.json())
//     //   .then((data) => setpeople(data));
//     // console.log(people1);
//   }, []);

//   return (
//     <>
//       <section className="user1-list">
//         {people1.map((user) => {
//           return (
//             <section key={user._id} className="user1">
//               <div className="user-data">
//                 <h1>Name : {user.name}</h1>
//                 <h2>Email : {user.email}</h2>
//                 <h3>Id :{user._id}</h3>
//                 <h4>{user.createdAt}</h4>
//                 <h4>{user.updatedAt}</h4>
//               </div>
//               <div className="all-btn">
//                 <button className="delete">
//                   <Delete />
//                 </button>
//                 <button className="edit">
//                   <Edit />
//                 </button>
//                 <button className="view">
//                   <View />
//                 </button>
//               </div>
//             </section>
//           );
//         })}
//       </section>
//     </>
//   );
// };

// export default FetchApiData;
