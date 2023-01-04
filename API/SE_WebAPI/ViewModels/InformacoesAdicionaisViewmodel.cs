using System.ComponentModel.DataAnnotations;

namespace SE_WebAPI.ViewModels
{
    public class InformacoesAdicionaisViewmodel
    {
        [Required(ErrorMessage = "Informe o Json")]
        public string Json { get; set; }
    }
}
