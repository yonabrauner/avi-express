import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [currentuser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        console.log(userRef);
      }
      setCurrentUser(userAuth);
      createUserProfileDocument(userAuth);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentuser}/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/shop" element={<ShopPage/>}/>
        <Route exact path="/signin" element={<SignInAndSignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
