using SE_WebAPI.Domains;
using System.Collections.Generic;

namespace SE_WebAPI.Interfaces
{
    public interface ITiposAnuncioRepository
    {
        List<TiposAnuncio> ListarTiposAnuncio();
        bool CadastrarTiposAnuncio(TiposAnuncio tipoAnuncio);
        void DeletarTiposAnuncio(byte idTipoAnuncio);
    }
}
