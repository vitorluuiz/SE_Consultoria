using Microsoft.EntityFrameworkCore;
using SE_WebAPI.Contexts;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SE_WebAPI.Repositories
{
    public class InformacoesAdicionaisRepository : IInformacoesAdicionaisRepository
    {
        SEContext ctx = new SEContext();
        public void CadastrarInfosDeImovel(short idImovel, List<InformacoesAdicionai> infos)
        {
            infos.ForEach(i => i.IdImovel = idImovel);
            ctx.InformacoesAdicionais.AddRange(infos);
            ctx.SaveChanges();
        }

        public bool CadastrarInfoUnica(InformacoesAdicionai info)
        {
            if (VerificarDisponibilidade(info))
            {
                ctx.InformacoesAdicionais.Add(info);
                ctx.SaveChanges();
                return true;
            }
            return false;
        }

        public void DeletarInfosDeImovel(short idImovel)
        {
            ctx.InformacoesAdicionais.RemoveRange(ctx.InformacoesAdicionais.Where(i => i.IdImovel == idImovel));
            ctx.SaveChanges();
        }

        public List<InformacoesAdicionai> ListarDeImovel(short idImovel)
        {
            return ctx.InformacoesAdicionais
                .Where(i => i.IdImovel == idImovel)
                .Include(i => i.IdTipoInfoNavigation)
                .ToList();
        }

        public void RemoverInfoDeImovel(int idImovel, int idTipoInfo)
        {
            ctx.InformacoesAdicionais.Remove(ctx.InformacoesAdicionais.FirstOrDefault(i => i.IdImovel == idImovel && i.IdTipoInfo == idTipoInfo));
            ctx.SaveChanges();
        }

        public bool VerificarDisponibilidade(InformacoesAdicionai info)
        {
            InformacoesAdicionai tentativa = ctx.InformacoesAdicionais.FirstOrDefault(i => i.IdImovel == info.IdImovel && i.IdTipoInfo == info.IdTipoInfo);
            
            if(tentativa== null)
            {
                return true;
            }
            return false;
        }
    }
}
