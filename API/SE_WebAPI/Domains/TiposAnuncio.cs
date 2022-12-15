using System;
using System.Collections.Generic;

#nullable disable

namespace SE_WebAPI.Domains
{
    public partial class TiposAnuncio
    {
        public TiposAnuncio()
        {
            Imoveis = new HashSet<Imovei>();
        }

        public byte IdTipoAnuncio { get; set; }
        public string TipoAnuncio { get; set; }

        public virtual ICollection<Imovei> Imoveis { get; set; }
    }
}
