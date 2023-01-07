using System;
using System.Collections.Generic;

#nullable disable

namespace SE_WebAPI.Domains
{
    public partial class DbImg
    {
        public short IdImg { get; set; }
        public short? IdImovel { get; set; }
        public string Img { get; set; }

        public virtual Imovei IdImovelNavigation { get; set; }
    }
}
