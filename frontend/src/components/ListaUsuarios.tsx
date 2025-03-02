import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 🔥 Importando o useNavigate

interface Usuario {
    id: number;
    nome: string;
    email: string;
    senha: string;
}

function ListaUsuario() {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const navigate = useNavigate(); // 🔥 Criando o navigate

    useEffect(() => {
        axios
        .get('http://localhost:3000/cadastro')
        .then((response) => {
            console.log(response.data);
            setUsuarios(response.data);
        })
        .catch((error) => {
            console.error('Erro ao buscar usuário: ', error);
        })
    }, []);

    return (
        
        <div className="container">
            <h2>Lista de Usuários</h2>
            {/* 🔥 Botão para voltar para Home */}
            <button onClick={() => navigate('/')} className="btn btn-primary" >
                Voltar para Home
            </button>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">E-mail</th>
                        <th scope="col">Senha</th>
                    </tr>                    
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nome}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.senha}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )    
}

export default ListaUsuario
