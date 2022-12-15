using Microsoft.EntityFrameworkCore;
using SE_WebAPI.Contexts;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SE_WebAPI.Repositories
{
    public class TipoInfoRepository : ITipoInfoRepository
    {
        SEContext ctx = new SEContext();
        public bool CadastrarTipoInfo(TipoInfo tipoInfo)
        {
            TipoInfo tentativaCadastro = ctx.TipoInfos.FirstOrDefault(t => t.TipoInfo1 == tipoInfo.TipoInfo1);

            if(tentativaCadastro == null)
            {
                ctx.TipoInfos.Add(tipoInfo);
                ctx.SaveChanges();
                return true;
            }
            return false;
        }

        public void DeletarTipoInfo(int idTipoInfo)
        {
            ctx.TipoInfos.Remove(ctx.TipoInfos.FirstOrDefault(t => t.IdTipoInfo == idTipoInfo));
            ctx.SaveChanges();
        }

        public List<TipoInfo> ListarTiposInfo()
        {
            return ctx.TipoInfos
                .AsNoTracking()
                .ToList();
        }
    }
}
