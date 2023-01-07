using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SE_WebAPI.Interfaces;
using SE_WebAPI.Repositories;
using SE_WebAPI.Utils;
using System;
using System.Collections.Generic;
using static System.Net.Mime.MediaTypeNames;

namespace SE_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImgController : ControllerBase
    {
        private readonly IImgRepository _imgRepository;

        public ImgController()
        {
            _imgRepository = new ImgRepository();
        }

        [HttpPost]
        public IActionResult CadastrarImagens([FromForm] List<IFormFile> imagens, short idImovel)
        {
            try
            {
                string[] extensoesPermitidas = { "jpg", "png", "jpeg", "gif" };
                string uploadResultados = Upload.UploadFile(imagens, extensoesPermitidas, idImovel);

                if (uploadResultados == "Sem arquivo")
                {
                    return StatusCode(400, "Não é possível cadastar um imóvel sem imagens");
                }

                if (uploadResultados == "Extenção não permitida")
                {
                    return BadRequest("Extensão de arquivo não permitida");
                }

                return StatusCode(201);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("{idImovel}")]
        public IActionResult RemoverImagens(short idImovel)
        {
            try
            {
                _imgRepository.DeletarCaminhos(idImovel);
                return StatusCode(204);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }
        [HttpGet("{idImovel}")]
        public IActionResult ListarCaminhos(short idImovel)
        {
            try
            {
                return Ok(_imgRepository.ListarCaminhos(idImovel));
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }
    }
}
