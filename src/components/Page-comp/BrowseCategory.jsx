
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { CgImage } from "react-icons/cg";
import { setSeletedProduct } from '../../store/slices/productsSlice';
import { Link } from 'react-router-dom';

const BrowseCategory = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    const { categories, isCategoriesLoad } = useSelector(state => state.categories)
    function setSelectingFunc(category) {
        const selectingProduct = products.filter(item => item.categoryId === category.id)
        dispatch(setSeletedProduct(selectingProduct))
    }

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div className={` rounded-md ${isCategoriesLoad ? "hidden" : "flex"} w-[40px] h-[40px] absolute top-[-73%] translate-y-[0] right-[0] hover:bg-gray-200 cursor-pointer bg-white  active:scale-95 flex-col items-center justify-center text-[30px] text-black`} onClick={onClick}>
                <MdOutlineKeyboardArrowRight />
            </div>
        )
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div className={`rounded-md ${isCategoriesLoad ? "hidden" : "flex"} w-[40px] h-[40px] absolute top-[-73%] translate-y-[0] right-[50px] hover:bg-gray-200 cursor-pointer bg-white  active:scale-95 flex-col items-center justify-center text-[30px] text-black`} onClick={onClick}>
                <MdKeyboardArrowLeft />
            </div>
        );

    }
    let settings = {
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 330,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                }
            }
        ]
    };
    return (
        <div className='w-full bg-[##FAFAFA] relative py-[80px]'>
            <div className="container ">
                <div className="">
                    <h2 className='text-[24px]'>Browse By Category</h2>
                </div>
                <div className={`mt-[50px] h-[100px] relative flex ${isCategoriesLoad ? "flex-row justify-between  items-center w-full" : "flex-col"}`}>

                    {
                        isCategoriesLoad ?
                            [1, 2, 3, 4, 5, 6].map(item => (
                                <div className="animate-pulse w-[160px] flex flex-col items-center justify-center  p-[10px] mt-[30px] border-[1px] rounded-md bg-[#F9F9F7] ">
                                    <div className="h-[50px] w-full mb-[10px] bg-gray-200 rounded-md flex justify-center items-center text-[24px] text-gray-300 animate-pulse"><CgImage /></div>
                                    <div className="flex flex-col gap-[5px] w-full">
                                        <div className="w-[90%] animate-pulse bg-gray-200 h-[12px] rounded-lg z-[10]"></div>
                                        <div className="w-[90%] animate-pulse bg-gray-200 h-[12px] rounded-lg z-[10]"></div>
                                    </div>
                                </div>
                            )) :
                            <Slider {...settings}>
                                {
                                    categories.map(item => (
                                        <Link key={item.id} to={"/products"} onClick={() => setSelectingFunc(item)}>
                                            <div  key={item.id} className="max-w-[160px] min-w-[120px] cursor-pointer active:scale-95 hover:bg-gray-300 rounded-md bg-[#EDEDED] ">
                                                <div className="h-[120px] flex-col flex items-center justify-center">
                                                    <div className="">
                                                        <img className="max-w-[20px]" src={item.icon} alt="" />
                                                    </div>
                                                    <div className="">
                                                        <p>{item.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </Slider>
                    }
                </div>
            </div>
        </div>
    )
}

export default BrowseCategory