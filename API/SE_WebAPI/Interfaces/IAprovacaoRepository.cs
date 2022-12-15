using SE_WebAPI.Domains;
using System.Collections.Generic;

namespace SE_WebAPI.Interfaces
{
    public interface IAprovacaoRepository
    {
        List<Aprovacao> ListarAprovacoes();
        void CadastrarAprovacao(Aprovacao aprovacao);
        void DeletarAprovacao(int idAprovacao);
        Aprovacao ListarPorId(int idAprovacao);
    }
}
