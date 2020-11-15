import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyD2xB7yRg7Uf0kbPimP3qx78bbsJVjZoyI",
	authDomain: "spedi-academy.firebaseapp.com",
	databaseURL: "https://spedi-academy.firebaseio.com",
	projectId: "spedi-academy",
	storageBucket: "spedi-academy.appspot.com",
	messagingSenderId: "345655921983",
	appId: "1:345655921983:web:0539d6d730f2a0dc87178a",
	measurementId: "G-KD0TVCH153"
}

const db = firebase.initializeApp(config).database();
const auth = firebase.auth();
const storage = firebase.storage();
const firestore = firebase.firestore();

export { db, auth, storage, firestore }