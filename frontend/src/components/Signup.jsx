import { Link } from "react-router-dom"
import Login from "./Login"
import { useForm } from "react-hook-form"

const Signup = () => {
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
        <div className='md:border w-100 p-8 rounded md:shadow-xl shadow-purple-500'>
            <Link to={'/'} className="btn btn-sm btn-circle btn-ghost float-end">✕</Link>
            <h2 className="font-bold text-lg">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-4'>
                    <label>Full Name</label>
                    <br />
                    <input type="text" name="fullname" id="fullname" placeholder='Enter your fullname' className='w-full my-1 p-2 outline-none border-2'
                    {...register("fullname", { required: true })} 
                    />
                    {errors.fullname && <span  className="text-red-600">* This field is required</span>}
                </div>
                <div className='mt-4'>
                    <label>Email</label>
                    <br />
                    <input type="email" name="username" id="username" placeholder='Enter your email' className='w-full my-1 p-2 outline-none border-2'
                    {...register("username", { required: true })} 
                    />
                    {errors.username && <span className="text-red-600">* This field is required</span>}
                </div>
                <div className='mt-2'>
                    <label>Password</label>
                    <br />
                    <input type="password" name="password" id="password" placeholder='Enter your password' className='w-full my-1 p-2 outline-none border-2'
                    {...register("password", { required: true })} 
                    />
                    {errors.password && <span className="text-red-600">* This field is required</span>}
                </div>
                <div className='flex justify-between mt-4 items-center'>
                    <button className='bg-purple-500 text-white px-3 py-2 rounded cursor-pointer'>SignUp</button>
                    <label>Have an account? <span onClick={()=> document.getElementById("my_modal_3").showModal()} className='text-blue-500 cursor-pointer'>Login</span></label>
                </div>
            </form>
            <Login/>
        </div>

    </div>
    </>
  )
}

export default Signup