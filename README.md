- Add a script tag and visit site cdn node and insert links in index.html and also a link to app.js

- But CDN links is not a good way to bring react to a project  other way is line 28

- How to set up ssh in git in windos

- NPN does not stands for Node Package Manager but works as a Node Package Manager.
- npm init

- package.json is a configuration for NPN.

- Our project depends upon packages and packages depends upon a lot of dependencies and all this is managed by NPN.  What is the version of that package NPN will take care of it.

- We need a bundler to bundle all our code for production. bundlers like wheat,webpack,parcel , etc.

- we will be using parcel to install type      npm install -D parcel

- we can use .gitignore file and type the name of the files in this file of which we do not want to commit. eg /node_modules/

- ^ carret is used to mention to allow minor changes.
- ~ tindle is used to mention to alllow major changes.

# to IGNITE OUR APP 
- WE  need to type      npx parcel index.html

- npx is used to excute packages.

- to install react as a package in a project type    npm install react   and also   npm install react-dom
and now we will have to import react in app.js using    import React from "react" and import ReactDOM from "react-dom"    after this write a attribute       "type=modue" in script tag of index.html  sometimes it even gives an error try deleting .parcel-cache folder nd it will work perfectly fine.

# PARCEL
- DEV BUILD 
- LOCAL SERVER
- HMR = HOT MODULE REPLACEMENT
- FILE WATCHING ALGORITHM WRITTEN IN C++
- CACHING - Faster Builds
- IMAGE OPTIMIZATION
- Minfication
- Bundling
- Compressing
- Consistent Hashing
- Code Splitting
- Differential Bundling (It make sure that our app runs everywhere even on older versions of browsers)
- Diagnostics
- Error handling
- Tree Shaking - Remove unsed code
- Different DEV and Prosduction builts

# to build a production rady app type   npx parcel build index.html    also remove the main line from package.json

# BROWSERS LIST  
- to tell our app to work on which versions of browser. for this 
- you can refer to browserslist.dev
- open package.json and type "browserslist" : ["last 2 versions of chrome", "last 10 Firefox versions" ]

# we can write scripts in package.json file to get rif of writing npx parcel index.html    
- for dev mode write in scripts in package.json   "start":"parcel index.html" , "build" :"parcel build index.html"
- now we can write    npm run <script name>  ex.  npm run start or npm run build.
- there is also a shortcut for start      write   npm start

# We always write Camel Case for attributes in jsx 

# React Components
- Class based Components - Old
- Functional Components - New              It is a function which returns a piece of jsx code.

# Whenever we give inline css in react we give it as java object.

- Props are js object which we can pass in js object in jsx to make things dynamic.
    const RestaurentCard = (props) => {
    return(
        <div >            
            <h3>{props.resName}</h3>
            <h4>{props.cuisines}</h4>
        </div>
    )
}
const Body = () =>{
    return(
        <div >
                <RestaurentCard resName = "Meghana Foods" cuisines="Biryani, North Indian"/>
                <RestaurentCard resName = "KFC" cuisines = "Non-veg"/>
        </div>
    )
}

- we can destructrize object as  //basically it is basic js
const RestaurentCard = ({resName,cuisines}) => {
    return(
        <div >            
            <h3>{resName}</h3>
            <h4>{cuisines}</h4>
        </div>
    )
}

# Read raect file structure.

# React Hooks  -Created by facebook
- (Normal JS Utility Functions)

# useState()   
- Superpowerfull State variable   
- we have import it from react as a named import. 
- It create a state variable which maintains the state of the variable. 
- const [nameofVariable,setFunction] = useState([valueInsideArrayVariable]);
- Never call useStatevariable outside functional component.
- Nevr use useState iside a if else,for loop ,inside functions  it can create inconsistency inside our app.


- it is just destructingof array u can write as:
const arr = useState([valueInsideArrayVariable]);
const [nameofVariable,setFunction] = arr;
or as 
const arr = useState([valueInsideArrayVariable]);
nameofVariable = arr[0];
setFunction = arr[1];

- now use it as a normal variable;
- We cannot update the state variable as a normal variale we need to update that variable using setFunction.
- Whenever a state variable change react will rerender my component.

# useEffect()
- it accepts two parameters first is call back functionn  second is depedency array
- this call back function will be called after your component renders. If it is written in body component the function will be called after body renders.
- the dependecy array changes the behaviour of our useEffect .
- if we omit dependecy array then useEffect is called after every components render.
- if we have empty dependecy array then the useEffect is only called once after initial call of that component.
- if we put something inside dependecy array then it will only be called when dependecy chaanges.
- example if we put a variable is put inside dependecy array then it will only be called when that variable is updated.

# fetch()
This function returns a promise.

# TO CREATE DIFFERENT ROUTES INSIDE OUR APP
- we will be using REACT ROUTER DOM LIBRARY.
- npm install react-router-dom
- Read from Notes.

# 2 Types of Routing
- Client Side Routing - It doest reload whole page , it just change the component that is why it is called single page application.
- Server Side Routing - It reloads the whole page

# Unmounting
- We can add a return statement in useeffect() to give unmount function as
- return ()=>{
    clearinterval(name of function)
}

# We should always follow sngle responsibility principle.

# We should always maintain modularity in our code which means break our code into smal small modules so our code becomes more maintainable amd testable 

# Custom Hooks
- We will be custom hook for fetching data from api.
- const RestaurantMenu = () =>{
    
    const [resInfo,setresInfo] = useState(null);

    const {resId}  = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        //console.log(json.data.cards[2]);
        setresInfo(json.data);
    }

- We will be creating a seperate file inside utils .
- Always start you hook name with use.

const RestaurantMenu = () =>{

    const {resId}  = useParams();

    const resInfo = useRestaurantMenu(resId);

    }

- In that new file write
- const useRestaurantMenu = (resId) => {
    const [resInfo, setresInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setresInfo(json.data);
    };
    
    return resInfo;
}

export default useRestaurantMenu;

# Using Parcel is not always good as it makes our code slow by making a very big file.
 
 - So we will be using the method called chunking (code splitting,dynamic bundling,lazy loading,on demand loadding ,dynamic import) which we bundle our files into small chunks.
- We will be creating seprate bundle for grocery
- If we use Lazy loading then our Grocery code will not there in our main app , it will only be loaded when open it
- We will use something callled lazy() , it is imported from react as a named import.
- const Grocery = lazy(()=>import("./Grocery"));
- Somoetimes it starts giving error while useing lazy loading because it is not able to fetch the component, that fast react is rendering, so we will be using suspense.
- <Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>  fallback is used to show some message when our component is loading.

# Scss and Sass and Style Component
- It give super powers to css.
- It is not used in Production ,or in idustrial level projects.

# There are many frameworks like  Material UI and Ant Design ,chakra UI ,Bootstrap

# We will be using tailwind css.

- npm install -D tailwindcss postcss
- postcss is nothing but a tool that transforms css in js , tailwind uses postcss behind the scene.
- npx tailwindcss init , this will create a tailwind.config.js file.
- now we have to add config file postcss as .postcssrc

- write this in .postcssrc to tell postcss to use tailwind.
{
  "plugins": {
    "tailwindcss": {}
  }
}

- So parcel will use postcss to understand tailwind css.

- now in tailwind.config.js file we  will write to tell where can i use tailwind css.
content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],

- After this in index.css file we will write to import tailwind.
@tailwind base;
@tailwind components;
@tailwind utilities;