using SE_WebAPI.Domains;
using System.Collections.Generic;

namespace SE_WebAPI.Interfaces
{
    public interface ICategoriaRepository
    {
        List<Categoria> ListarCategorias();
        void CadastrarCategoria(Categoria categoria);
        void DeletarCategoria(int idCategoria);
        Categoria ListarPorId(int idCategoria);
    }
}
