using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductsApi.Models;
using ProductsApi.Services;

namespace ProductsApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private IProductRepository _productsService;

        public ProductsController(IProductRepository repository)
        {
            _productsService = repository;
        }
        [HttpGet]
        public IActionResult getAll()
        {
            var productList = _productsService.getAllProducts();
            return Ok(productList);
        }

        [HttpPost]
        public IActionResult createProduct(Product product)
        {
            _productsService.createProduct(product);
            return Ok();
        }
    }
}
