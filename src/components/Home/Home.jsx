import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories";



const Home = () => {

    const  loadCategory = useLoaderData()
   

   


    return (
        <div>
            <Banner></Banner>

        
           <div className="mt-[520px]">
            
           <h2 className="text-2xl font-bold text-center mb-14">Explore Cutting-Edge Gadgets</h2>
            <div className="flex gap-10 max-w-7xl mx-auto ml-4">
                <div className="">
                <Categories loadCategory={loadCategory}></Categories>
                </div>
                <div className="">
                    <Outlet></Outlet>
                </div>
             </div>
            
            </div>         
        

        </div>
    );
};

export default Home;