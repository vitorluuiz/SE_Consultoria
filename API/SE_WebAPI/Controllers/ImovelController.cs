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
    public class ImovelController : ControllerBase
    {
        private readonly IImovelRepository _imovelRepository;

        public ImovelController()
        {
            _imovelRepository= new ImovelRepository();
        }

        [HttpGet]
        public IActionResult ListarImoveis()
        {
            try
            {
                return Ok(_imovelRepository.ListarImoveis());
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpGet("ListarPorEstado/{idAprovacao}")]
        public IActionResult ListarPorAprovacao(short idAprovacao) {
            try
            {
                return Ok(_imovelRepository.ListarPorAprovacao(idAprovacao));
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpGet("ListarPorId/{idImovel}")]
        public IActionResult ListarPorId(int idImovel)
        {
            try
            {
                return Ok(_imovelRepository.ListarPorId(idImovel));
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPut]
        public IActionResult AtualizarImovel(int idImovel, Imovei updatedImovel)
        {
            try
            {
                _imovelRepository.AtualizarImovel(idImovel, updatedImovel);
                return Ok();
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPost("SugerirImovel")]
        public IActionResult SugerirImovel(Imovei newImovel)
        {
            try
            {
                _imovelRepository.SugerirImovel(newImovel);
                return StatusCode(201, newImovel);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPatch("Aprovar/{idImovel}")]
        public IActionResult AprovarImovel(int idImovel)
        {
            try
            {
                _imovelRepository.AprovarImovel(idImovel);
                return Ok();
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPatch("Negar/{idImovel}")]
        public IActionResult NegarImovel(int idImovel)
        {
            try
            {
                _imovelRepository.NegarImovel(idImovel);
                return Ok();
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("{idImovel}")]
        public IActionResult DeletarImovel(int idImovel)
        {
            try
            {
                _imovelRepository.DeletarImovel(idImovel);
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
