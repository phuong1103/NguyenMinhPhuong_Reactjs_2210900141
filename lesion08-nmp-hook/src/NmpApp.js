
import './App.css';
import{React , useState} from 'react'
import NmpListProducts from './Components/NmpListProducts';
import NmpProductAddorEdit from './Components/NmpProductAddorEdit';


function NmpApp() {
// mock data
const nmp_Products = [
  {
      nmp_productId:"2210900141"      
     ,nmp_productName:"Nguyễn Minh Phương"      
     ,nmp_quantity:15       
     ,nmp_price:1000
  },
  {
        nmp_productId:"P002"
      , nmp_productName:"IPhone 12"
      , nmp_quantity:20
      , nmp_price:1250
  },
  {
      nmp_productId:"P003"
      , nmp_productName:"IPhone 13"
      ,  nmp_quantity:10
      , nmp_price:1500
  },
]

// sử dụng hàm useState của hook
 const [nmpListProduct,setNmpListProduct] = useState(nmp_Products)


   const nmpHandleSubmit = (nmpProduct)=>{
    console.log("AddOrEdit",nmpProduct);
    //thêm vào nmpListProduct
      setNmpListProduct(nmpPrev =>{
        return[
          ...nmpPrev,
          nmpProduct
        ]
      })

   }
  return (
    <div className="container border mt-5 p-3">
      <h1 className='text-center'> Xử lý chức năng CRUD - Hook</h1>
      <hr/>
      <NmpListProducts renderNmpProducts = {nmpListProduct}/>
      <NmpProductAddorEdit nmpOnSubmit={nmpHandleSubmit}/>
    </div>
  );
}

export default NmpApp;
