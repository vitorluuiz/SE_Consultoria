using System;
using System.Collections.Generic;

#nullable disable

namespace SE_WebAPI.Domains
{
    public partial class Imovei
    {
        public Imovei()
        {
            InformacoesAdicionais = new HashSet<InformacoesAdicionai>();
        }

        public short IdImovel { get; set; }
        public byte? IdTipoAnuncio { get; set; }
        public byte? IdCategoria { get; set; }
        public byte? IdAprovacao { get; set; }
        public string ImgPrincipal { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public string Bairro { get; set; }
        public decimal? Aluguel { get; set; }
        public decimal? Valor { get; set; }
        public decimal? CustosMensais { get; set; }
        public decimal? Construido { get; set; }
        public decimal? Terreno { get; set; }

        public virtual Aprovacao IdAprovacaoNavigation { get; set; }
        public virtual Categoria IdCategoriaNavigation { get; set; }
        public virtual TiposAnuncio IdTipoAnuncioNavigation { get; set; }
        public virtual ICollection<InformacoesAdicionai> InformacoesAdicionais { get; set; }
    }
}
