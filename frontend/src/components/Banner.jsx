import banner from '../../public/Banner.jpg'

const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='mt-12 md:mt-32 w-full md:w-1/2 order-2 md:order-1'>
            <div className='space-y-6 md:space-y-12 flex flex-col'>
                <h1 className='text-4xl font-bold'>Hello, welcomes here to learn something <span className='text-purple-500'>new everyday!!!</span> </h1>
                <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa repudiandae deserunt veniam! Aut perferendis soluta sequi reprehenderit, consectetur ipsa fugit voluptatum suscipit vitae! Quae et voluptates iusto at, enim velit molestias labore nisi similique esse.</p>
                <label className="input validator  dark:bg-slate-900 dark:text-white dark:border-2 dark:border-amber-100">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" placeholder="mail@site.com" required />
                </label>
<div className="validator-hint hidden">Enter valid email address</div>
                <button className="btn w-30 bg-purple-500 text-white">Secondary</button>
            </div>
        </div>
        <div className='w-full md:w-1/2 order-1'>
        <img src={banner} alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner