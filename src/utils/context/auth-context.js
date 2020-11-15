import React, { createContext } from 'react';
import { auth } from '../services/firebase';


//Membuat Context Api
const AuthContext = createContext();

const SignIn = (email, pass ) => {
	auth.signInWithEmailAndPassword(email, pass)
	.then(()=>{
		console.log('Login Sukses!')
	})
	.catch((error)=>{
		console.log(error)
	})
}

const SignUp = (email, pass ) => {
	auth.createUserWithEmailAndPassword(email, pass)
	.then(()=>{
		console.log('Pendaftaran Sukses!')
	})
	.catch((error)=>{
		console.log(error)
	})
}

const SignOut = ( ) =>{
	auth.signOut()
	.then(()=>{
		console.log('Keluar!')
	})

	.catch((error)=>{
		console.log(error)
	})
}

const SendEmailVerification = () => {
	auth.currentUser.sendEmailVerification()
	.then(()=> console.log('Email Terkirim!'))
	.catch((err) => console.log(err))
}

const SendPasswordResetEmail = (emailAddress) => {
	auth.currentUser.sendPasswordResetEmail(emailAddress)
	.then(()=>{
		console.log('Send password to email sukses!');
	})
	.catch(err => console.log(err))
}

const DeleteCurrentUser = () =>{
	auth.currentUser.delete()
	.then(()=>{
		console.log('User telah di hapus!')
	})

	.catch(err=> console.log(err))
}

const ChangeLanguage = (id) =>{
	auth.languageCode(id)
	// auth.useDeviceLanguage()
}

const UpdatePassword = (newPassword) =>{
	auth.currentUser.updatePassword(newPassword)
	.then(()=>console.log('update password sukses!'))
	.catch(err=> console.log(err))
}

const UpdateEmail = (newEmail) =>{
	auth.currentUser.updateEmail(newEmail)
	.then(()=>console.log('update email sukses!'))
	.catch(err => console.log(err))
}

const UpdateProfile = (name, photo) =>{
	auth.currentUser.updateProfile({
		displayName : name,
		photoURL : photo
	})
}

const UpdateWithRandomPassword = (newPassword) =>{
	var passwordNew = btoa(newPassword);
	auth.currentUser.updatePassword(passwordNew)
	.then(()=>console.log('update password sukses!'))
	.catch(err=> console.log(err))
}

const ReauthenticateUser = ()=>{
	var credential;
	auth.currentUser.reauthenticateWithCredentital(credential)
	.then(()=> console.log('Reauthenticate User Success!'))
	.catch(err => console.log(err))
}

const ProviderLoginData = () => {
	auth.currentUser.providerData.forEach(profile=>{
		console.log(`Sign in Provider ${profile.providerId}`)
		console.log(`Provider Spesific UID ${profile.uid}`)
		console.log(`Name ${profile.displayName}`)
		console.log(`Email ${profile.email}`)
		console.log(`Photo URL ${profile.photoURL}`)
	})
}

// Membuat Provider Context API
const AuthContextProvider = ({children}) => {

	return(
		<AuthContext.Provider value={{
			SignIn, SignUp, SignOut, auth, SendEmailVerification,
			SendPasswordResetEmail, DeleteCurrentUser, ChangeLanguage,
			UpdatePassword, UpdateWithRandomPassword, ReauthenticateUser, UpdateEmail,
			UpdateProfile, ProviderLoginData
		}}>
			{children}
		</AuthContext.Provider>
	)
}




export { AuthContextProvider, AuthContext }