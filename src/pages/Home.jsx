import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import Menu from '../components/Menu'

const Home = () => {
  // const dispatch = useDispatch();

  // const token = useSelector(state => state.main.token);

  return <Menu>
    <div style={{padding: "20px"}}>
      <h1>EM CONSTRUÇÃO!</h1>
      <br />
      <h3>Lista de funcionalidades</h3>
      <p><strong>HOME: </strong>Irá mostrar os pacientes por ordem cronológica de necessidade de nova aplicação.</p>
      <p>Exemplo: </p>
      <p><strong>Lucas Araújo </strong><br />
          Última aplicação: 23/10/2020 <br />
          Próxima aplicação: 30/10/2020</p>
      <p><strong>Mariana Santos </strong><br />
      Última aplicação: 25/10/2020 <br />
      Próxima aplicação: 02/10/2020 </p>
      <p><strong>COLABORADORES: </strong>Mostra todos os colaboradores cadastrados no projeto, com seus respectivos dados. Apenas o professor é capaz de adicionar um novo colaborador. </p>
      <p><strong>PACIENTES: </strong>Até então mostra todos os pacientes cadastrados no tratamento. Cada paciente tem sua ficha, com todas as informações necessárias. Qualquer pessoa é capaz de adicionar um novo paciente.
            Para cadastrar um novo paciente, apenas é necessário clicar no botão com um “+”. <br /><br />
            <strong>AINDA EM CONSTRUÇÃO: </strong>A página de pacientes também contará com um espaço para adicionar as aplicações feitas nos pacientes, este que terá um espaço para colocar por quem foi feita a aplicação, quando foi feita, quando será necessário ser eita novamente, um quadro de observações e também será possível adicionar as fotos necessárias.</p>

    </div>
  </Menu>;
};

export default Home;
