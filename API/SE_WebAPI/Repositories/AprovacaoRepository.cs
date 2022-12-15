using Microsoft.EntityFrameworkCore;
using SE_WebAPI.Contexts;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace SE_WebAPI.Repositories
{
    public class AprovacaoRepository : IAprovacaoRepository
    {
        SEContext ctx = new SEContext();
        public void CadastrarAprovacao(Aprovacao aprovacao)
        {
            ctx.Aprovacaos.Add(aprovacao);
            ctx.SaveChanges();
        }

        public void DeletarAprovacao(int idAprovacao)
        {
            ctx.Aprovacaos.Remove(ListarPorId(idAprovacao));
            ctx.SaveChanges();
        }

        public List<Aprovacao> ListarAprovacoes()
        {
            return ctx.Aprovacaos
                .AsNoTracking()
                .ToList();
        }

        public Aprovacao ListarPorId(int idAprovacao)
        {
            return ctx.Aprovacaos.Find(idAprovacao);
        }
    }
}
