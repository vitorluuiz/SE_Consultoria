using SE_WebAPI.Domains;
using System.Collections.Generic;

namespace SE_WebAPI.Interfaces
{
    public interface IUsuarioRepository
    {
        List<Usuario> ListarUsuarios();
        bool CadastrarUsuario(Usuario usuario);
        void RemoverUsuario(int idUsuario);
        Usuario ListarPorId(int idUsuario);
    }
}
