import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser, signInGoogle } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((u) => {
                console.log(u.user);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleRegisterGoogle = () => {
        signInGoogle()
            .then((result) =>{
                console.log(result.user);
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <a onClick={handleRegisterGoogle} className="btn btn-primary mt-4">Google</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;