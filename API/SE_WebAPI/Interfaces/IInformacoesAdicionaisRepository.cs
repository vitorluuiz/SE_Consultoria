using SE_WebAPI.Domains;
using System.Collections.Generic;

namespace SE_WebAPI.Interfaces
{
    public interface IInformacoesAdicionaisRepository
    {
        List<InformacoesAdicionai> ListarDeImovel(short idImovel);
        bool CadastrarInfoUnica(InformacoesAdicionai info);
        void CadastrarInfosDeImovel(short idImovel, List<InformacoesAdicionai> infos);
        void DeletarInfosDeImovel(short idImovel);
        void RemoverInfoDeImovel(int idImovel, int idTipoInfo);
        bool VerificarDisponibilidade(InformacoesAdicionai info);
    }
}
