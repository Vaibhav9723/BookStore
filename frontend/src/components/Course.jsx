import Cards from "./Cards"
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'

const Course = () => {

  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book")
        console.log("axios output:",res.data)
        setBook(res.data)
      } catch (error) {
        console.log("Error : ",error)
      }
    }
      getBook();
  },[])
  return (
    <>
        <Navbar/>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className="mt-16 item-center justify-center text-center">
            <h1 className="pt-5 text-2xl md:text-4xl">We're delighted to have you <span className="text-purple-500"> Here!</span> :)</h1>
            <p className="my-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem in, non dicta dolorum molestias ipsam velit id, nulla labore quod sit eveniet dolores quos perferendis iste quas laudantium unde praesentium fugiat illum aperiam nisi facere distinctio. Doloribus cupiditate aut, ipsa dolores eligendi vitae impedit necessitatibus velit rem. Repudiandae, ea quidem doloribus, iste suscipit molestiae necessitatibus cumque qui voluptatibus doloremque reiciendis dolores eligendi corrupti error ex recusandae est impedit debitis, id eveniet reprehenderit ipsam unde? Mollitia blanditiis nemo velit possimus quidem.</p>
            <Link to={'/'}>
            <button className="cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 duration-300 mb-6">Back</button>
            </Link>
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {book.map((val)=>{
                return <Cards item={val} key={val.id} />
                })}
            </div>
            
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Course