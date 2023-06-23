using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProductsApi.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Quantity { get; set; }
        public string Vendor { get; set; }
        public int Price { get; set; }
        public bool IsVisible { get; set; }
        public bool IsFeatured { get; set; }   
        public bool IsOutOfStock { get; set; }
    }
}
