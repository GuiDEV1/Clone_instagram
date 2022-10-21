import './style.css';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';




export function Post3 () {
    return (
        <>
          <header className='header-post'>
            
            <div className="infos-post">
                  <img className='img-header-post' src="https://cdn.discordapp.com/attachments/773372240686350356/1033047969110429767/25038603_139164630096090_4671410420601323520_n.jpg" />

                  <p>capcomgermany</p>
            </div>

                   <FiMoreHorizontal />
          </header>

          <div className='img-post'>
              <img src='https://cdn.discordapp.com/attachments/773372240686350356/1033051704972812298/9bcf1504a0a2056ccb5aa3ba1e9f3111.jpg'/>
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
                <span>100,295 curtidas</span>  
          </section>

          <div className='legend'>
              <p>
                 <strong>capcomgermany</strong> Check out new trailer for resident evil 4 remake, it's amazing!! ❤️❤️❗
              </p>
          </div>

              <div className='time-post'>
                  <time>1 hora atrás</time>
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