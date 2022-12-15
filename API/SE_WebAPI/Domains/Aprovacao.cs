using System;
using System.Collections.Generic;

#nullable disable

namespace SE_WebAPI.Domains
{
    public partial class Aprovacao
    {
        public Aprovacao()
        {
            Imoveis = new HashSet<Imovei>();
        }

        public byte IdAprovacao { get; set; }
        public string Estado { get; set; }

        public virtual ICollection<Imovei> Imoveis { get; set; }
    }
}
