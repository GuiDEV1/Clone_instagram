import { Post } from '../Post';
import { Story } from '../Story';
import { Suggestion } from '../Suggestion';
import './style.css';


export function Layout() {


    return (
        <>

  <div className='MainGrid'>

     <div className='first-Column' style={{gridArea: "firstColumn"}}>

         <div className="box">
                <Story />
          </div>

          <div className="box" style={{margin: "18px 0"}}>
                <Post />
          </div>

     </div>    

      
          <div className="suggestionBox" style={{gridArea: "secondColumn"}}>
                <Suggestion />
          </div>

    </div>
         
        </>
    )
}