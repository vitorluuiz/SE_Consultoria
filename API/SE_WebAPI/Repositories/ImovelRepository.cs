using Microsoft.EntityFrameworkCore;
using SE_WebAPI.Contexts;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SE_WebAPI.Repositories
{
    public class ImovelRepository : IImovelRepository
    {
        SEContext ctx = new SEContext();
        public void AprovarImovel(int idImovel)
        {
            Imovei imovelDesatualizado = ListarPorId(idImovel);
            imovelDesatualizado.IdAprovacao = 1;
            ctx.Update(imovelDesatualizado);
            ctx.SaveChanges();
        }

        public void AtualizarImovel(int idImovel, Imovei imovelAtualizado)
        {
            Imovei imovelDesatualizado = ctx.Imoveis.Find(idImovel);
            imovelDesatualizado = imovelAtualizado;
            ctx.Update(imovelDesatualizado);
            ctx.SaveChanges();
        }

        public void DeletarImovel(int imovel)
        {
            ctx.Imoveis.Remove(ListarPorId(imovel));
            ctx.SaveChanges();
        }

        public List<Imovei> ListarImoveis()
        {
            return ctx.Imoveis
                .AsNoTracking()
                .Include(i => i.InformacoesAdicionais)
                .Include(i => i.IdCategoriaNavigation)
                .Include(i => i.IdTipoAnuncioNavigation)
                .ToList();
        }

        public List<Imovei> ListarPorAprovacao(short idAprovacao)
        {
            return ctx.Imoveis
                .Where(i => i.IdAprovacao == idAprovacao)
                .AsNoTracking()
                .Include(i => i.InformacoesAdicionais)
                .Include(i => i.IdCategoriaNavigation)
                .Include(i => i.IdTipoAnuncioNavigation)
                .ToList();
        }

        public Imovei ListarPorId(int idImovel)
        {
            return ctx.Imoveis
                .Include(i => i.InformacoesAdicionais)
                .FirstOrDefault(i => i.IdImovel == idImovel);
        }

        public void NegarImovel(int idImovel)
        {
            Imovei imovelDesatualizado = ListarPorId(idImovel);
            imovelDesatualizado.IdAprovacao = 2;
            ctx.Update(imovelDesatualizado);
            ctx.SaveChanges();
        }

        public void SugerirImovel(Imovei imovel)
        {
            imovel.IdAprovacao = 3;
            ctx.Imoveis.Add(imovel);
            ctx.SaveChanges();
        }
    }
}
