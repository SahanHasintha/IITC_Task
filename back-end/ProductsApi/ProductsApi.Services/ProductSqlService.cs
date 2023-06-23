using ProductsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProductsApi.DataAccess;

namespace ProductsApi.Services
{
    public class ProductSqlService : IProductRepository
    {
        private readonly ProductDbContext _dbContext = new ProductDbContext();
        public List<Product> getAllProducts()
        {
            return _dbContext.Products.ToList();
        }

        public async void createProduct(Product product)
        {
            _dbContext.Products.Add(product);
            await _dbContext.SaveChangesAsync();

        }
    }

}
