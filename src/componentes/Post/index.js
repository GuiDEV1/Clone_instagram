import './style.css';
import { FiMoreHorizontal, FiSend } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsChat, BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';




export function Post () {
    return (
        <>
          <header className='header-post'>
            
            <div className="infos-post">
                  <img className='img-header-post' src="https://cdn.discordapp.com/attachments/773372240686350356/1028772480141234186/logo_instituto_proa.jpg" />

                  <p>Instituto Proa</p>
            </div>

                   <FiMoreHorizontal />
          </header>

          <div className='img-post'>
              <img src='https://cdn.discordapp.com/attachments/773372240686350356/1029531849300652082/post_intan.png'/>
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
                <span>500 curtidas</span>  
          </section>

          <div className='legend'>
              <p>
                 <strong>instituto.proa</strong> 😱 Quer estudar e trabalhar com programação? Essa é a sua oportunidade!👾...
              </p>
          </div>

              <div className='time-post'>
                  <time>Há 2 HORAS</time>
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