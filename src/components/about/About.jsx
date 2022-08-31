import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {RiCodeBoxLine} from 'react-icons/ri'
import {TbSchool} from 'react-icons/tb'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Conheça mais</h5>
      <h2>Sobre Mim</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
              <article className='about__card'>
                <RiCodeBoxLine className='about__icon'/>
                <h5>Experiência</h5>
                <small>+3 anos desenvolvedor</small>
              </article>

              <article className='about__card'>
                <TbSchool className='about__icon'/>
                <h5>Educação</h5>
                <small>Engenharia de Computação</small> <br/>
                <small>Análise e Desenv. Sistemas</small>              
              </article>

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Prêmio</h5>
                <small>Inova Paula Souza 2014</small>
              </article>
            </div>
            <p>
            Desenvolvedor Full-Stack e mobile com experiência em banco de dados relacionais e NoSQL. Experiência em construção de APIs restful, DevOps e infraestrutura. Atuo com Linux há mais de 10 anos e possuo conhecimento em Cloud Computing.
            </p>

            <a href='#contact' className='btn btn-primary'>Vamos Conversar</a>
          </div>
      </div>
    </section>
  )
}

export default About