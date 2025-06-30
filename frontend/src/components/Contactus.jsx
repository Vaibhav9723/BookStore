import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar/>
    <div className='flex h-screen items-center justify-center'>
        <div className='md:border w-100 p-8 rounded md:shadow-xl shadow-purple-500'>
            {/* <Link to={'/'} className="btn btn-sm btn-circle btn-ghost float-end">✕</Link> */}
            <h2 className="font-bold text-lg">Contact Us</h2>
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
                    <label>Message</label>
                    <br />
                    <textarea className="w-full h-20 my-1 p-2 outline-none border-2" placeholder="Type your message" name='message' id='message'
                    {...register("message", { required: true })} >
                    </textarea>
                    {errors.message && <span className="text-red-600">* This field is required</span>}
                </div>
                <div className='flex justify-between mt-2 items-center'>
                    <button className='bg-purple-500 text-white px-3 py-2 rounded cursor-pointer'>Submit</button>
                    {/* <label>Have an account? <span onClick={()=> document.getElementById("my_modal_3").showModal()} className='text-blue-500 cursor-pointer'>Login</span></label> */}
                </div>
            </form>
        </div>

    </div>
    </>
  )
}

export default Contactus