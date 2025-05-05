import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { Route, Routes } from 'react-router-dom';
import { ShopPage } from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/shop" element={<ShopPage/>}/>
        <Route exact path="/sign-in" element={<SignInAndSignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
