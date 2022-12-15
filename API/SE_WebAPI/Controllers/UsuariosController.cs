using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using SE_WebAPI.Repositories;
using System;

namespace SE_WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {

        private readonly IUsuarioRepository _usuarioRepository;

        public UsuariosController()
        {
            _usuarioRepository = new UsuarioRepository();
        }

        [HttpGet]
        public IActionResult ListarUsuarios()
        {
            try
            {
                return Ok(_usuarioRepository.ListarUsuarios());
            }
            catch (Exception error)
            {
                return BadRequest(error.Message);
                throw;
            }
        }

        [HttpGet("{idUsuario}")]
        public IActionResult ListarPorId(int idUsuario) {
            try
            {
                return Ok(_usuarioRepository.ListarPorId(idUsuario));
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPost]
        public IActionResult CadastrarUsuario(Usuario newUsuario)
        {
            try
            {
                if (_usuarioRepository.CadastrarUsuario(newUsuario))
                {
                    return StatusCode(201, newUsuario);
                }
                return BadRequest("Número de celular indisponível");
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("{idUsuario}")]
        public IActionResult RemoverUsuario(int idUsuario)
        {
            try
            {
                _usuarioRepository.RemoverUsuario(idUsuario);
                return StatusCode(204);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }
    }
}
