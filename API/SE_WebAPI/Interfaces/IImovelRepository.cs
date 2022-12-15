using SE_WebAPI.Domains;
using System.Collections.Generic;

namespace SE_WebAPI.Interfaces
{
    public interface IImovelRepository
    {
        List<Imovei> ListarImoveis();
        List<Imovei> ListarPorAprovacao(short idAprovacao);
        void SugerirImovel(Imovei imovel);
        void AprovarImovel(int idImovel);
        void NegarImovel(int idImovel);
        void DeletarImovel(int imovel);
        void AtualizarImovel(int idImovel, Imovei imovelAtualizado);
        Imovei ListarPorId(int idImovel);
    }
}
