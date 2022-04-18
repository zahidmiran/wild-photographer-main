import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mx-auto blog-container'>
            <div className='p-5 div-1st'>
                <h1 className='q-title'>Difference between authorization and authentication?</h1>
                <p>
                    the process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization
                </p>
                <p>Authentication is about validating your credentials like User Name/User ID and password to verify your identity</p>

                <p>1. Authentication verifies who the user is.	<br />
                    Authorization determines what resources a user can access.
                </p>
                <p>2.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.	<br />
                    Authorization works through settings that are implemented and maintained by the organization.
                </p>
                <p>3. Authentication is visible to and partially changeable by the user.	<br />
                    Authorization isn’t visible to or changeable by the user.
                </p>
            </div>
            <div className='bg-orange-200 p-5 div-2nd'>
                <h1 className='q-title'>Why to use Firebase authentication?</h1>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

                <h1 className='q-title'>Other options do you have to implement authentication?</h1>
                <p>1. Single-Factor/Primary Authentication
                </p>
                <p>2. Two-Factor Authentication (2FA)
                </p>
                <p>3. Single Sign-On (SSO)
                </p>
                <p>4. Multi-Factor Authentication (MFA)
                </p>
            </div>
            <div className='border-l-indigo-500 p-5 div-3rd'>
                <h1 className='q-title'>What other services does firebase provide other than authentication</h1>
                <p>Firebase provides some more services besides authentication.</p>
                <p>* Realtime database</p>
                <small>Data is synced across all clients in realtime and remains available even when an app goes offline.

</small>
                <p>* Cloud Storage</p>
                <small>Firebase Hosting provides fast hosting for a web app; content is cached into content delivery networks worldwide.

</small>
                <p>* Cloud Firestore</p>
                <small>Cloud Firestore is a NoSQL document database that lets you easily store, sync, and query data for your mobile and web apps - at global scale.
</small>
                <p>* Test lab</p>
                <small>The application is tested on virtual and physical devices located in Google’s data centers.

</small>
                <p>* Notifications</p>
                <small>Notifications can be sent with firebase with no additional coding.

</small>
            </div>

        </div>
    );
};

export default Blogs;