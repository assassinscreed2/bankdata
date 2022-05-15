import {useState} from 'react'
import Banks from '../../components/banks'
import Header from '../../components/header'
import { Grid } from '@mui/material'
import FavoriteBanks from '../../components/favoritebank'

function AllBanks({res,error,name}) {
  const [category, setCategory] = useState("")
  const [categoryType,setCategoryType] = useState("")
  const [city, setCity] = useState("")
  const [next,setNext] = useState(10)
  const [prev,setPrev] = useState(0)
  const [favoriteBanks,setFavoriteBanks] = useState([])

  console.log(name)
 // debugger

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
        <Grid container style={{marginLeft:"2em",paddingBottom:"1em",paddingTop:"1em"}} direction = "row" justifyContent="space-between"i>
            <Grid item>
                <h3>{name}</h3>
            </Grid>
            <Grid item style={{marginLeft:"4em"}}>
                <Header setCity={setCity} setCategoryType={setCategoryType} setCategory={setCategory}/>
            </Grid>
        </Grid>
        <Banks banks={res} city={city} categoryType={categoryType} category={category} prev={prev} next={next}
              favoriteArray={favoriteBanks} setFavoriteBanks={setFavoriteBanks} />
        <FavoriteBanks favoriteArray={favoriteBanks} setFavoriteBanks={setFavoriteBanks} prev={prev} next={next}/>
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