// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
// import './App.css';




// function App() {
//   return (
//     <Router>
//       <nav className="topnav">
//         <Link to="/" className="active">Home</Link>
//         <Link to="/launch">Launch</Link>
//         {/* <Link to="/launchIndex">LaunchIndex</Link> */}

//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="launch" element={<Launch />} />
//         <Route path="/" element={<LaunchIndex />} />
//       </Routes>
//     </Router>

//   );
// }
// export default App;

// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function Launch() {
//   return (
//     <div>
//       <h2>Launch Page</h2>

//       <Outlet />
//     </div>

//   );
// }

// function LaunchIndex() {
//   return (
//     <ul>
//       {Object.entries(shoes).map(([title, { name, img }]) => (
//         <li key={title}>
//           <h2>{name}</h2>
//           <img src={img} alt={name} />
//         </li>
//       ))}
//     </ul>
//   );

// }


// const shoes = {
//   "air-jordan-3-valor-blue": {
//     "name": "VALOUR BLUE",
//     "img":
//       "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "jordan-mars-270-london": {
//     "name": "JORDAN MARS 270 LONDON",
//     "img":
//       "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "air-jordan-1-zoom-racer-blue": {
//     "name": "RACER BLUE",
//     "img":
//       "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "air-jordan-3-valor-blue1": {
//     "name": "VALOUR BLUE",
//     "img":
//       "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "jordan-mars-270-london2": {
//     "name": "JORDAN MARS 270 LONDON",
//     "img":
//       "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "air-jordan-1-zoom-racer-blue3": {
//     "name": "RACER BLUE",
//     "img":
//       "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
//   },
//   "two-cute-baby-dogs": {
//     "name": "Cute Boo Dog Couple",
//     "img":
//       "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
//   }
// }

