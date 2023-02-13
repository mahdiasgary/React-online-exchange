import Navigation from "../navigation/Navigation";
import homeIgame from "../../assets/home.png";
import { RiDashboardFill } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";
import { Dropdown, Space, Table } from "antd";
import btsImage from "../../assets/bts.png";
import eteImage from "../../assets/eter.png";
import hezImage from "../../assets/hez.png";
import adaImage from "../../assets/ada.png";
import trxImage from "../../assets/trx.png";
// bitcoin,tron,ethereum,shiba-inu,cardano
import "./home.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    amt: 10,
  },
  {
    name: 'Page B',
    amt: 15,
  },
  {
    name: 'Page C',
    amt: 40,
  },
  {
    name: 'Page D',
    amt: 0,
  },
  {
    name: 'Page E',
    amt: 12,
  },
  {
    name: 'Page F',
    amt: 36,
  },
  {
    name: 'Page G',
    amt: 5,
  },
  
];


const ars = [
  {
    name: "بیت کوین",
    name2: "BTS",
    price: 120,
    change: 2 / 6,
    graph: "dsf",
    buy: "خرید",
    sold: "فروش",
    imgUrl: "../../assets/bts.png",
  },
  {
    name: "اتریوم",
    name2: "ETH",
    price: 120,
    change: 2 / 6,
    graph: "dsf",
    buy: "خرید",
    sold: "فروش",
    imgUrl: "../../assets/eter.png",
  },
  {
    name: "هزار شیبا",
    name2: "SHIB",
    price: 120,
    change: 2 / 6,
    graph: "dsf",
    buy: "خرید",
    sold: "فروش",
    imgUrl: "../../assets/hez.png",
  },
  {
    name: "کاردانو",
    name2: "ADA",
    price: 120,
    change: 2 / 6,
    graph: "dsf",
    buy: "خرید",
    sold: "فروش",
    imgUrl: "../../assets/ada.png",
  },
  {
    name: "ترون",
    name2: "TRX",
    price: 120,
    change: 2 / 6,
    graph: "dsf",
    buy: "خرید",
    sold: "فروش",
    imgUrl: "../../assets/trx.png",
  },
];
const items = [
  {
    key: '1',
    // label: 'خرید',
    label : <Link to={"/df"}>خرید</Link>

  },
  {
    key: '2',
    label : <Link to={"/df"}>فروش</Link>
  },
];

