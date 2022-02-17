import { useLocation, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

function OAuth() {
    const navigate = useNavigate()
    const location = useLocation()

    const onGoogleClick = async () => {
        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user

            // Getting the user from the google sign in and passing the user id in to see if we have a reference of it
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)

            // Checks to see if user is in database, if it doesn't, create it
            if(!docSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp()
                })
            }
            navigate('/')
        } catch (error) {
            toast.error('Could not authorize with Google')
        }
    }

  return (
    <div className='socialLogin'>
        <p>Sign {location.pathname === '/sign-up' ? 'up ' : ' in '}
        with 
        </p>
        <button className="socialIconDiv" onClick={onGoogleClick}>
            <img className="socialIconImg" src={googleIcon} alt="" />
        </button>
    </div>
  )
}

export default OAuth