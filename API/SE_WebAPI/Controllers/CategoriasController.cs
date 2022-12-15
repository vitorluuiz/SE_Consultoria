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
    public class CategoriasController : ControllerBase
    {
        private readonly ICategoriaRepository _categoriaRepository;

        public CategoriasController()
        {
            _categoriaRepository= new CategoriaRepository();
        }

        [HttpGet]
        public IActionResult ListarCategorias()
        {
            try
            {
                return Ok(_categoriaRepository.ListarCategorias());
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpPost]
        public IActionResult CadastrarCategoria(Categoria newCategoria)
        {
            try
            {
                _categoriaRepository.CadastrarCategoria(newCategoria);
                return StatusCode(201, newCategoria);
            }
            catch (Exception error)
            {
                return BadRequest(error);
                throw;
            }
        }

        [HttpDelete("{idCategoria}")]
        public IActionResult DeletarCategoria(int idCategoria) {
            try
            {
                _categoriaRepository.DeletarCategoria(idCategoria);
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
