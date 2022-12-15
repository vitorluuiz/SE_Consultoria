using System;
using System.Collections.Generic;

#nullable disable

namespace SE_WebAPI.Domains
{
    public partial class Categoria
    {
        public Categoria()
        {
            Imoveis = new HashSet<Imovei>();
        }

        public byte IdCategoria { get; set; }
        public string Categoria1 { get; set; }

        public virtual ICollection<Imovei> Imoveis { get; set; }
    }
}
