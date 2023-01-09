using Microsoft.EntityFrameworkCore;
using SE_WebAPI.Contexts;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using SE_WebAPI.Utils;
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

        public void DeletarImovel(short imovel)
        {
            ImgRepository imgRepository = new ImgRepository();

            foreach(string caminho in imgRepository.ListarCaminhos(imovel))
            {
                Upload.RemoverArquivo(caminho);

            }
            imgRepository.DeletarCaminhos(imovel);
            Upload.RemoverArquivo(ctx.Imoveis.FirstOrDefault(i => i.IdImovel == imovel).ImgPrincipal);
            ctx.Imoveis.Remove(ctx.Imoveis.FirstOrDefault(i => i.IdImovel == imovel));
            ctx.InformacoesAdicionais.RemoveRange(ctx.InformacoesAdicionais.Where(i => i.IdImovel == imovel));
            ctx.SaveChanges();
        }

        public List<Imovei> ListarImoveis()
        {
            return ctx.Imoveis
                .AsNoTracking()
                .Include(i => i.InformacoesAdicionais)
                .Include(i => i.IdCategoriaNavigation)
                .Include(i => i.IdTipoAnuncioNavigation)
                .Include(i => i.DbImgs)
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
                .Include(i => i.DbImgs)
                .ToList();
        }

        public List<Imovei> ListarPorAprovacao(
            short idAprovacao,
            short idTipoAnuncio,
            short idTipoPropriedade,
            string bairro
            )
        {
            if(bairro == null)
            {
            return ctx.Imoveis
                .Where(i =>
                i.IdAprovacao == idAprovacao && 
                i.IdTipoAnuncio == idTipoAnuncio || i.IdTipoAnuncio == 3 &&
                i.IdCategoria == idTipoPropriedade
                )
                .AsNoTracking()
                .Include(i => i.InformacoesAdicionais)
                .Include(i => i.DbImgs)
                .ToList();
            }
            else
            {
                return ctx.Imoveis
                .Where(i =>
                i.IdAprovacao == idAprovacao &&
                i.IdTipoAnuncio == idTipoAnuncio || i.IdTipoAnuncio == 3 &&
                i.IdCategoria == idTipoPropriedade &&
                i.Bairro == bairro
                )
                .AsNoTracking()
                .Include(i => i.InformacoesAdicionais)
                .Include(i => i.DbImgs)
                .ToList();
            }   
        }

        public List<Imovei> ListarPorAprovacao(int idAprovacao, int idTipoAnuncio)
        {
            return ctx.Imoveis
                .Where(i => i.IdAprovacao == idAprovacao && i.IdTipoAnuncio == idTipoAnuncio || i.IdTipoAnuncio == 3)
                .Include(i => i.InformacoesAdicionais)
                .Include(i => i.DbImgs)
                .ToList();
        }

        public List<Imovei> ListarPorBairro(string bairro, int idException)
        {
            return ctx.Imoveis
                .Where(i => i.Bairro == bairro && i.IdImovel != idException)
                .AsNoTracking()
                .Include(i => i.InformacoesAdicionais)
                .Include(i => i.IdCategoriaNavigation)
                .Include(i => i.IdTipoAnuncioNavigation)
                .Include(i => i.DbImgs)
                .ToList();
        }

        public Imovei ListarPorId(int idImovel)
        {
            return ctx.Imoveis
                .Include(i => i.InformacoesAdicionais)
                .Include(i => i.DbImgs)
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
