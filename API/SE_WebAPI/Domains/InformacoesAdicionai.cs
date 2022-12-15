using System;
using System.Collections.Generic;

#nullable disable

namespace SE_WebAPI.Domains
{
    public partial class InformacoesAdicionai
    {
        public short IdInfo { get; set; }
        public byte? IdTipoInfo { get; set; }
        public short? IdImovel { get; set; }
        public byte? Quantidade { get; set; }

        public virtual Imovei IdImovelNavigation { get; set; }
        public virtual TipoInfo IdTipoInfoNavigation { get; set; }
    }
}
