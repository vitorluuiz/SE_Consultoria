using Microsoft.EntityFrameworkCore;
using SE_WebAPI.Contexts;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SE_WebAPI.Repositories
{
    public class TiposAnuncioRepository : ITiposAnuncioRepository
    {
        SEContext ctx = new SEContext(); 
        public bool CadastrarTiposAnuncio(TiposAnuncio tipoAnuncio)
        {
            TiposAnuncio tentativaCadastro =  ctx.TiposAnuncios.FirstOrDefault(t => t.TipoAnuncio == tipoAnuncio.TipoAnuncio);

            if(tentativaCadastro == null)
            {
                ctx.TiposAnuncios.Add(tipoAnuncio);
                ctx.SaveChanges();
                return true;
            }
            return false;
        }

        public void DeletarTiposAnuncio(byte idTipoAnuncio)
        {
            ctx.TiposAnuncios.Remove(ctx.TiposAnuncios.FirstOrDefault(t => t.IdTipoAnuncio == idTipoAnuncio));
            ctx.SaveChanges();
        }

        public List<TiposAnuncio> ListarTiposAnuncio()
        {
            return ctx.TiposAnuncios
                .AsNoTracking()
                .ToList();
        }
    }
}
