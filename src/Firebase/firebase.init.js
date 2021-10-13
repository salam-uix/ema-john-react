import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializedAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializedAuthentication;

/* 
Steps for Authentication
------------------------
Step 1: Initial setup
1. Firebase: create project
2. Create web app
3. Get firebase configaration
4. Initialized firebase
5. Enable auth method

Step 2: 
1. Create login component
2. Create Register component
3. Create Route for Login and Register component
*/