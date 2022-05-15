import {Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';

export default function BankDetail({ifsc, id, branch, address, city, district, state, bankname}){

const details = [
    ["IFSC",ifsc], ["ID",id], ["Branch",branch], ["Address",address], ["City",city], ["District",district], ["State",state], ["Bank Name",bankname]
]

 return <>
    <Typography variant="h4" style={{marginBottom:"1em",marginLeft:"9em"}}>
        Bank Details
    </Typography>
     <TableContainer component = {Paper} >
        <Table >
            <TableBody>
                {
                details.map((detail) => 
                    <TableRow>
                        <TableCell style={{}}>
                            <Typography>
                                {detail[0]}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography>
                                {detail[1]} 
                            </Typography>
                        </TableCell>
                    </TableRow>
                        )
                }
            </TableBody>
        </Table>
    </TableContainer>
 </>

}