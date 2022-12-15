using System;
using System.Collections.Generic;

#nullable disable

namespace SE_WebAPI.Domains
{
    public partial class Usuario
    {
        public short IdUsuario { get; set; }
        public string NomeUsuario { get; set; }
        public string Ddd { get; set; }
        public string Celular { get; set; }
        public string Senha { get; set; }
    }
}
