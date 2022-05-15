import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/dist/client/router';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function Banks({banks,city,categoryType,category,next,prev,favoriteArray}){
    const router = useRouter()
    console.log(city+" "+category)

    const requiredBanks = banks.filter((detail) => {
                if(city == ""){
                    if(categoryType == ""){
                        
                        return detail
                    }
                    else if(categoryType == "IFSC" && detail.ifsc.toLowerCase().includes(category)){
                        return detail
                    }
                    else if(categoryType == "Branch" && detail.branch.toLowerCase().includes(category.toLowerCase())){
                        return detail
                    }
                    else if(categoryType == "Bank Name" && detail.bank_name.toLowerCase().includes(category.toLowerCase())){
                        return detail
                    }
                }else{
                    if(detail.city.toLowerCase().includes(city.toLowerCase())){
                        if(categoryType == ""){
                        
                            return detail
                        }
                        else if(categoryType == "IFSC" && detail.ifsc.toLowerCase().includes(category.toLowerCase())){
                            return detail
                        }
                        else if(categoryType == "Branch" && detail.branch.toLowerCase().includes(category.toLowerCase())){
                            return detail
                        }
                        else if(categoryType == "Bank Name" && detail.bank_name.toLowerCase().includes(category.toLowerCase())){
                            return detail
                        }
                    }
                }
            })

    const slicedBanks = requiredBanks.slice(prev,next)

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
                                        <TableCell><FavoriteBorderIcon /></TableCell>
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