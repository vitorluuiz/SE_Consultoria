using System;
using System.Collections.Generic;

#nullable disable

namespace SE_WebAPI.Domains
{
    public partial class TipoInfo
    {
        public TipoInfo()
        {
            InformacoesAdicionais = new HashSet<InformacoesAdicionai>();
        }

        public byte IdTipoInfo { get; set; }
        public string TipoInfo1 { get; set; }

        public virtual ICollection<InformacoesAdicionai> InformacoesAdicionais { get; set; }
    }
}
