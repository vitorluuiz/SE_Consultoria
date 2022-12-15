using SE_WebAPI.Domains;
using System.Collections.Generic;

namespace SE_WebAPI.Interfaces
{
    public interface ITipoInfoRepository
    {
        List<TipoInfo> ListarTiposInfo();
        bool CadastrarTipoInfo(TipoInfo tipoInfo);
        void DeletarTipoInfo(int idTipoInfo);
    }
}
