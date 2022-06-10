// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { filtreProducts } from "../../actions/productAction";
// import "./Filtre.css";

// function Filtre() {
//   const [searchkey, setsearchkey] = useState("");
//   const [category, setcategory] = useState("all");

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(filtreProducts(searchkey, category));
//   }, [searchkey]);

//   return (
//     <div   style={{marginBottom:"20px"}}>
//       <div className="row justify-content-center ">
//         <div className="col-m-2 ">
//           <input
//             style={{ marginTop: "18px" }}
//             value={searchkey}
//             onChange={(e) => {
//               setsearchkey(e.target.value);
//             }}
//             type="text"
//             placeholder="Search"
//             className="sr form-control"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default Filtre;
