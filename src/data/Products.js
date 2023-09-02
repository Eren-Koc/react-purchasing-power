const Products = [
    {
        id:0,
        countryId:0,
        name:"Benzin (1 LT)",
        count:1,
        price:36.75,
    },
    {
        id:1,
        countryId:1,
        name:"Benzin (1 LT)",
        count:1,
        price:1.09,
    },
    {
        id:2,
        countryId:2,
        name:"Benzin (1 LT)",
        count:1,
        price:1.873,
    },
    {
        id:3,
        countryId:3,
        name:"Benzin (1 LT)",
        count:1,
        price:1.52,
    },
    {
        id:4,
        countryId:0,
        name:"Iphone 14 Pro Max (128 GB)",
        count:1,
        price:67118,
    },
    {
        id:5,
        countryId:2,
        name:"Iphone 14 Pro Max (128 GB)",
        count:1,
        price:1449,
    },
    {
        id:6,
        countryId:1,
        name:"Iphone 14 Pro Max (128 GB)",
        count:1,
        price:1099,
    },
    {
        id:7,
        countryId:3,
        name:"Iphone 14 Pro Max (128 GB)",
        count:1,
        price:1099,
    },
    {
        id:8,
        countryId:0,
        name:"MacBook Air 13 (M2)",
        count:1,
        price:40168,
    },
    {
        id:9,
        countryId:1,
        name:"MacBook Air 13 (M2)",
        count:1,
        price:1099,
    },
    {
        id:10,
        countryId:2,
        name:"MacBook Air 13 (M2)",
        count:1,
        price:1299,
    },
    {
        id:11,
        countryId:3,
        name:"MacBook Air 13 (M2)",
        count:1,
        price:1149,
    },
    {
        id:12,
        countryId:0,
        name:"Dana Eti Kıyma (1 KG)",
        count:1,
        price:420,
    },
    {
        id:13,
        countryId:3,
        name:"Dana Eti Kıyma (1 KG)",
        count:1,
        price:6.1,
    },
    {
        id:14,
        countryId:3,
        name:"Tavuk Eti (1 KG)",
        count:1,
        price:6.49,
    },
    {
        id:15,
        countryId:0,
        name:"Tavuk Eti (1 KG)",
        count:1,
        price:100,
    },
    {
        id:16,
        countryId:1,
        name:"Dana Eti Kıyma (1 KG)",
        count:1,
        price:8.79,
    },
    {
        id:17,
        countryId:1,
        name:"Tavuk Eti (1 KG)",
        count:1,
        price:7.69,
    },
    {
        id:18,
        countryId:1,
        name:"Nutella (750 GR)",
        count:1,
        price:8.99,
    },
    {
        id:19,
        countryId:0,
        name:"Nutella (750 GR)",
        count:1,
        price:100,
    },
    {
        id:20,
        countryId:2,
        name:"Ayçiçek Yağı (2 LT)",
        count:1,
        price:4.49,
    },
    {
        id:21,
        countryId:2,
        name:"Toz Şeker (1 KG)",
        count:1,
        price:1.49,
    },
    {
        id:22,
        countryId:2,
        name:"Yumurta (10 Adet)",
        count:1,
        price:1.99,
    },
    {
        id:23,
        countryId:0,
        name:"McDonalds Big Mac Menu",
        count:1,
        price:165,
    },
    {
        id:24,
        countryId:1,
        name:"McDonalds Big Mac Menu",
        count:1,
        price:10,
    },
    {
        id:25,
        countryId:3,
        name:"McDonalds Big Mac Menu",
        count:1,
        price:8,
    },
    {
        id:26,
        countryId:2,
        name:"McDonalds Big Mac Menu",
        count:1,
        price:9,
    },
    
   /*
   Türkiye:0
   Amerika:1
   Almanya:2
   İngiltere:3
   */

]

export const ProductsData = Products.reduce((acc, product) => {
     if (!acc[product.countryId]) {
       acc[product.countryId] = [];
     }
     acc[product.countryId].push(product);
     return acc;
   }, {});  


  

