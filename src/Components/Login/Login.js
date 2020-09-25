import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../FirebaseConfig';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';



firebase.initializeApp(firebaseConfig);


function Login() {

  var provider = new firebase.auth.GoogleAuthProvider();
  const [newUser, setNewUser] = useState(false);

  

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };


  const handleGoogleSignIn =()=> {
    firebase.auth().signInWithPopup(provider)
    .then( res => {
       const {displayName, email} = res.user;
       const googleNewUser = {name : displayName ,  email : email};
       setLoggedInUser(googleNewUser);
       history.replace(from);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  
  const handleChange = (event) => {
          
           let isFormValid ;
            if( event.target.name==="email") {
               isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
              
            }
            if( event.target.name==="password") {
              const passwordValid = event.target.value.length > 8;
              const passwordHasNumber = /\d{1}/.test(event.target.value);
              isFormValid= passwordValid && passwordHasNumber;
           }
            if(isFormValid){
              const newUserInfo = {...loggedInUser};
              newUserInfo[event.target.name] = event.target.value;
              setLoggedInUser(newUserInfo);
            }
  }
  const handleSubmit = (event)=>{

    if (newUser && loggedInUser.email && loggedInUser.password) {
      firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
       .then(res => {
            const {displayName , email} = res.user;
            const NewUser = {name : displayName ,  email:email}
            setLoggedInUser(NewUser);
            updateUserName(displayName)
          //  newUser.updateProfile({
          //      displayName:loggedInUser.name
          //  })
            history.replace(from);
   })
   .catch(function(error) {
       const newUserInfo = { ...loggedInUser };
               newUserInfo.message = error.message;
               newUserInfo.success = false;
               setLoggedInUser(newUserInfo);
               console.log(newUserInfo.messag);
     });
   }
    if (!newUser && loggedInUser.email && loggedInUser.password) {
      firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
      .then(res => {
        const {displayName , email} = res.user;
        const googleNewUser = {name : displayName ,  email:email}
        setLoggedInUser(googleNewUser);
         history.replace(from);
      })
      .catch(function(error) {
       
        const newUserInfo = {...loggedInUser};
        newUserInfo.error = error.message;
        newUserInfo.success=false;
        setLoggedInUser(newUserInfo);
        console.log(newUserInfo.messag);
      });
      
    }

    event.preventDefault();
  }

  const updateUserName = (name)=>{

    let user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name,
        }).then(function() {
        console.log('user update success');
        }).catch(function(error) {
            console.log('user update faild', error);
        });

  }

  return (
    <div className="container">
    <div className="content-area">
            <div className="form-area">
                <h4>{newUser ? 'Sign Up' : 'Login' }</h4>
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        {
                            newUser && <div>
                                <label >Name</label>
                        <input type="text" name="name" onBlur={handleChange} className="form-control" />
                            </div>
                        }
                        
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" name="email" onBlur={handleChange}  className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Passowrd</label>
                        <input type="password" name="password" onBlur={handleChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        {
                            !newUser &&  
                            <div className="d-flex">
                                <div><input type="checkbox" name="name" onBlur={handleChange}/>Remember Passowrd</div>
                                <div className="text-warning forgate-pass"> <Link to="">Forgate Passowrd</Link></div>
                            </div>
                           
                        }
                        
                    </div>

                    <button type="submit" className="form-control btn btn-warning">{newUser ? 'Create An Account': 'Login'}</button>
                    <p className="text-center" style={{marginTop:'10px'}}>{newUser? 'Alreade Have An Account?': 'Dont Have An Account '}<button onClick={ () => setNewUser(!newUser)}> {newUser? 'Logi in': 'Sign Up'}</button></p>
            </form>
           
            </div>
             <p>or</p>
            <button className="btn btn-info form-control" onClick={handleGoogleSignIn}>Login With Google</button>

    </div>


    </div>
  );
}

export default Login;
