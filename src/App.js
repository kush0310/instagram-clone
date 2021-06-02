import React, {useState} from 'react';
import './App.css';
import Post from './Post';


function App() {
  const [posts, setPosts] = useState([
    {
      username:"kush0310" ,
      caption: "wow what a day" ,
      imageUrl: "https://wallpaperaccess.com/full/26984.jpg"
    },
    {
      username:"urboikid" ,
      caption: "yoo wass up" ,
      imageUrl: "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ]);

  return (
    <div className="App">
     
      
      <div className="app__header"> 
          <img className= "app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
          />
      
    

    

       <Post username="kush0310" caption= "wow what a day" imageUrl= "https://wallpaperaccess.com/full/26984.jpg"/>  
       <Post username= "urboikid" caption= "yoo wass up" imageUrl= "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/> 
       <Post/> 

      
    </div>
      {/*header*/}

      {/*post*/}
      {/*post*/}
      {/*post*/}
    </div>
    
  );
}

export default App;
