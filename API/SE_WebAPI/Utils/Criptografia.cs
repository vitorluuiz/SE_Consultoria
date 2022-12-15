using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace SE_WebAPI.Utils
{
    public class Criptografia
    {
        public static string CriptografarSenha(string senha)
        {
            return BCrypt.Net.BCrypt.HashPassword(senha);
        }

        public static bool CompararSenha(string senhaForm, string senhaBanco)
        {
            return BCrypt.Net.BCrypt.Verify(senhaForm, senhaBanco);
        }
}
}
