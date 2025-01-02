import bannerimg  from '../../assets/image/banner.jpg'

const Banner = () => {
    return (
            <div className=' absolute -mt-[660px] border-cyan-100  p-4 rounded-2xl '>
            <img className='w-2/3  mx-auto  rounded-xl' src={bannerimg} alt="" srcset="" />  

            </div>
    );
};

export default Banner;