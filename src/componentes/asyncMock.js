export const products = [
  {
    id: "1",
    nombre: "Bota suela",
    precio: 30000,
    descripcion: "Bota de cuero Gravagna caña baja color suela",
    img: "https://res.cloudinary.com/dmn255lsq/image/upload/v1686755226/tp%20react/catalogo/foto7_p4cxv2.jpg",
    stock: 10,
    categoria: "zapatos",
  },
  {
    id: "2",
    nombre: "Zapatilla alta plata",
    precio: 30000,
    descripcion: "Zapatilla de cuero Gravagna con taco interno, color plata",
    img: "https://res.cloudinary.com/dmn255lsq/image/upload/v1686755225/tp%20react/catalogo/foto6_h8fwpb.jpg",
    stock: 10,
    categoria: "zapatillas",
  },
  {
    id: "3",
    nombre: "Zapatilla combinada",
    precio: 29000,
    descripcion:
      "Zapatilla de cuero Gravagna, combinada en blanco, suela, reptil",
    img: "https://res.cloudinary.com/dmn255lsq/image/upload/v1686755224/tp%20react/catalogo/foto1_blodur.jpg",
    stock: 10,
    categoria: "zapatillas",
  },
  {
    id: "4",
    nombre: "Zapatilla negra",
    precio: 29000,
    descripcion: "Zapatilla de cuero Gravagna combinada en negro y reptil",
    img: "https://res.cloudinary.com/dmn255lsq/image/upload/v1686755224/tp%20react/catalogo/foto2_vnpael.jpg",
    stock: 10,
    categoria: "zapatillas",
  },
  {
    id: "5",
    nombre: "Botineta plateada",
    precio: 30000,
    descripcion: "Botineta de cuero Gravagna con elástico, color plata",
    img: "https://res.cloudinary.com/dmn255lsq/image/upload/v1686755223/tp%20react/catalogo/foto4_oucmgu.jpg",
    stock: 10,
    categoria: "zapatos",
  },
  {
    id: "6",
    nombre: "Zapatilla alta negra",
    precio: 29000,
    descripcion: "Zapatilla de cuero Gravagna con taco interno, color negro",
    img: "https://res.cloudinary.com/dmn255lsq/image/upload/v1686755223/tp%20react/catalogo/foto5_uculac.jpg",
    stock: 10,
    categoria: "zapatillas",
  },
  {
    id: "7",
    nombre: "Texana negra",
    precio: 42000,
    descripcion: "Texana de cuero Gravagna color negro, caña alta",
    img: "https://res.cloudinary.com/dmn255lsq/image/upload/v1686755222/tp%20react/catalogo/foto9_ipfgjp.jpg",
    stock: 10,
    categoria: "zapatos",
  },
  {
    id: "8",
    nombre: "Botineta verde",
    precio: 30000,
    descripcion: "Botineta de cuero Gravagna con elástico, color verde",
    img: "https://res.cloudinary.com/dmn255lsq/image/upload/v1686755222/tp%20react/catalogo/foto3_j1sfc2.jpg",
    stock: 10,
    categoria: "zapatos",
  },
  {
    id: "9",
    nombre: "Bota camel",
    precio: 30000,
    descripcion: "Bota de cuero Gravagna caña baja color camel",
    img: "https://res.cloudinary.com/dmn255lsq/image/upload/v1686755223/tp%20react/catalogo/foto8_agj0hv.jpg",
    stock: 10,
    categoria: "zapatos",
  },
];

export const getProductos = () => {
  return new Promise((res) => {
    res(products);
  });
};
