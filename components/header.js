import Input from './inputField';
import { TextField, Grid } from '@mui/material';

export default function Header({setCity,setCategoryType,setCategory}){

    const cityList = ['Alirajpur', 'Anuppur', 'Ashok Nagar', 'Balaghat', 'Barwani', 'Betul', 'Bhind', 'Bhopal', 'Burhanpur', 'Chhatarpur', 'Chhindwara', 'Damoh', 
    'Datia', 'Dewas', 'Dhar', 'Dindori', 'Guna', 'Gwalior', 'Harda', 'Hoshangabad', 'Indore', 'Jabalpur', 'Jhabua', 'Katni', 'Khandwa (East Nimar)', 'Mandla', 
    'Mandsaur', 'Morena', 'Narsinghpur', 'Neemuch', 'Panna', 'Rewa', 'Rajgarh', 'Ratlam', 'Raisen', 'Sagar', 'Satna', 'Sehore','Seoni', 'Shahdol', 'Shajapur', 
    'Sheopur', 'Shivpuri', 'Sidhi', 'Singrauli', 'Tikamgarh', 'Ujjain', 'Umaria', 'Vidisha','Ahmednagar', 'Akola', 'Amravati', 
    'Aurangabad', 'Bhandara', 'Beed', 'Buldhana', 'Chandrapur', 'Dhule', 'Gadchiroli', 'Gondia', 'Hingoli', 'Jalgaon', 'Jalna', 'Kolhapur', 'Latur', 'Mumbai-City', 
    'Mumbai suburban', 'Nandurbar', 'Nanded', 'Nagpur', 'Nashik', 'Osmanabad', 'Parbhani', 'Pune', 'Raigad', 'Ratnagiri', 'Sindhudurg', 'Sangli', 'Solapur', 'Satara', 
    'Thane', 'Wardha', 'Washim', 'Yavatmal',
    ]

    const categoryList = ['IFSC','Branch','Bank Name']

    const handleText = (e) => {
        setCategory(e.target.value)
    }

    return <>
        <Grid container direction = "row">
            <Input name="City" setFunction = {setCity} options={cityList}/>
            <Input name="Category" setFunction = {setCategoryType} options={categoryList}/>
            <TextField label="Search" variant="standard" onChange={handleText} style={{marginTop:"0.5em"}}/>
        </Grid>
        
    </>
}