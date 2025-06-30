
const Cards = ({item}) => {
    console.log(item)
  return (
    <>
    <div className="mx-5">
    <div className="card bg-base-100 md:my-10 md:w-70 lg:w-70 xl:w-96 shadow-lg hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
        <figure>
            <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.desc}</p>
            <div className="card-actions justify-between">
            <div className="badge badge-outline">₹.{item.price}</div>
            <div className="badge badge-outline px-4 py-3 hover:bg-purple-500 hover:text-white duration-200">Buy Now</div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Cards