import Rebase from 're-base';
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAoupD809058sAtSKmFt9vJGSf0GF4-uLA",
    authDomain: "meatislifeepam.firebaseapp.com",
    databaseURL: "https://meatislifeepam.firebaseio.com",
    projectId: "meatislifeepam",
    storageBucket: "meatislifeepam.appspot.com",
    messagingSenderId: "605086263263"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;