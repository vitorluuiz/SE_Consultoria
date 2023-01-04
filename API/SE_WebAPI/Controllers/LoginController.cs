using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SAF_3T.ViewModels;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using SE_WebAPI.Repositories;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace SE_WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IUsuarioRepository _usuarioRepository;
        public LoginController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                Usuario usuarioLogado = _usuarioRepository.Login(login.Celular, login.Senha);

                if (usuarioLogado != null)
                {
                    var minhasClaims = new[]
                    {
                    new Claim(JwtRegisteredClaimNames.Sub, usuarioLogado.Celular),
                    new Claim(JwtRegisteredClaimNames.Jti,usuarioLogado.IdUsuario.ToString())
                    };

                    var Key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("usuario-login-auth"));

                    var Creds = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);

                    var token = new JwtSecurityToken(
                        issuer: "seConsult.WebApi",
                        audience: "seConsult.WebApi",
                        claims: minhasClaims,
                        expires: DateTime.Now.AddHours(1),
                        signingCredentials: Creds
                        );
                    return Ok(new
                    {
                        Token = new JwtSecurityTokenHandler().WriteToken(token)
                    });
                }
                return BadRequest("Usuário Inválido");
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }
    }
}
