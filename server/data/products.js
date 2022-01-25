const Products = [
  {
    name:'Nike Air Max 270',
    brand: "Nike",
    category: 'Men Shoes',
    price: 170,
    rating: 5,
    numReviews: 12,
    countinStock:100,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_485,c_limit/9bd58ab4-a823-407f-8f1b-9ea8a4c6c03a/air-max-270-mens-shoes-KkLcGR.png'
  },
  {
    name:'Air Jordan OG',
    brand: "Nike",
    category: 'Women Shoes',
    price: 140,
    rating: 4,
    numReviews: 12,
    countinStock:70,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_485,c_limit/5aafb79f-1a67-401b-bce7-e6f3924b2752/air-jordan-og-womens-shoes-lCKXf8.png'
  }, 
  {
    name:'Nike Pegasus Trail',
    brand: "Nike",
    category: 'Men Shoes',
    price: 160,
    rating: 3,
    numReviews: 12,
    countinStock:10,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_485,c_limit/46a88ee5-9fdf-4841-8c70-dc010d2d6ca5/pegasus-trail-3-gore-tex-mens-running-shoes-HG005k.png'
  }, 
  {
    name:'Nike SB BLZR',
    brand: "Nike",
    category: 'Men Shoes',
    price: 70,
    rating: 2,
    numReviews: 12,
    countinStock:88,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_485,c_limit/5b8e8e16-c944-4d1c-8a8c-f8d2b8537264/sb-blzr-court-mid-premium-skate-shoes-rnDqF6.png'
  }, 
  {
    name:'Nike Air Max 97 SE',
    brand: "Nike",
    category: 'Men Shoes',
    price: 180,
    rating: 5,
    numReviews: 12,
    countinStock:50,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_485,c_limit/427685f5-f0a7-4478-9ce1-21f6f41f028a/air-max-97-se-mens-shoes-2Q9xJH.png'
  }, 
  {
    name:'Nike Air More Uptempo',
    brand: "Nike",
    category: 'Men Shoes',
    price: 180,
    rating: 4,
    numReviews: 12,
    countinStock:8,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_485,c_limit/cf7428a2-3d4e-4a19-9212-ee67b1d4c1e6/air-more-uptempo-big-kids-shoes-FDtg0f.png'
  }, 
 {
    name:'Nike Air Force',
    brand: "Nike",
    category: 'Women Shoes',
    price: 100,
    rating: 3,
    numReviews: 12,
    countinStock:61,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://www.nike.com/t/air-force-1-07-next-nature-womens-shoes-fpb6vp/DC9486-001'
  }, 
  {
    name:'Nike Creater Remixa',
    brand: "Nike",
    category: 'Women Shoes',
    price: 100,
    rating: 5,
    numReviews: 12,
    countinStock:50,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/139dbc67-89c9-4545-b2ef-c3f18e505f62/crater-remixa-womens-shoe-0mKQDz.png'
  }, 
  {
    name:'Nike Blazer Low',
    brand: "Nike",
    category: 'Women Shoes',
    price: 170,
    rating: 3,
    numReviews: 12,
    countinStock:10,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/843beca1-17bf-414f-8170-2e2b951fc4d4/blazer-low-platform-womens-shoes-s53nQs.png'
  }, 
  {
    name:'Nike Win Flow 8',
    brand: "Nike",
    category: 'Women Shoes',
    price: 95,
    rating: 3,
    numReviews: 12,
    countinStock:69,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd965c74-2dcf-4147-a4ef-7c8c99b39f81/wio-8-womens-road-running-shoes-nhbfG4.png'
  }, 
  {
    name:'Nike Tanjuns',
    brand: "Nike",
    category: 'Shoes',
    price: 70,
    rating: 3,
    numReviews: 12,
    countinStock:80,
    discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porttitor massa ex, eget facilisis velit finibus at. Nunc at eros non velit aliquam vehicula. Quisque maximus bibendum odio et aliquam. Nulla scelerisque nisi eget mi maximus rhoncus. Aliquam rutrum id nisl vel tincidunt. Quisque vitae arcu sodales, sollicitudin quam non, ultricies tortor.",
    image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/22512645-f32d-463c-bf98-a660657208ce/tanjun-womens-shoes-lj1St1.png'
  },
 
]


module.exports = Products