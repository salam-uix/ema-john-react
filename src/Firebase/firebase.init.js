import { initializeApp } from "@firebase/app";
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
-------------------------
Step 2: Setup component
1. Create login component
2. Create Register component
3. Create Route for Login and Register component
-------------------------
Step 3: Set auth system
1. Setup signin method
2. Setup signOut method
3. User state
4. Special observer
5. Return necessary method and stats from useFirebase
-------------------------
Step 4: Create auth context hook (useAuth)
1. Create auth context
2. Create context provider
3. set context provider context value
4. Use auth provider 
5. Create useAuth hook
-------------------------
Step 5: create private route
1. Create private route
2. Set private route
*/