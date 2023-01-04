using Microsoft.EntityFrameworkCore;
using SE_WebAPI.Contexts;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using SE_WebAPI.Utils;
using System.Collections.Generic;
using System.Linq;

namespace SE_WebAPI.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        SEContext ctx = new SEContext();
        public bool CadastrarUsuario(Usuario usuario)
        {
            Usuario tentativaCadastro = ctx.Usuarios.FirstOrDefault(u => u.Celular == usuario.Celular);

            if(tentativaCadastro == null)
            {
                usuario.Senha = Criptografia.CriptografarSenha(usuario.Senha);
                ctx.Usuarios.Add(usuario);
                ctx.SaveChanges();
                return true;
            }
                return false;
        }

        public Usuario ListarPorId(int idUsuario)
        {
            return ctx.Usuarios
                .AsNoTracking()
                .FirstOrDefault(u => u.IdUsuario == idUsuario);
        }

        public List<Usuario> ListarUsuarios()
        {
            return ctx.Usuarios
                .AsNoTracking()
                .ToList();
        }

        public Usuario Login(string celular, string senha)
        {
            Usuario tentativaLogin = ctx.Usuarios.FirstOrDefault(u => u.Celular == celular);

            if (tentativaLogin != null)
            {
                bool isValidPassword = Criptografia.CompararSenha(senha, tentativaLogin.Senha);

                if (isValidPassword)
                {
                    return tentativaLogin;
                }
            }
            return null;
        }

        public void RemoverUsuario(int idUsuario)
        {
            ctx.Usuarios.Remove(ListarPorId(idUsuario));
            ctx.SaveChanges();
        }
    }
}
