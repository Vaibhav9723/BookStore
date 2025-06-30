import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Login = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog" onSubmit={handleSubmit(onSubmit)}> 
                <Link to={'/'} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                
                <h3 className="font-bold text-lg">Login</h3>
                <div className='mt-4'>
                    <label>Email</label>
                    <br />
                    <input type="email" name="email" id="email" placeholder='Enter your email' className='w-full my-1 p-2 outline-none border-2'
                    {...register("email", { required: true })} 
                    />
                    {errors.email && <span className="text-red-600">* This field is required</span>}
                </div>
                <div className='mt-2'>
                    <label>Password</label>
                    <br />
                    <input type="password" name="pass" id="pass" placeholder='Enter your password' className='w-full my-1 p-2 outline-none border-2'
                    {...register("pass", { required: true })} 
                    />
                    {errors.pass && <span className="text-red-600">* This field is required</span>}
                </div>
                <div className='flex justify-between mt-4 items-center'>
                    <button className='bg-purple-500 text-white px-3 py-2 rounded cursor-pointer'>Login</button>
                    <label>Don't have an account? <Link to={'/signup'} className='text-blue-500 cursor-pointer'>SignUp</Link></label>
                </div>
                </form>
            </div>
        </dialog>
    </div>
    </>
  )
}

export default Login