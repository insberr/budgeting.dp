import { Button, Paper } from '@mui/material';
import '../../config/money.values';
import { tuitionRates } from '../../config/money.values';
import { auth } from '../../index.js';
import { useState } from 'preact/hooks';

export function Home() {
    const [userState, setUserState] = useState(false);

    auth.authStateReady().then(() => {
        if (auth.currentUser === null) {
            setUserState(null);
        } else {
            setUserState(true);
        }
    });

    if (userState === false) {
        // TODO Make this a better loading screen or something
        return <div>Loading (Checking For Google Authentication)</div>;
    }

    return (
        <div>
            {userState === true && <h2>Welcome {auth.currentUser.displayName}</h2>}
            {userState === null && <h2>Welcome (Not Logged In)</h2>}
            <div>23-24 undergrad tuition cost per year ${tuitionRates[202324].undergraduate.usCitizensAndResidents.costPerYear}</div>
            <br />
            <div>
                Much work is needed to be done on this page. Currently there is no functionallity to this website. And I need to decide if it should
                require login or not.
            </div>
            <br />
            {userState === true ? (
                <Button
                    onClick={() => {
                        auth.signOut()
                            .then(() => {
                                console.log('User signed out sucessfully');
                                setUserState(null);
                                location.reload();
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }}
                >
                    Log Out Of Google
                </Button>
            ) : (
                <Button href="/">Log In With Google</Button>
            )}
        </div>
    );
}

