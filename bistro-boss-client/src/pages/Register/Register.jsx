import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from '../../Firebase/firebase.config';
const auth = getAuth(app);

const Register=()=>{
    const handleRegister= event =>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;
        console.log(email,password);
// create user in firebase
createUserWithEmailAndPassword (auth,email,password)
.then(result =>{
    const loggedUser= result.user;
    console.log(loggedUser);
    event.target.reset();
})
.catch(error =>{console.error(error.message);

})
    }
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Register"></input>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;