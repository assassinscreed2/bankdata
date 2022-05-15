import {useState} from 'react'
import Banks from '../../components/banks'
import Header from '../../components/header'

function AllBanks({res,error}) {
  const [category, setCategory] = useState("")
  const [categoryType,setCategoryType] = useState("")
  const [city, setCity] = useState("")
  const [next,setNext] = useState(10)
  const [prev,setPrev] = useState(0)

  const increment = () => {
    setNext((prev)=>prev+10)
    setPrev((prev)=>prev+10)
  }
  const decrement = () => {
    setNext((prev)=>prev-10)
    setPrev((prev)=>prev-10)
  }

  return (
    <>
    {
      error === false ? 
      <>
        <Header setCity={setCity} setCategoryType={setCategoryType} setCategory={setCategory}/>
        <Banks banks={res} city={city} categoryType={categoryType} category={category} prev={prev} next={next}/>
        <button onClick={()=>decrement()}>pev</button>
        <button onClick={()=>increment()}>Next</button>
      </>:
      <h1>Something Went Wrong</h1>
    }
    </>
  )
}

export async function getServerSideProps(){

  let arr = []
  let error = false

  try{
    const res = await fetch("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI");
    arr = await res.json();
  }catch(e){
    error = true;
  }
  

  return {
    props: {
      res: arr,
      error: error
    }
  }
}

export default AllBanks;


// ifsc: 'ALLA0212703',
//     bank_id: 11,
//     branch: 'NERUL',
//     address: 'NERUL BRANCH,SHOP NO CJ9, HAWARE CENTURIAN COMPLEX, SECTOR-19, APNA BAZAR, NERUL EAST, NAVI MUMBAI-400 705',
//     city: 'MUMBAI',
//     district: 'GREATER BOMBAY',
//     state: 'MAHARASHTRA',
//     bank_name: 'ALLAHABAD BANK'