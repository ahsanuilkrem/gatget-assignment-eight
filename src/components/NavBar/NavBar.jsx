
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import 'react-tabs/style/react-tabs.css';



const NavBar = () => {

  const location = useLocation().pathname

  const isActive = (path) => location === path;

  const loadData = location.split('/')
  // console.log(loadData)
  const category = ['Laptops', 'Phones', 'Accessories',]
  const detail = location.split('/')
  // console.log(detail)
  const dashboard = 'product/:product_id';





  return (


    <div className={isActive('/') ? 'bg-violet-700 rounded-2xl text-white pb-40 relative ' : 'bg-violet-700 rounded-2xl text-white pb-20 relative'}>
      <div className="navbar px-10 ">

        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='statistics'>Statistics</NavLink></li>
              <li><NavLink to='/dashboard' >Dashboard</NavLink></li>

            </ul>
          </div>
          <a className=" text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 ">
            <li className='mr-10'><NavLink className={({ isActive }) => `${isActive ? 'text-yellow-50' : 'hover:text-warning'}`} to='/'>Home</NavLink></li>
            <li className='mr-10'><NavLink to='statistics'>Statistics</NavLink></li>
            <li className='mr-10'><NavLink to='dashboard'>Dashboard</NavLink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <p className="bg-white p-3 text-black rounded-full mr-2"><IoCartOutline /></p>
          <p className='bg-white p-3 text-black  rounded-full'><FaRegHeart /></p>
        </div>

      </div>


      <div>
        {
          location === "/" && <div className='text-center space-y-7  py-8 pb-20 mt-7 text-white'>
            <h2 className='text-5xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
            <p className='text-base font-normal'>Explore the latest gadgets that will take your experience to the next level.
              From smart devices <br /> to the coolest accessories, we have it all!</p>
            <button className='text-xl font-bold btn bg-slate-50 text-fuchsia-400 border-2 border-fuchsia-400 rounded-full px-5'>Shop Now</button>

          </div>
        }
      </div>


      <div>
        {
          category.includes(loadData[2]) && <div className='text-center space-y-7  py-8 pb-20 mt-7 text-white'>
            <h2 className='text-5xl font-bold'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h2>
            <p className='text-base font-normal'>Explore the latest gadgets that will take your experience to the next level.
              From smart devices <br /> to the coolest accessories, we have it all!</p>
            <button className='text-xl font-bold btn bg-slate-50 text-fuchsia-400 border-2 border-fuchsia-400 rounded-full px-5'>Shop Now</button>

          </div>
        }
      </div>


      <div>
        {
          location !== '/' && location !== '/dashboard' && location !== '/statistics' 
          && location !== '/dashboard/carts' &&  location !== '/dashboard/wishlist' &&
           <div className='text-center space-y-7  py-8 pb-20 mt-7 text-white'>
            <h2 className='text-3xl font-bold'>Product Details</h2>
            <p className='text-base font-normal'>Explore the latest gadgets that will take your experience to the next level.
              From smart devices to the coolest accessories, we have it all!</p>

          </div>
        }
      </div>
        {/* Dashboard */}
      <div>
        {
          location === '/dashboard' &&  <div className='text-center space-y-7   mt-7 text-white'>
            <h2 className='text-white text-3xl font-bold'>Dashboard</h2>
            <p className='text-base font-normal'>Explore the latest gadgets that will take your experience to the next level.
              From smart devices to the coolest accessories, we have it all!</p>
            <div className='flex justify-center items-center  gap-5'>
                <Link to='/dashboard/carts'>
                <button className=' btn rounded-full px-16  text-lg font-bold'>Cart</button>
                </Link>
                <Link to='/dashboard/wishlist'>
                <button className=' btn rounded-full px-16 text-lg font-semibold'>Wishlist</button>
                </Link>
              

            </div>
          </div>
        }
      </div>
        {/* carts */}
      <div>
        {
          location === '/dashboard/carts' &&  <div className='text-center space-y-7   mt-7 text-white'>
            <h2 className='text-white text-3xl font-bold'>Dashboard</h2>
            <p className='text-base font-normal'>Explore the latest gadgets that will take your experience to the next level.
              From smart devices to the coolest accessories, we have it all!</p>
            <div className='flex justify-center items-center  gap-5'>
                <Link to='/dashboard/carts'>
                <button className=' btn rounded-full px-16  text-lg font-bold'>Cart</button>
                </Link>
                <Link to='/dashboard/wishlist'>
                <button className=' btn rounded-full px-16 text-lg font-semibold'>Wishlist</button>
                </Link>
              

            </div>
          </div>
        }
      </div>
      
      {/* wishlist  */}

       <div>
        {
          location === '/dashboard/wishlist' &&  <div className='text-center space-y-7   mt-7 text-white'>
            <h2 className='text-white text-3xl font-bold'>Dashboard</h2>
            <p className='text-base font-normal'>Explore the latest gadgets that will take your experience to the next level.
              From smart devices to the coolest accessories, we have it all!</p>
            <div className='flex justify-center items-center  gap-5'>
                <Link to='/dashboard/carts'>
                <button className=' btn rounded-full px-16  text-lg font-bold'>Cart</button>
                </Link>
                <Link to='/dashboard/wishlist'>
                <button className=' btn rounded-full px-16 text-lg font-semibold'>Wishlist</button>
                </Link>
              

            </div>
          </div>
        }
      </div>  

    </div>

  );
};

export default NavBar;


