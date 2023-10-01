import { Button } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth, provider } from '../../index.js';

function googleSignIn() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user);

            // Chnage the page to next page
            location.href = '/home';
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

export function Setup() {
    return (
        <div>
            <div>This is the setup page, where users will be able to configure the website for their needs.</div>
            <Button href="/home">Go to home</Button>
            <h3>Sign In With Google</h3>
            <Button
                onClick={() => {
                    googleSignIn();
                }}
            >
                Sign In With Google
            </Button>
        </div>
    );
}