const Home = () => {
  const [widthScreen , setWidthScreen] = useState(window.innerWidth);
  const [irtOrUsdt , setIrtOrUsdt]=useState("it")

  console.log('width: ', window.innerWidth);
  // const { height, width } = useWindowSize();

  useEffect(()=>{
    window.addEventListener('resize',()=>setWidthScreen(window.innerWidth));
    
    return(() => {
        window.removeEventListener('resize', ()=>setWidthScreen(window.innerWidth));
    })

  } , [widthScreen])
  
  const dataSource1 = [
    {
      key: "1",
      name: (
        <div className="flex">
          <div>
            <img src={btsImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher">بیت کوین</div>
            <div className="font-bold text-[15px] ">BTS</div>
          </div>
        </div>
      ),
      price: 32,
      change: "10 Downing Street",
      graph: 
      <div className="w-[140px] h-[40px] ">
      <ResponsiveContainer width={"100%"} height={"100%"}  >

      <LineChart width={300} height={100} data={data} >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          {/* <Tooltip wrapperStyle={{backgroundColor :"red"}}/> */}
          {/* <Legend /> */}
        <Line  type="monotone" dataKey="amt" stroke="#784ed1" strokeWidth={"2px"} activeDot={{ r: 4 }} dot={{r : 2}} />
      </LineChart>

        </ResponsiveContainer>
      </div>
        ,
      buySold : <div className="border rounded-md max-w-[160px] h-[36px] flex justify-center text-[#00aea4] hover:text-body hover:bg-[#00aea4] hover:rounded-lg duration-200 text-[15px] border-[#00aea4] "> <span className="self-center">خرید و فروش</span> </div>

    },
    {
      key: "2",
      name: (
        <div className="flex">
          <div>
            <img src={eteImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher"> اتریوم </div>
            <div className="font-bold text-[15px] ">ETH</div>
          </div>
        </div>
      ),
      price: 32,
      change: "10 Downing Street",
      graph:  <div className="w-[140px] h-[40px] ">
      <ResponsiveContainer width={"100%"} height={"100%"}  >

      <LineChart width={300} height={100} data={data} >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          {/* <Tooltip wrapperStyle={{backgroundColor :"red"}}/> */}
          {/* <Legend /> */}
        <Line  type="monotone" dataKey="amt" stroke="#784ed1" strokeWidth={"2px"} activeDot={{ r: 4 }} dot={{r : 2}} />
      </LineChart>

        </ResponsiveContainer>
      </div>,
      buySold : <div className="border rounded-md max-w-[160px] h-[36px] flex justify-center text-[#00aea4] hover:text-body hover:bg-[#00aea4] hover:rounded-lg duration-200 text-[15px] border-[#00aea4] "> <span className="self-center">خرید و فروش</span> </div>

    },
    {
      key: "3",
      name: (
        <div className="flex">
          <div>
            <img src={hezImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher"> هزار شیبا </div>
            <div className="font-bold text-[15px] ">SHIB</div>
          </div>
        </div>
      ),
      price: 32,
      change: "10 Downing Street",
      graph:  <div className="w-[140px] h-[40px] ">
      <ResponsiveContainer width={"100%"} height={"100%"}  >

      <LineChart width={300} height={100} data={data} >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          {/* <Tooltip wrapperStyle={{backgroundColor :"red"}}/> */}
          {/* <Legend /> */}
        <Line  type="monotone" dataKey="amt" stroke="#784ed1" strokeWidth={"2px"} activeDot={{ r: 4 }} dot={{r : 2}} />
      </LineChart>

        </ResponsiveContainer>
      </div>,
      buySold : <div className="border rounded-md max-w-[160px] h-[36px] flex justify-center text-[#00aea4] hover:text-body hover:bg-[#00aea4] hover:rounded-lg duration-200 text-[15px] border-[#00aea4] "> <span className="self-center">خرید و فروش</span> </div>

    },
    {
      key: "4",
      name: (
        <div className="flex">
          <div>
            <img src={adaImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher"> کاردانو </div>
            <div className="font-bold text-[15px] ">ADA</div>
          </div>
        </div>
      ),
      price: 32,
      change: "10 Downing Street",
      graph:  <div className="w-[140px] h-[40px] ">
      <ResponsiveContainer width={"100%"} height={"100%"}  >

      <LineChart width={300} height={100} data={data} >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          {/* <Tooltip wrapperStyle={{backgroundColor :"red"}}/> */}
          {/* <Legend /> */}
        <Line  type="monotone" dataKey="amt" stroke="#784ed1" strokeWidth={"2px"} activeDot={{ r: 4 }} dot={{r : 2}} />
      </LineChart>

        </ResponsiveContainer>
      </div>,
      buySold : <div className="border rounded-md max-w-[160px] h-[36px] flex justify-center text-[#00aea4] hover:text-body hover:bg-[#00aea4] hover:rounded-lg duration-200 text-[15px] border-[#00aea4] "> <span className="self-center">خرید و فروش</span> </div>

    },
    {
      key: "5",
      name: (
        <div className="flex">
          <div>
            <img src={trxImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher"> ترون </div>
            <div className="font-bold text-[15px] ">TRX</div>
          </div>
        </div>
      ),
      price: 32,
      change: "10 Downing Street",
      graph:  <div className="w-[140px] h-[40px] ">
      <ResponsiveContainer width={"100%"} height={"100%"}  >

      <LineChart width={300} height={100} data={data} >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      {/* <XAxis dataKey="name" /> */}
          {/* <YAxis /> */}
          {/* <Tooltip wrapperStyle={{backgroundColor :"red"}}/> */}
          {/* <Legend /> */}
        <Line  type="monotone" dataKey="amt" stroke="#784ed1" strokeWidth={"2px"} activeDot={{ r: 4 }} dot={{r : 2}} />
      </LineChart>

        </ResponsiveContainer>
      </div>,
      buySold : <div className="border rounded-md max-w-[160px] h-[36px] flex justify-center text-[#00aea4] hover:text-body hover:bg-[#00aea4] hover:rounded-lg duration-200 text-[15px] border-[#00aea4] "> <span className="self-center">خرید و فروش</span> </div>

    },
    
  ];
  const dataSource2 = [
    {
      key: "1",
      name: (
        <div className="flex">
          <div>
            <img src={btsImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher">بیتff کوین</div>
            <div className="font-bold text-[15px] ">BTS</div>
          </div>
        </div>
      ),
      price: 
      <div className="flex flex-col">
        <div className="text-[12px] text-textTher ">قیمت</div>
        <div>3600</div>
          </div>,
      change: <div>+0/05</div>,
    },
    {
      key: "2",
      name: (
        <div className="flex">
          <div>
            <img src={eteImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher"> اتریوم </div>
            <div className="font-bold text-[15px] ">ETH</div>
          </div>
        </div>
      ),
      price: 32,
      change: "10 Downing Street",
    },
    {
      key: "3",
      name: (
        <div className="flex">
          <div>
            <img src={hezImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher"> هزار شیبا </div>
            <div className="font-bold text-[15px] ">SHIB</div>
          </div>
        </div>
      ),
      price: 32,
      change: "10 Downing Street",
    },
    {
      key: "4",
      name: (
        <div className="flex">
          <div>
            <img src={adaImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher"> کاردانو </div>
            <div className="font-bold text-[15px] ">ADA</div>
          </div>
        </div>
      ),
      price: 32,
      change: "10 Downing Street",
    },
    {
      key: "5",
      name: (
        <div className="flex">
          <div>
            <img src={trxImage} alt="" className="w-[36px] ml-2" />{" "}
          </div>
          <div>
            <div className="text-[12px] text-textTher"> ترون </div>
            <div className="font-bold text-[15px] ">TRX</div>
          </div>
        </div>
      ),
      price: 32,
      change: "10 Downing Street",
    },
    
  ];

  const columns = [
    {
      title: "نام",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "آخرین قیمت",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "تغییر  24h",
      dataIndex: "change",
      key: "change",
    },
    {
      title: <div>نمودار هفتگی</div>,
      dataIndex: "graph",
      key: "graph",
    },
    {
      title: "",
      dataIndex: "buySold",
      key: "buySold",
    },
  

  ];
    const columns2 = [
    {
      title: "نام",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "آخرین قیمت",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "تغییر  24h",
      dataIndex: "change",
      key: "change",
    }
    ,  {
      title: '',
      dataIndex: 'operation',
      key: 'operation',
      render: () => (
          <Dropdown
            menu={{
              items,
            }}
          >

            <div className="cursor-pointer flex justify-end text-[12px] ">
              <SlOptionsVertical/> 
            </div>
          </Dropdown>
      ),
    },

  ];

  return (
    <div>
      <div className=" shadow-md">
        <Navigation />
      </div>
      <div className=" flex flex-col justify-center">
        <div className="mt-10 md:mt-16 lg:mt-20 flex flex-col">
          <span className="self-center font-semibold text-[22px] md:text-[29px] lg:text-[42px]  ">
            {" "}
            خرید و فروش امن بیت کوین و ارزهای دیجیتال
          </span>
          <span className="self-center text-[15px] md:text-[19px] lg:text-[26px] ">
            به بزرگ ترین بازار ارز دیجیتال ایران بپیوندید{" "}
          </span>

          <div className="self-center flex mt-10">
            <div className="ml-2">
              <button
                className="w-[110px] h-[36px] bg-pramery text-body rounded-sm hover:rounded-md hover:bg-[#6132c7]
               duration-300   "
              >
                ثبت نام
              </button>
            </div>
            <div>
              <button
                className="w-[110px] h-[36px]  border  border-pramery py-1 rounded-sm hover:rounded-md hover:bg-[#6132c7] text-[#6132c7] hover:text-body
               duration-300   "
              >
                ورود
              </button>
            </div>
          </div>

          <div className="self-center mt-10 ">
            <button
              className="bg-pramery px-7 text-body py-2 self-center rounded-sm hover:rounded-md hover:bg-[#6132c7]
               duration-300 shadow-lg "
            >
              {" "}
              <RiDashboardFill className="inline mx-1 self-center " />
              ورودبه پنل{" "}
            </button>
          </div>
        </div>
<div className="relative ">


        <div className=" mx-2">
          <div>
            <img
              src={homeIgame}
              alt=""
              className=" "
            />
          </div>
          <div className="mx-2 md:mx-8 relative top-[-40px] y9:top-[-64px] sm:top-[-80px] md:top-[-120px] lg:top-[-135px] xl:top-[-200px]  ">

          <div className="relative z-10  flex justify-between  md:w-[375px] h-[52px] px-3 pt-3 bg-[#fafafa] rounded-t-md ">
            <div className="text-[12px] xl:text-[15px] self-center ">
              انتخاب بازار بر اساس
            </div>
            <div 
            onClick={(e)=>{e.preventDefault() ; setIrtOrUsdt("irt")}}
            className="flex text-[12px] md:text-[15px] ">
              <div className={irtOrUsdt==="irt" ? "cursor-pointer w-[81px] h-[24px] md:w-[100px] md:h-[36px] flex justify-center text-[#ffffff] bg-[#85888f] rounded-r-md " :
            "cursor-pointer w-[81px] h-[24px] md:w-[100px] md:h-[36px] flex justify-center rounded-r-md bg-[#e3e5e8] text-textTher "
            } >
                <button>تومان IRT</button>
              </div>
              <div 
              onClick={(e)=>{setIrtOrUsdt("u")}}
className={irtOrUsdt!=="irt" ? "cursor-pointer w-[81px] h-[24px] md:w-[100px] md:h-[36px] flex justify-center text-[#ffffff] bg-[#85888f] rounded-l-md " :
"cursor-pointer w-[81px] h-[24px] md:w-[100px] md:h-[36px] flex justify-center rounded-l-md bg-[#e3e5e8] text-textTher "
}>
                <button

                >تتر USDT</button>
              </div>
            </div>
          </div>
          <div>
            <Table
            
              dataSource={widthScreen>768 ? dataSource1 : dataSource2}
              columns={widthScreen>768 ? columns : columns2}
              pagination={false}
            />
          </div>
            ;
          </div>
        </div>
</div>
      </div>
    </div>
  );
};

export default Home;
