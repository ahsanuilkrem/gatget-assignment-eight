import toast from "react-hot-toast";



const getStoredReadList = () =>{

    const storedListStr = localStorage.getItem('favorites');
    console.log(storedListStr)
    if(storedListStr){
        const storedlist = JSON.parse(storedListStr);
        return storedlist;

    }
    else{
        return[];
    }

}

const addproducts = (id) => {
    const storedlist = getStoredReadList();
    if(storedlist.includes(id)){
        console.log(id, 'already exists')
       

    
    }
    else{
        storedlist.push(id);
        const storedListStn = JSON.stringify(storedlist);
        localStorage.setItem('favorites', storedListStn)
        toast.success('Successfully add products!');

    }
}


const getStoredWishList = ()  => {

    const storedWishlistStr = localStorage.getItem('wish-list');
    if(storedWishlistStr){
        const storedwishList = JSON.parse(storedWishlistStr);
        return storedwishList;
    }
    else{
    return [];
    }

}

const addStoredWishlist = (id) => {
    const storedwishList = getStoredWishList();
    if(storedwishList.includes(id)){
        console.log(id, 'already exists')
    }
    else{
        storedwishList.push(id);
        const storedWishlistStr = JSON.stringify(storedwishList);
        localStorage.setItem('wish-list', storedWishlistStr);
        toast.success('Successfully add products!');
    }
}





export { addproducts, getStoredReadList , addStoredWishlist, getStoredWishList}


