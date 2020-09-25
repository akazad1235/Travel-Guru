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

  const [user, setUser] = useState({
    isLoggedIn : false,
    name :'',
    email:'',
    password:'',
    photo:'',
    error:'',
    success:false


  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSignIn =()=> {
    firebase.auth().signInWithPopup(provider)
    .then( res => {
       const {displayName, email, photoURL} = res.user;

       const isLoggedInUser = {
         isLoggedIn:true,
         name: displayName,
         email: email,
         photo:photoURL
       }

       setUser(isLoggedInUser);
      
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

  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
      const isSignOutUser = {
        isLoggedIn:false,
        name:'',
        email:'',
        photo:'',
       
      }

      setUser(isSignOutUser);

    }).catch(function(error) {
      // An error happened.
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
              const newUserInfo = {...user};
              newUserInfo[event.target.name] = event.target.value;
              setUser(newUserInfo);
            }
  }
  const handleSubmit = (event)=>{

    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        updateUserName(user.name);
        

      })
      .catch(function(error) {
        // Handle Errors here.
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
      });
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        setLoggedInUser(newUserInfo);
        history.replace(from);
        console.log('sign in user info'+ res.user);
      })
      .catch(function(error) {
       
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success=false;
        setUser(newUserInfo);
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
      {/* {
        user.isLoggedIn ? <button onClick={handleSignOut}>Sign Out</button>:<button onClick={handleSignIn}>Sign in</button>
      } */}


 {/* {
  user.isLoggedIn && 
  <div>
    <h1>name:{user.name}</h1>
    <p>email: {user.email}</p>
    <img  src={user.photo} alt="profile pic"/>
    
  </div>
 }
  <h1>User Authintication</h1>
  <h4>email:{user.email}</h4>
  <h4>passowrd:{user.password}</h4> 

    <button onClick={ () => setNewUser(!newUser)}> click</button>

  <form onSubmit={handleSubmit}>
        {newUser && <input type="text" name="name" onBlur={handleChange} placeholder="please enter your name"/>}<br/> 
        <input type="text" name="email" onBlur={handleChange} placeholder="please enter your email"/><br/> 
        <input type="password" name="password" onBlur={handleChange} placeholder="please enter your passowrd" /><br/>
        <input type="submit" value="submit" name="submit"/>
  </form> */}



    <div className="content-area">
    <p style={{color:'red'}}>{user.error}</p>
        {
        user.success && <p style={{color:'green'}}> User {newUser ? 'Created':'Logged IN'} Successfully</p>
        }
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

                    <button type="submit" className="form-control btn btn-warning">{newUser? 'Create An Account': 'Login'}</button>
                    <p className="text-center" style={{marginTop:'10px'}}>{newUser? 'Alreade Have An Account?': 'Dont Have An Account '}<button onClick={ () => setNewUser(!newUser)}> {newUser? 'Logi in': 'Sign Up'}</button></p>
            </form>
           
            </div>
             <p>or</p>
            <button className="btn btn-info form-control" onClick={handleSignIn}>Google Sign In</button>

    </div>


    </div>
  );
}

export default Login;
