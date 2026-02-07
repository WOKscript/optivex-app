// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './pages/Home';
// import Pricing from './pages/Pricing';
// import useScrollToHash from './hooks/useScrollToHash'; // 1. Import hook

// // 2. Create a wrapper component to use the hook
// // (Hooks can only be used inside BrowserRouter, so we can't use it directly in App function yet)
// const ScrollHandler = () => {
//   useScrollToHash(); 
//   return null;
// };

// function App() {
//   return (
//     <BrowserRouter>
//       {/* 3. Place the handler here so it's inside the Router */}
//       <ScrollHandler /> 
      
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="pricing" element={<Pricing />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import Building from './pages/Building';

function App() {
  return <Building />;
}

export default App;