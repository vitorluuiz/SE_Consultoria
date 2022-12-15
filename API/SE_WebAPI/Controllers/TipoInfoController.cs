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
    public class TipoInfoController : ControllerBase
    {
        private readonly ITipoInfoRepository _tipoInfoRepository;

        public TipoInfoController()
        {
            _tipoInfoRepository = new TipoInfoRepository();
        }

        [HttpGet]
        public IActionResult ListarTipoInfos()
        {
            try
            {
                return Ok(_tipoInfoRepository.ListarTiposInfo());
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPost]
        public IActionResult CadastrarTipoInfo(TipoInfo newTipoInfo)
        {
            try
            {
                if (_tipoInfoRepository.CadastrarTipoInfo(newTipoInfo))
                {
                return StatusCode(201, newTipoInfo);
                }

                return BadRequest();
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("{idTipoInfo}")]
        public IActionResult DeletarTipoInfo(byte idTipoInfo)
        {
            try
            {
                _tipoInfoRepository.DeletarTipoInfo(idTipoInfo);
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
