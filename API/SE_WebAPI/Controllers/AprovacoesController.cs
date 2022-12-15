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
    public class AprovacoesController : ControllerBase
    {
        private readonly IAprovacaoRepository _aprocacaoRepository;

        public AprovacoesController()
        {
            _aprocacaoRepository = new AprovacaoRepository();
        }

        [HttpGet]
        public IActionResult ListarAprovacoes()
        {
            try
            {
                return Ok(_aprocacaoRepository.ListarAprovacoes());
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPost]
        public IActionResult CadastrarAprovacao(Aprovacao newAprovacao)
        {
            try
            {
                _aprocacaoRepository.CadastrarAprovacao(newAprovacao);
                return StatusCode(201, newAprovacao);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("{idAprovacao}")]
        public IActionResult DeletarAprovacao(int idAprovacao)
        {
            try
            {
                _aprocacaoRepository.DeletarAprovacao(idAprovacao);
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
