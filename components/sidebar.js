import { Button, Grid, Tab, Typography } from "@mui/material";
import { useRouter } from "next/dist/client/router";

export default function SideBar(){

    const router = useRouter();

    return <Grid container direction="column" alignContent="center" style={{ maxWidth:"10em",minHeight:"43em", borderWidth:"3px",borderInlineColor:"red"}}>
            <Grid item style={{marginTop:"2em"}}>
                <Button onClick={()=>router.push('/all_banks')}>
                    <Typography>All Banks</Typography>
                </Button>
            </Grid>
            <Grid item>
                <Button>
                    <Typography>Favorites</Typography>
                </Button>
            </Grid>
        </Grid>
}