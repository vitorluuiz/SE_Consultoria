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
    public class TiposAnuncioController : ControllerBase
    {
        private readonly ITiposAnuncioRepository _tiposAnuncioRepository;

        public TiposAnuncioController()
        {
            _tiposAnuncioRepository = new TiposAnuncioRepository();
        }

        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(_tiposAnuncioRepository.ListarTiposAnuncio());
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPost]
        public IActionResult CadastrarTipoAnuncio(TiposAnuncio tipoAnuncio)
        {
            try
            {
                _tiposAnuncioRepository.CadastrarTiposAnuncio(tipoAnuncio);
                return StatusCode(201, tipoAnuncio);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("{idTipoAnuncio}")]
        public IActionResult DeletarTipoAnuncio(byte idTipoAnuncio) 
        {
            try
            {
                _tiposAnuncioRepository.DeletarTiposAnuncio(idTipoAnuncio);
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
