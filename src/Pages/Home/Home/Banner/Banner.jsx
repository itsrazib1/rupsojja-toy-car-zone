import img1 from '../../../../../public/img/bpic1.jpg'
import img2 from '../../../../../public/img/bpic2.jpg'
import img3 from '../../../../../public/img/bpic3.jpg'
import img4 from '../../../../../public/img/bpic4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full rounded-lg ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />
          
          <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <button className="hidden md:flex text-white font-bold py-2 px-4 rounded">

            <a
              href="#slide4"
              className="btn  hover:bg-green-700 hover:opacity-100 hover:text-white bg-slate-100 opacity-50  text-black  btn-square rotate-180 me-5"
            >
              ➜
            </a>
            </button>
            <button className="hidden md:flex text-white font-bold py-2 px-4 rounded">

            <a
              href="#slide2"
              className="btn  hover:bg-green-700 hover:opacity-100 hover:text-white bg-slate-100 opacity-50  text-black btn-square"
            >
              ➜
            </a>
            </button>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          
          <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <button className="hidden md:flex text-white font-bold py-2 px-4 rounded">

            <a
              href="#slide1"
              className="btn hover:bg-green-700 hover:opacity-100 hover:text-white bg-slate-100 opacity-50  text-black btn-square rotate-180 me-5"
            >
              ➜
            </a>
            </button>
            <button className="hidden md:flex text-white font-bold py-2 px-4 rounded">

            <a
              href="#slide3"
              className="btn hover:bg-green-700 hover:opacity-100 hover:text-white bg-slate-100 opacity-50  text-black btn-square"
            >
              ➜
            </a>
            </button>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          
          <div className="absolute flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0">
            <button className="hidden md:flex text-white font-bold py-2 px-4 rounded">

            <a
              href="#slide2"
              className="btn hover:bg-green-700 hover:opacity-100 hover:text-white bg-slate-100 opacity-50  text-black btn-square rotate-180 me-5"
            >
              ➜
            </a>
            </button>
            <button className="hidden md:flex text-white font-bold py-2 px-4 rounded">

            <a
              href="#slide4"
              className="btn hover:bg-green-700 hover:opacity-100 hover:text-white bg-slate-100 opacity-50  text-black btn-square"
            >
              ➜
            </a>
            </button>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          
          <div className="absolute  flex justify-center  transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <button className="hidden md:flex text-white font-bold py-2 px-4 rounded">
            <a
              href="#slide3"
              className=" btn btn-square hover:bg-green-700 hover:opacity-100 hover:text-white bg-slate-100 opacity-50  text-black  rotate-180 me-5 "
            >
              ➜
            </a>
            </button>
           <button className="hidden md:flex text-white font-bold py-2 px-4 rounded">

            <a
              href="#slide1"
              className="btn hover:bg-green-700 hover:opacity-100 hover:text-white bg-slate-100 opacity-50  text-black btn-square"
            >
              ➜
            </a>
           </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;