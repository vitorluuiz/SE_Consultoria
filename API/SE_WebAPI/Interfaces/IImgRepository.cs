using SE_WebAPI.Domains;
using System.Collections.Generic;

namespace SE_WebAPI.Interfaces
{
    public interface IImgRepository
    {
        List<string> ListarCaminhos(short idImovel);
        void CadastrarCaminhos(int idImovel,List<string> caminhos);
        void DeletarCaminhos(short idImovel);
    }
}
