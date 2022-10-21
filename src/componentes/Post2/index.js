import './style.css';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';




export function Post2 () {
    return (
        <>
          <header className='header-post'>
            
            <div className="infos-post">
                  <img className='img-header-post' src="https://cdn.discordapp.com/attachments/773372240686350356/1033044850230169710/54204715_314412572609109_8550112162037628928_n.jpg" />

                  <p>tobey_maguire</p>
            </div>

                   <FiMoreHorizontal />
          </header>

          <div className='img-post'>
              <img src='https://cdn.discordapp.com/attachments/773372240686350356/1033045543548624937/261175314_872570656767534_26769037523477581_n.jpg'/>
          </div>

          <div className='footer-post'>
          <IconContext.Provider value={{ size: "30px"}}>
             
            <section className='engagement-post'>

              <div className='icons-1'>

                <div className='icon'>  <IoMdHeartEmpty /> </div>
                <div className='icon'>  <BsChat /> </div>
                <div className='icon'>  <FiSend /> </div>

              </div>

              <div className='icon'>  <BsBookmark /> </div>

            </section>
          </IconContext.Provider>  

          <section className='like'>
                <span>88,295 curtidas</span>  
          </section>

          <div className='legend'>
              <p>
                 <strong>tobey maguire</strong> lovely news for the Tobey Maguire fans: after 7 years, Tobey shall be returning to the big screen!
              </p>
          </div>

              <div className='time-post'>
                  <time>novembro 25 2021</time>
              </div>

              <div className='comment'>
                   
                   <div className='fake-comment'>

                   <IconContext.Provider value={{ size: "25px"}}>
                      <div className='icon'>
                        <BsEmojiSmile />
                      </div>
                    </IconContext.Provider>

                    <input placeholder='Adicione um comentário...' />

                   </div>

                   <button>Publicar</button>

              </div>

            
          </div>

          

          

        </>
    )
}