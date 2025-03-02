import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa o Link do React Router
import axios from "axios";
import '../App.css'

function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
 
  const handleCadastro = async () => {
    if(!nome || !email || !senha) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/cadastro', {
        nome, email, senha,
      });

      setMensagem("Cadastro realizado com sucesso!");
      console.log("Cadastro realizado:", response.data);

      // 🔹 Limpando os estados
      setNome("");
      setEmail("");
      setSenha("");

    } catch(error) {
      setMensagem('Erro no cadastro.');
      console.error('Erro no cadastro: ', error);
    }
  }  

  return (
    <div className="container-cad">
        <div className="mb-3">        
            <input type="text" className="form-control" placeholder='Nome:' value={nome} onChange={(e) => setNome(e.target.value)} />
            <input type="email" className="form-control" placeholder='E-mail:' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="form-control" placeholder='Senha:' value={senha} onChange={(e) => setSenha(e.target.value)} />

            <div className='d-flex justify-content-center'>
              <button onClick={handleCadastro} className="btn btn-primary w-100">Cadastrar</button>
            </div>
            {mensagem && <p>{mensagem}</p>}
            <Link to="/login">Tem cadastro? Clique aqui para LOGAR!</Link>        
        </div>
    </div>
  )
}

export default Cadastro
