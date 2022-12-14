import useId from "../hooks/useId"
import {HomePage} from "../pages/Home"
import { PropertiesPage} from "../pages/Properties"
export const navbar = [
    {id:useId, element:<HomePage/>, title:'Home', path:"/home", private:false, hidden:false},
    {id:useId, element:<PropertiesPage/>, title:'Properties', path:"/properties", private:false, hidden:false},
    {id:useId, element:<h1>Sign In</h1>, title:'Sign In', path:"/signin", private:false, hidden:true},
    {id:useId, element:<h1>Sign Up</h1>, title:'Sign Un', path:"/signup", private:false, hidden:true}


]