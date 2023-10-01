import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import ThemeWrapper from './components/ThemeWrapper.js';
import PreactErrorCatcher from './components/PreactErrorCatcher.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDzJ6yRI7oBT33IR5jOOqx9jQlGZOVxan0',
    authDomain: 'budgeting-dp.firebaseapp.com',
    projectId: 'budgeting-dp',
    storageBucket: 'budgeting-dp.appspot.com',
    messagingSenderId: '411825828711',
    appId: '1:411825828711:web:402ef477481233e934b5c2',
    measurementId: 'G-KRS8ZG9QE5',
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase_app);
export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly'); // Please change this
export const auth = getAuth();

import { Home } from './pages/Home/index.jsx';
import { Setup } from './pages/Setup/index.js';
import { NotFound } from './pages/_404.jsx';
import './styles/style.scss';

// Boboto Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export function App() {
    return (
        <LocationProvider>
            <ThemeWrapper>
                <PreactErrorCatcher>
                    <Router>
                        <Route path="/" component={Setup} />
                        <Route path="/home" component={Home} />
                        <Route default component={NotFound} />
                    </Router>
                </PreactErrorCatcher>
            </ThemeWrapper>
        </LocationProvider>
    );
}

render(<App />, document.getElementById('app'));

