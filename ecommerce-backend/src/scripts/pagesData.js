const homeData = {
    aboutBanner: {
      title: "DopeShope",
      subtitle: "WHERE STYLE MEETS ELEGANCE",
      description: "DopeShope, Where style meets substance. Elevate your wardrobe with our carefully curated collection of must-have apparel, accessories, and footwear to elevate your style game effortlessly.",
      buttonText: "SHOP NOW",
    },
    navbarLinks: [
      { text: "Home", link: "/" },
      { text: "Products", link: "/shop" },
      { text: "About", link: "/about" },
      { text: "Contact", link: "/contact" },
      { text: "Account", link: "/account" }
    ],
    menClothing: {
      title: "MEN'S CLOTHING",
      subtitle: "Elite men's collection",
      image: "menClothing",
      description: "Discover the essence of modern masculinity in our men's apparel collections, where impeccable design meets exceptional quality. From sleek suiting to casual essentials, each garment is thoughtfully crafted to empower the contemporary gentleman with confidence and style.",
    },
    womenClothing: {
      title: "WOMEN'S CLOTHING",
      subtitle: "Premium women's attire",
      image: "womenClothing",
      description: "Experience the epitome of femininity with our women's apparel collections, where each garment is a symphony of grace and enduring beauty, tailored with precision to accentuate your style. Embrace elegance effortlessly, leaving a lasting impression wherever you go.",
    },
    kidsAndFootwear: {
      kids: {
        title: "KID'S CLOTHING",
        subtitle: "Footwear and Accessories",
        image: "kids",
        description: "Style yourself with our exciting range of premium footwear and accessories, designed to add the perfect finishing touch to every outfit and inspire endless exploration and creativity.",
      },
      footwear: {
        title: "Footwear and Accessories",
        subtitle: "Dress your little ones in style",
        image: "shoe",
        description: "Dress your little ones in style and comfort with our charming range of kids' apparel, where every piece is a delightful blend of quality and imagination.",
      },
    },
    services: [
      {
        title: "Assured Quality",
        description: "We promise premium quality products for your complete satisfaction.",
        icon: "orders"
      },
      {
        title: "Free Shipping",
        description: "Unlock the seamless experience of fast and free shipping on orders above ₹499.",
        icon: "freeShip"
      },
      {
        title: "Easy Returns",
        description: "Enjoy hassle-free returns and exchanges for a worry-free shopping experience.",
        icon: "returnExchange"
      },
      {
        title: "Customer Support",
        description: "Our dedicated customer support team is here to assist you 24/7. Happy shopping.",
        icon: "service"
      },
    ],
    blogs: [
      {
        title: "Premium Men's Attire",
        image: "blog1",
        description: "Premium menswear that speaks volumes in sophistication and refinement."
      },
      {
        title: "Luxury Ladies' Fashion",
        image: "blog2",
        description: "Tailored glamour for her crafting every garment into a timeless beauty."
      },
      {
        title: "Shoes n Accessories Galore",
        image: "blog3",
        description: "Elevate your look with our diverse Shoes and Accessories array."
      },
    ],
  };
  
  // API endpoints
  router.get('/home', (req, res) => {
    res.json(homeData);
  });
  