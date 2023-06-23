using ProductsApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductsApi.Services
{
    public interface IProductRepository
    {
        public List<Product> getAllProducts();
        public void createProduct(Product product);
    }
}
