import {useState} from 'react'

function Home({res}) {

  const [text, setText] = useState("")
  const [city, setCity] = useState("")

  return (
    <>
    {!res && <p>Loading</p>}
    <input placeholder='Search...' onChange={(e) => setCity(e.target.value)}/>
    {/* <input placeholder='Search...' onChange={(e) => setText(e.target.value)}/> */}
    <input placeholder='Search...' onChange={(e) => setText(e.target.value)}/>
    <table>
      <tr>
        <th>Bank Name</th>
        <th>IFSC</th>
        <th>Branch</th>
        <th>ID</th>
        <th>Address</th>
      </tr>
      
        {

        res.filter((val) => {
          if(text == ""){
            if(city == ""){
              return val
            }else if(val.branch.toLowerCase().includes(city.toLowerCase())){
              return val;
            }
          }else{
            {/* console.log("branch "+val.branch.toLowerCase());
            console.log("b "+city.toLowerCase()) */}
            if(val.bank_name.toLowerCase().includes(text.toLowerCase())){
              if(city == ""){
                return val
              }else if(val.branch.toLowerCase().includes(city.toLowerCase())){
              return val;
              }
            }
          }
        }).map((val,i) => {return <>
        <tr key = {i}>
        <td>{val.bank_name}</td>
        <td>{val.ifsc}</td>
        <td>{val.branch}</td>
        <td>{val.bank_id}</td>
        <td>{val.address}</td>
        </tr>
        </>})
        
        }
      
    </table>
    </>
  )
}

export async function getServerSideProps(){

  let arr = []

  const res = await fetch("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI");
  const data = await res.json();
  //console.log(data)
  console.log("Calling")

  return {
    props: {
      res: data
    }
  }
}

export default Home;
