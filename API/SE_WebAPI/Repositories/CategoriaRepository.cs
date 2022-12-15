using Microsoft.EntityFrameworkCore;
using SE_WebAPI.Contexts;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SE_WebAPI.Repositories
{
    public class CategoriaRepository : ICategoriaRepository
    {
        SEContext ctx = new SEContext();
        public void CadastrarCategoria(Categoria categoria)
        {
            ctx.Categorias.Add(categoria);
            ctx.SaveChanges();
        }

        public void DeletarCategoria(int idCategoria)
        {
            ctx.Categorias.Remove(ListarPorId(idCategoria));
            ctx.SaveChanges();
        }

        public List<Categoria> ListarCategorias()
        {
            return ctx.Categorias
                .AsNoTracking()
                .ToList();
        }

        public Categoria ListarPorId(int idCategoria)
        {
            return ctx.Categorias.Find(idCategoria);
        }
    }
}
