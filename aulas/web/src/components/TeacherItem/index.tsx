import React, { ReactComponentElement, FunctionComponent } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: FunctionComponent<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id,
    })
  }
  
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
        <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboriosam corporis neque natus enim cumque blanditiis nihil esse doloremque a cum error dolore, beatae non eligendi rem suscipit expedita libero!
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost},00</strong>
        </p>
        <a onClick={createNewConnection} href={`https://wa.me/${teacher.whatsapp}?text=Olá%20${teacher.name}%20eu%20gostaria%20de%20estudar%20com%20você`} target="__blank">
          <button type="button">
            <img src={whatsappIcon} alt="WhatsApp"/>
            Entrar em Contato
          </button>
        </a>
      </footer>
    </article>
  )
}


export default TeacherItem

