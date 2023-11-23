import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth =getAuth(app);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
const signIn = (email, password) =>{
    return signInWithEmailAndPassword (auth,email,password);
}

const authInfo = {
    user,
    signIn
}

}