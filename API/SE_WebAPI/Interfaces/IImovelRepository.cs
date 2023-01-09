﻿using SE_WebAPI.Domains;
using System.Collections.Generic;

namespace SE_WebAPI.Interfaces
{
    public interface IImovelRepository
    {
        List<Imovei> ListarImoveis();
        List<Imovei> ListarPorAprovacao(short idAprovacao);
        List<Imovei> ListarPorAprovacao(int idAprovacao, int idTipoAnuncio);
        List<Imovei> ListarPorAprovacao(
            short idAprovacao,
            short idTipoAnuncio,
            short idTipoPropriedade,
            string bairro
            );
        List<Imovei> ListarPorBairro(string bairro, int idException);
        void SugerirImovel(Imovei imovel);
        void AprovarImovel(int idImovel);
        void NegarImovel(int idImovel);
        void DeletarImovel(short imovel);
        void AtualizarImovel(int idImovel, Imovei imovelAtualizado);
        Imovei ListarPorId(int idImovel);
    }
}
