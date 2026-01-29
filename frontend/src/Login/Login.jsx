import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAdditionalUserInfo, setPersistence, browserSessionPersistence, signOut} from 'firebase/auth';
import {} from 'firebase/firestore';

async function readFirebaseConfig() {
    try {
        const response = await fetch('../assets/firebaseConfig.json');
        if (!response.ok) {
            throw new Error("Could not fetch firebaseConfig.json. Make sure it's in the /public folder.");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const firebaseConfig = await readFirebaseConfig();
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider = new GoogleAuthProvider();

await setPersistence(auth, browserSessionPersistence);
await signOut(auth);

export async function SignIn() {
    try{
        const result = await signInWithPopup(auth,provider);
        const user = result.user;
        const info = getAdditionalUserInfo(result);
        if(info.isNewUser){
            console.log(`${user.email} account successfully created`);
        }
        else{
            signOut(auth);
        }
    }
    catch(error){
        console.error(error);
    }
}

onAuthStateChanged(auth, user => {
    if(user!=null){
        console.log(user.email,'logged in\n');
    }
    else{
        console.log('Null user');
    }
});

function Login(){
    return(
        <>
        <button>Login</button>
        </>
    );
}

export default Login;