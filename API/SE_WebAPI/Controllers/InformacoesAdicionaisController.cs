using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SE_WebAPI.Domains;
using SE_WebAPI.Interfaces;
using SE_WebAPI.Repositories;
using SE_WebAPI.ViewModels;
using System;
using System.Collections.Generic;

namespace SE_WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]/")]
    [ApiController]
    public class InformacoesAdicionaisController : ControllerBase
    {
        private readonly IInformacoesAdicionaisRepository _informacoesAdicionaisRepository;

        public InformacoesAdicionaisController()
        {
            _informacoesAdicionaisRepository = new InformacoesAdicionaisRepository();
        }

        [HttpGet("Imovel/{idImovel}")]
        public IActionResult ListarInfos(short idImovel) {
            try
            {
                return Ok(_informacoesAdicionaisRepository.ListarDeImovel(idImovel));
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPost("Unica/")]
        public IActionResult CadastrarUnica(InformacoesAdicionai newInfo)
        {
            try
            {
                if (_informacoesAdicionaisRepository.CadastrarInfoUnica(newInfo))
                {
                    return StatusCode(201, newInfo);
                }

                return BadRequest("Tipo de informação já cadastrada");
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPost("Multiplas/{idImovel}")]
        public IActionResult CadastrarVarias(short idImovel, InformacoesAdicionaisViewmodel json)
        {
            try
            {
                
                List<InformacoesAdicionai> newInfos = JsonConvert.DeserializeObject<List<InformacoesAdicionai>>(json.Json);
                _informacoesAdicionaisRepository.CadastrarInfosDeImovel(idImovel, newInfos);
                return StatusCode(201, newInfos);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("Multiplas/{idImovel}")]
        public IActionResult DeletarTodas(short idImovel)
        {
            try
            {
                _informacoesAdicionaisRepository.DeletarInfosDeImovel(idImovel);
                return StatusCode(204);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("Unica/{idImovel}/{idTipoInfo}")]
        public IActionResult DeletarUnica(int idImovel, int idTipoInfo)
        {
            try
            {
                _informacoesAdicionaisRepository.RemoverInfoDeImovel(idImovel, idTipoInfo);
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
