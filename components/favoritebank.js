import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/dist/client/router';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function FavoriteBanks({next,prev,favoriteArray,setFavoriteBanks}){
    const router = useRouter()
    //console.log(favoriteArray)

    const slicedBanks = favoriteArray && favoriteArray.slice(prev,next)

    return (
        <TableContainer component = {Paper} sx={{width: "116%", height: 600}}>
            <Table sx = {{height: "max-content"}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Like</TableCell>
                        <TableCell>Bank</TableCell>
                        <TableCell>IFSC</TableCell>
                        <TableCell>Branch</TableCell>
                        <TableCell>ID</TableCell>
                        <TableCell>BankID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        slicedBanks.map(
                            (detail,i)=>(
                                <>
                                    <TableRow key = {i} style={{height:"7em"}}>
                                        <TableCell><IconButton onClick={()=>{
                                            if(favoriteArray && favoriteArray.includes(detail)){
                                                setFavoriteBanks((prev) => prev.filter((d) => d!==detail))
                                            }else{
                                                setFavoriteBanks((prev) => {let arr = prev.filter((d)=> d!==detail); arr.push(detail); return arr;})
                                            }
                                            //console.log(favoriteArray)
                                        }} color={(favoriteArray.includes(detail))?"success":"warning"} aria-label="fingerprint" >
                                                        <FavoriteBorderIcon />
                                                    </IconButton>
                                        </TableCell>
                                        <TableCell onClick={()=>router.push('/detail')}>{detail.bank_name}</TableCell>
                                        <TableCell>{detail.ifsc}</TableCell>
                                        <TableCell>{detail.branch}</TableCell>
                                        <TableCell>{detail.bank_id}</TableCell>
                                        <TableCell>{detail.address}</TableCell>
                                    </TableRow>
                                </>
                            )
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )

    
}