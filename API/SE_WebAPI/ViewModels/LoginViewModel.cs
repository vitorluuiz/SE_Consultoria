using System.ComponentModel.DataAnnotations;

namespace SAF_3T.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe o CPF do usuário!")]
        public string Celular { get; set; }

        [Required(ErrorMessage = "Informe a senha do usuário!")]
        public string Senha { get; set; }
    }
}