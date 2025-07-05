import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onAuthStateChanged } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './redux/userSlice.js';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        const snapshot = await getDoc(userRef);
        console.log(snapshot.data().createdAt.toDate().toISOString());
        const createdAtStr = snapshot.data().createdAt.toDate().toISOString();
        console.log(createdAtStr);
        console.log("Dispatching user:", {
          ...snapshot.data(),
          id: userRef.id,
          createdAt: createdAtStr,
        });
        dispatch(setCurrentUser({
          ...snapshot.data(),
          id: userRef.id,
          createdAt: createdAtStr,
        }));
      }
      else{
        dispatch(setCurrentUser(null));
        createUserProfileDocument(userAuth);
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/shop" element={<ShopPage/>}/>
        <Route exact path="/signin" element={
          currentUser ? <Navigate to='/' replace/> : <SignInAndSignUp/>
          }/>
      </Routes>
    </div>
  );
}

export default App;
