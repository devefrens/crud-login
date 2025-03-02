import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css'

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate(); // Usando o hook useNavigate para redirecionamento

    const handleLogin = async () => {
        if(!email || !senha) {
            setMensagem("Preencha todos os campos.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/login', { email, senha });

            setMensagem(response.data.message);
            console.log("Login bem-sucedido:", response.data);
            
            // Aqui você pode fazer algo, como redirecionar o usuário para a página principal.
            navigate("/usuarios"); // Redireciona para a página /usuarios após o login

        } catch(error) {
            setMensagem('Erro no Login.');
            console.error('Erro no Login: ', error)
        }
    }  

    return (
        <div className="container-log">
            <div className="mb-3">
                <input type="email" 
                    className="form-control"
                    placeholder='E-mail:' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />

                <input type="password" 
                    className="form-control" 
                    placeholder='Senha:' 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)} 
                />

                <button onClick={handleLogin} className="btn btn-primary">Login</button>
                {mensagem && <p>{mensagem}</p>}
                {/* <Link to="/login">Tem cadastro? Clique aqui para LOGAR!</Link>         */}
            </div>
        </div>
    )
}

export default Login
