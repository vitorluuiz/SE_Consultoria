using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using SE_WebAPI.Repositories;
using SE_WebAPI.Utils;
using System;
using System.Collections.Generic;

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
            _imovelRepository = new ImovelRepository();
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

        [HttpGet("ListarPorAprovacao/{idAprovacao}")]
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

        [HttpGet("ListarPorTipoAnuncio/{idAprovacao}/{idTipoAnuncio}")]
        public IActionResult ListarPorTipoAnuncio(int idAprovacao, int idTipoAnuncio)
        {
            try
            {
                return Ok(_imovelRepository.ListarPorAprovacaoETipoAnuncio(idAprovacao, idTipoAnuncio));
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpGet("ListarPorBairro/{bairro}/{idException}")]
        public IActionResult ListarPorBairro(string bairro, int idException)
        {
            try
            {
                return Ok(_imovelRepository.ListarPorBairro(bairro, idException));
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpGet("ListarFiltrado")]
        public IActionResult FiltrarImoveis(
            short idAprovacao,
            short idTipoAnuncio,
            short idTipoPropriedade,
            string bairro
            )
        {
            try
            {
                return Ok(_imovelRepository.ListarPorAprovacao(
                idAprovacao,
                idTipoAnuncio,
                idTipoPropriedade,
                bairro
                ));
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
        public IActionResult SugerirImovel([FromForm] Imovei newImovel, IFormFile imagem)
        {
            try
            {
                string[] extensoesPermitidas = { "jpg", "png", "jpeg", "gif" };
                string uploadResultado = Upload.UploadFile(imagem, extensoesPermitidas);

                if (uploadResultado == "Sem arquivo")
                {
                    _imovelRepository.SugerirImovel(newImovel);
                    return BadRequest("Não é possível cadastar um imóvel sem imagens");
                }

                if (uploadResultado == "Extenção não permitida")
                {
                    return BadRequest("Extensão de arquivo não permitida");
                }
                newImovel.ImgPrincipal = uploadResultado;
                _imovelRepository.SugerirImovel(newImovel);
                return StatusCode(201, newImovel);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPatch("AlterarAprovacao/{idAprovacao}/{idImovel}")]
        public IActionResult AlterarAprovacao(byte idAprovacao, int idImovel)
        {
            try
            {
                _imovelRepository.AlterarAprovacao(idAprovacao, idImovel);
                return Ok();
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("{idImovel}")]
        public IActionResult DeletarImovel(short idImovel)
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
