import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
