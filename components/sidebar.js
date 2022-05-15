import { Button, Grid, Tab, Typography } from "@mui/material";
import { useRouter } from "next/dist/client/router";

export default function SideBar({setName}){

    const router = useRouter();

    return <Grid container direction="column" alignContent="center" style={{ maxWidth:"10em",minHeight:"43em"}}>
            <Grid item style={{marginTop:"2em"}}>
                <Button onClick={()=>{setName("ALL BANKS"); router.push('/all_banks')}}>
                    <Typography>All Banks</Typography>
                </Button>
            </Grid>
            <Grid item>
                <Button onClick={()=>{setName("FAVORITES"); router.push('/all_banks')}}>
                    <Typography>Favorites</Typography>
                </Button>
            </Grid>
        </Grid>
}