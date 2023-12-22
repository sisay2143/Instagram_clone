import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks'
import { auth } from '../firebase/firebase'

const useSignupWithEmailandPassword = () => {
    const [
        creatUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth)

    const signup = async() => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    return {loading,error, signup}
      
  return (
      {}
  )
}

export default useSignupWithEmailandPassword