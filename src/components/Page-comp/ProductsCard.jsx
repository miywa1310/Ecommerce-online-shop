import { BsHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalf } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setFavouriteItem } from "../../store/slices/productsSlice";
import { useNavigate } from "react-router-dom";

const ProductsCard = ({ item }) => {
    const { favourite } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    function setDetailProduct() {
        navigate(`/products/${item?.slug}-${item.id}`)
    }
    function addToFavourite(item) {
        dispatch(setFavouriteItem(item))
    }
    function NameFunction(name) {
        let miniName = ""
        if (name.length > 23) {
            for (let i = 0; i < 20; i++) {
                miniName += name[i]
            }
            miniName += "..."
        } else {
            miniName = name
        }
        return miniName
    }
    function checkItemRate(count) {
        const rateStar = []
        for (let i = 1; i <= 5; i++) {
            if (i <= +count?.toFixed()) {
                if (i - 0.4 >= +count) {
                    rateStar.push(0.5)
                }
                else {
                    rateStar.push(1)
                }
            } else {
                rateStar.push(0)
            }
        }
        return rateStar
    }
    const rateStar = checkItemRate(item?.rating)

    return (
        <div className='border shadow-md h-full py-[20px] rounded-md flex flex-col justify-between items-center gap-[10px] sm:w-full '>
            <div onClick={() => addToFavourite(item)} className="cursor-pointer px-[20px] w-full flex justify-end items-end text-[25px] text-[#919191C4]">
                {
                    favourite.find(favItem => favItem.id === item.id) ? <BsHeartFill className="text-red-500" /> : <BsHeart />
                }
            </div>
            <img className="h-[175px] w-[150px] object-contain" src={item.images[0]} alt="" />
            <div className=" w-full flex justify-center flex-col items-center">
                <p className="px-[20px] text-[20px] font-medium">{NameFunction(item.name)}</p>
                <div className="flex justify-center items-end  gap-1">
                    <div className="flex justify-center  text-[20px] text-yellow-400 gap-1">
                        {rateStar.map((item, index) => {
                            switch (item) {
                                case 1:
                                    return (
                                        <AiFillStar key={index} />
                                    )
                                case 0.5:
                                    return (
                                        <FaStarHalf key={index} />
                                    )
                                case 0:
                                    return (
                                        <AiOutlineStar key={index} />
                                    )
                            }
                        })}
                    </div>
                </div>
            </div>
            <h2 className="text-[24px] font-bold">${item.price}</h2>
            <button onClick={()=>setDetailProduct()} className="btn max-w-max bg-black text-white text-[18px]">Buy Now</button>
        </div>
    )
}

export default ProductsCard