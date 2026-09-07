import { Product, ProductCategory } from '../types';

export const IFOOD_STORE_URL =
  'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651';
export const INSTAGRAM_URL =
  'https://www.instagram.com/maik.cafeedonuts?igsi=MzdpNjNhZ2kyZGtu';
export const GOOGLE_MAPS_STORE_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Luiz+Dumont+Villares%2C+1160+-+Santana%2C+S%C3%A3o+Paulo+-+SP';

export const CATEGORIES: ProductCategory[] = [
  'Todos',
  'Donuts Roscas',
  'Donuts Gelados',
  'Combos',
  'Cafés',
  'Achocolatados',
  'Milkshakes',
  'Sodas Italianas',
  'Bebidas',
];

export const PRODUCTS: Product[] = [
  // --- DONUTS ROSCAS ---
  {
    id: 'donut-rosca-brigadeiro-trufado',
    name: 'Donuts Rosca Brigadeiro Trufado',
    category: 'Donuts Roscas',
    description: 'Generosa cobertura de brigadeiro nobre trufado artesanal com granulados crocantes selecionados.',
    price: 'R$ 22,90',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606191253_MO71_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=8604fd63-d2d0-4159-9fae-c875ace65303',
  },
  {
    id: 'donut-rosca-homer',
    name: 'Donuts Rosca Homer',
    category: 'Donuts Roscas',
    description: 'O clássico icônico: calda rosa especial da Maik com confeitos coloridos crocantes sobre massa fofinha.',
    price: 'R$ 16,90',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606191123_D401_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=b81c3c15-8379-44bb-a5d4-fc1c33b3dd7d',
  },
  {
    id: 'donut-rosca-dueto-perfeito',
    name: 'Donuts Rosca Dueto Perfeito',
    category: 'Donuts Roscas',
    description: 'Combinação irresistível de brigadeiro branco cremoso e brigadeiro trufado tradicional mesclados.',
    price: 'R$ 24,90',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606191253_25S1_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=73e9d209-1691-4d34-a05a-ce189ead0856',
  },
  {
    id: 'donut-rosca-glaciado',
    name: 'Donuts Rosca Glaciado',
    category: 'Donuts Roscas',
    description: 'Massa artesanal levinha e dourada com casquinha doce glaciada tradicional que derrete na boca.',
    price: 'R$ 14,90',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606191123_GP08_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=cf081733-6a0d-459d-b2a2-8037ed33a537',
  },
  {
    id: 'donut-rosca-churros',
    name: 'Donuts Rosca Churros',
    category: 'Donuts Roscas',
    description: 'Massa macia e aromática, doce de leite cremoso artesanal e finalização com açúcar e canela.',
    price: 'R$ 16,90',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606191124_FYB2_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=3c87763d-0b75-4423-9bbe-f21b8106d13c',
  },
  {
    id: 'donut-rosca-ferreiro',
    name: 'Donuts Rosca Ferreiro',
    category: 'Donuts Roscas',
    description: 'Creme de avelã nobre com chocolate, pedacinhos crocantes de avelãs tostadas e sabor refinado.',
    price: 'R$ 24,90',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606191254_4R77_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=f904ab97-c375-43f9-85b5-201e1b3341fc',
  },
  {
    id: 'donut-rosca-pistache',
    name: 'Donuts Rosca Pistache',
    category: 'Donuts Roscas',
    description: 'Brigadeiro especial de pistache puro com pedacinhos selecionados de pistache tostado.',
    price: 'R$ 22,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202608051720_XAE8_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=f9370f4d-4f32-4a5a-b2ab-199c832cab5e',
  },
  {
    id: 'donut-rosca-nuvem-de-leite',
    name: 'Donuts Rosca Nuvem de Leite',
    category: 'Donuts Roscas',
    description: 'Massa macia coberta com creme sedoso à base de leite e finalizada delicadamente com Leite Ninho.',
    price: 'R$ 22,90',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606191254_8R03_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=cd09b26e-4adf-4192-b96d-f691d7866a19',
  },
  {
    id: 'donut-rosca-prestigio',
    name: 'Donuts Rosca Prestígio',
    category: 'Donuts Roscas',
    description: 'Equilíbrio saboroso de chocolate cremoso artesanal com flocos úmidos de coco ralado fresco.',
    price: 'R$ 24,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202608051721_TA3T_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=2aa38074-1bf1-4e96-8ade-aa35a5fa1d7e',
  },
  {
    id: 'donut-rosca-pacoca',
    name: 'Donuts Rosca Paçoca',
    category: 'Donuts Roscas',
    description: 'Creme doce artesanal de amendoim coberto com farofa crocante de paçoca de rolha legítima.',
    price: 'R$ 19,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202608051724_8260_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=ddb5983b-b0aa-44b0-9418-39aef134cddf',
  },
  {
    id: 'donut-rosca-ovomaltine',
    name: 'Donuts Rosca Ovomaltine',
    category: 'Donuts Roscas',
    description: 'Creme aveludado de chocolate com flocos crocantes inconfundíveis de Ovomaltine.',
    price: 'R$ 22,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202608051726_8UB6_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=b01ae806-2375-4246-b73a-1d45207d7846',
  },

  // --- DONUTS GELADOS ---
  {
    id: 'donut-doce-de-leite-gelado',
    name: 'Donuts Doce de Leite Gelado',
    category: 'Donuts Gelados',
    price: 'R$ 22,90',
    imageUrl: '/donuts-creme-belga-gelado_real.png',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=f463f865-90cf-437c-9bea-95bb1248b036',
  },
  {
    id: 'donut-frutas-vermelhas-gelado',
    name: 'Donuts Frutas Vermelhas Gelado',
    category: 'Donuts Gelados',
    price: 'R$ 22,90',
    imageUrl: '/donuts-creme-belga-gelado_real.png',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=fc55182f-bd13-4507-979e-3d6e1f001da0',
  },
  {
    id: 'donut-creme-belga-gelado',
    name: 'Donuts Creme Belga Gelado',
    category: 'Donuts Gelados',
    price: 'R$ 22,90',
    imageUrl: '/donuts-creme-belga-gelado_real.png',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=ab2d830f-5921-4a70-8838-1940e85a560a',
  },

  // --- COMBOS ---
  {
    id: 'caixa-com-6-donuts',
    name: 'Caixa com 6 Donuts',
    category: 'Combos',
    description: 'Caixa especial com 6 donuts artesanais sortidos da Maik.',
    price: 'R$ 115,00',
    imageUrl: '/caixa-donuts-combo.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=cee2fc4a-625d-4bf1-9bfb-48fc573850bb',
  },
  {
    id: 'caixa-com-12-donuts',
    name: 'Caixa com 12 Donuts',
    category: 'Combos',
    description: 'Caixa especial com 12 donuts artesanais sortidos da Maik.',
    price: 'R$ 220,00',
    imageUrl: '/caixa-donuts-combo.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=f9332e2b-4146-4655-b208-7d6187243025',
  },

  // --- CAFÉS ---
  {
    id: 'mocha-com-nutella',
    name: 'Mocha com Nutella',
    category: 'Cafés',
    description: 'Combinação perfeita de espresso nobre, leite vaporizado e generosa camada de Nutella autêntica.',
    price: 'R$ 28,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604271812_663X_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=ae65d1c0-0110-45b2-b71d-5570835bdb12',
  },
  {
    id: 'cappuccino-medio',
    name: 'Cappuccino Médio',
    category: 'Cafés',
    description: 'Espresso gourmet, leite vaporizado com microespuma densa e finalizado com toque sutil de cacau.',
    price: 'R$ 19,80',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606291623_H604_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=8ffbb9a0-ca0a-45ca-805d-26a200c8115d',
  },
  {
    id: 'cafe-expresso-pequeno',
    name: 'Café Expresso Pequeno',
    category: 'Cafés',
    description: 'Extração perfeita de grãos 100% arábica selecionados com crema aveludada e notas refinadas.',
    price: 'R$ 10,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221758_T257_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=8a7a01cc-b953-4d73-8bae-cad121c7d715',
  },
  {
    id: 'cafe-expresso-medio',
    name: 'Café Expresso Médio',
    category: 'Cafés',
    description: 'Dose dupla encorpada e aromática com crema consistente para recarregar as energias.',
    price: 'R$ 14,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221758_60I3_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=b23e035f-6eb8-4035-b4f0-0684dc8e29ea',
  },
  {
    id: 'cafe-coado-gourmet',
    name: 'Café Coado Gourmet',
    category: 'Cafés',
    description: 'Filtrado na hora com todo o cuidado, aroma envolvente e sabor equilibrado da fazenda.',
    price: 'R$ 14,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221837_XG3T_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=bbee9502-eeec-44ee-9563-af481e03375c',
  },
  {
    id: 'cafe-expresso-leite-pequeno',
    name: 'Café Expresso com Leite Pequeno',
    category: 'Cafés',
    description: 'O clássico café com leite em proporção harmoniosa com leite vaporizado sedoso.',
    price: 'R$ 12,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606191308_5T41_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=b55a95d1-71f4-4633-a41a-8b29352a61bf',
  },
  {
    id: 'cafe-expresso-leite-medio',
    name: 'Café Expresso com Leite Médio',
    category: 'Cafés',
    description: 'Xícara média aconchegante de café nobre com leite vaporizado macio e cremoso.',
    price: 'R$ 16,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606291616_72W4_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=7bd0a7b1-3f54-4240-8680-e59de8532179',
  },
  {
    id: 'cappuccino-pequeno',
    name: 'Cappuccino Pequeno',
    category: 'Cafés',
    description: 'Espresso aromático com leite vaporizado espesso, servido na medida certa com toque de chocolate.',
    price: 'R$ 15,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606291622_ROX7_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=81869037-88fa-40d8-829f-1d930ec1b878',
  },
  {
    id: 'cappuccino-cremoso',
    name: 'Cappuccino Cremoso',
    category: 'Cafés',
    description: 'Receita especial e exclusiva da Maik com textura densa, aveludada e incrivelmente saborosa.',
    price: 'R$ 24,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606291624_15L7_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=e3dd6103-6cd1-40c1-bc2c-fe9ddb14b0ca',
  },
  {
    id: 'cappuccino-gelado-gourmet',
    name: 'Cappuccino Gelado Gourmet',
    category: 'Cafés',
    description: 'Refrescante união de espresso com leite gelado batido, calda especial e gelo triturado.',
    price: 'R$ 28,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606291625_NAE1_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=c00b6407-2534-4731-a4c9-5b84418184b0',
  },
  {
    id: 'frappe-de-cafe',
    name: 'Frappé de Café',
    category: 'Cafés',
    description: 'Bebida gelada batida com café especial, sorvete artesanal, calda e cobertura de chantilly.',
    price: 'R$ 35,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604271823_241Y_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=3a433346-06c6-4ced-9bdf-3b1b32ed5426',
  },
  {
    id: 'frappe-mud',
    name: 'Frappé Mud',
    category: 'Cafés',
    description: 'Frappé denso com calda intensa de chocolate, biscoito crocante e textura envolvente.',
    price: 'R$ 35,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202606291626_4214_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=211b24b1-7707-4090-80eb-d4843081908e',
  },
  {
    id: 'frappe-negresco',
    name: 'Frappé Negresco',
    category: 'Cafés',
    description: 'Batido com pedacinhos de biscoito Negresco, base de sorvete de creme e calda de chocolate.',
    price: 'R$ 35,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604271809_R48N_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=b28b4c48-1e21-4a88-b464-6b32f0519308',
  },
  {
    id: 'frappe-nutella',
    name: 'Frappé Nutella',
    category: 'Cafés',
    description: 'Frappé cremoso com pura Nutella batida, chantilly aerado e cobertura generosa.',
    price: 'R$ 35,50',
    imageUrl: '/frappe-nutella_real.png',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=186e948d-fefb-4c0a-b054-5348bfbfa268',
  },

  // --- ACHOCOLATADOS ---
  {
    id: 'chocolate-quente-pequeno',
    name: 'Chocolate Quente Pequeno',
    category: 'Achocolatados',
    description: '',
    price: 'R$ 15,50',
    imageUrl: '/chocolate-quente-pequeno_real.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=c8b8d7ad-45ab-46a7-b8b1-ab2862946295',
  },
  {
    id: 'chocolate-quente-medio',
    name: 'Chocolate Quente Médio',
    category: 'Achocolatados',
    description: '',
    price: 'R$ 19,80',
    imageUrl: '/chocolate-quente-medio_real.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=4119e2af-5274-4a40-adf4-9bda17eb7b29',
  },
  {
    id: 'chocolate-quente-cremoso',
    name: 'Chocolate Quente Cremoso',
    category: 'Achocolatados',
    description: '',
    price: 'R$ 24,00',
    imageUrl: '/chocolate-quente-cremoso_real.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=b19d6171-2a9b-42a6-8dba-7ad936f12f3c',
  },
  {
    id: 'chocolate-ovomaltine-gelado',
    name: 'Chocolate Ovomaltine Gelado',
    category: 'Achocolatados',
    description: '',
    price: 'R$ 32,50',
    imageUrl: '/chocolate-ovomaltine-gelado_real.png',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=20b14200-33be-4c46-833e-ae545c20ac6f',
  },

  // --- MILKSHAKES ---
  {
    id: 'milkshake-chocolate-450ml',
    name: 'Milkshake Chocolate 450ml',
    category: 'Milkshakes',
    description: 'Sorvete cremoso de chocolate nobre com calda artesanal densa e acabamento refinado.',
    price: 'R$ 28,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221806_AF3N_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=1cccd82e-94c3-45cb-ba25-1da35423c1f1',
  },
  {
    id: 'milkshake-creme-450ml',
    name: 'Milkshake Creme 450ml',
    category: 'Milkshakes',
    description: 'Sorvete artesanal de creme com fava de baunilha, batido cremoso e suave ao paladar.',
    price: 'R$ 28,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604271822_15D0_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=5ed807c9-0aa7-4c4b-9567-1ecd58b6eab9',
  },
  {
    id: 'milkshake-morango-450ml',
    name: 'Milkshake Morango 450ml',
    category: 'Milkshakes',
    description: 'Batido com calda natural de morangos selecionados, sorvete cremoso e muito sabor.',
    price: 'R$ 28,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221806_5LXX_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=11079ba2-ab1f-4d03-b9c7-575cfbbfeff4',
  },
  {
    id: 'milkshake-ovomaltine-450ml',
    name: 'Milkshake Ovomaltine 450ml',
    category: 'Milkshakes',
    description: 'Crocância incomparável dos flocos de Ovomaltine batidos com sorvete e calda especial.',
    price: 'R$ 32,50',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221806_OTT6_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo%28zona-norte%29/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=cc4d822b-d696-4023-9e6c-c6a70d863a5f',
  },

  // --- SODAS ITALIANAS ---
  {
    id: 'soda-italiana-morango-450ml',
    name: 'Soda Italiana Morango 450ml',
    category: 'Sodas Italianas',
    description: 'Xarope artesanal de morango, água com gás borbulhante e gelo para refrescar seu dia.',
    price: 'R$ 27,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221801_83MY_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=55de6658-fffa-4fea-925a-767b4ee7c6a6',
  },
  {
    id: 'soda-italiana-maca-verde-450ml',
    name: 'Soda Italiana Maça Verde 450ml',
    category: 'Sodas Italianas',
    description: 'Refrescância cítrica suave com xarope especial de maçã verde e borbulhas vivas.',
    price: 'R$ 27,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221802_R1J2_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=228934db-879b-48bb-b340-3b008ac38f25',
  },
  {
    id: 'soda-italiana-framboesa-450ml',
    name: 'Soda Italiana Framboesa 450ml',
    category: 'Sodas Italianas',
    description: 'Sabor marcante de framboesas silvestres com água gaseificada bem gelada.',
    price: 'R$ 27,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221803_4J12_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=f6052881-e606-4963-a423-d5dee4cc56f5',
  },
  {
    id: 'soda-italiana-limao-siciliano-450ml',
    name: 'Soda Italiana Limão Siciliano 450ml',
    category: 'Sodas Italianas',
    description: 'Acidez refrescante e aroma vivo de limão siciliano premium com gás.',
    price: 'R$ 27,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221805_773T_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=22637fc2-4cd7-4d9a-997c-35cfd82e6787',
  },
  {
    id: 'soda-italiana-violeta-450ml',
    name: 'Soda Italiana Violeta 450ml',
    category: 'Sodas Italianas',
    description: 'Notas florais refinadas, cor violeta encantadora e borbulhas cristalinas.',
    price: 'R$ 27,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221804_87H7_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=d6c5c8b2-d264-4274-a86c-cfb68a582a15',
  },
  {
    id: 'soda-italiana-maracuja-450ml',
    name: 'Soda Italiana Maracujá 450ml',
    category: 'Sodas Italianas',
    description: 'Toque tropical autêntico de maracujá com água mineral gaseificada e gelo.',
    price: 'R$ 27,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221804_M271_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=34822e96-8e2a-47d5-af71-18cee5864dff',
  },
  {
    id: 'soda-italiana-curacau-blue-450ml',
    name: 'Soda Italiana Curaçau Blue 450ml',
    category: 'Sodas Italianas',
    description: 'Visual azul vibrante com sabor cítrico característico de cascas de laranja curaçau.',
    price: 'R$ 27,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/7a0776d8-35cb-4ca1-a38f-1e273a069651/202604221804_HN21_i.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=79fc3e16-8ff0-48ae-9575-ec699be9f936',
  },

  // --- BEBIDAS ---
  {
    id: 'refrigerante-coca-cola-lata-zero',
    name: 'Refrigerante Coca Cola Lata Zero',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202306271636_0l49q8eqdxpf.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=1794fc07-4964-4f02-941f-d814fe5cfc94',
  },
  {
    id: 'refrigerante-cola-coca-cola-lata-350ml',
    name: 'Refrigerante de Cola Coca-Cola Lata 350ml',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202511151835_5k5pmjb0s2f.jpeg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=0c7efe35-4ba8-408e-b73b-0496db663782',
  },
  {
    id: 'refrigerante-guarana-antarctica-350ml',
    name: 'Refrigerante Guaraná Antarctica 350ml',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202608021035_57txu6vj7r9.jpeg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=3f49786b-adbc-4d57-8169-3940f3e89960',
  },
  {
    id: 'guarana-zero-lata-350-ml',
    name: 'Guaraná Zero Lata 350 Ml',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl:
      'https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202512011121_qqodl8o93gk.png',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=9101e260-67b5-454c-b803-c5e42c52c2e5',
  },
  {
    id: 'fanta-laranja-lata-350ml',
    name: 'Fanta Laranja Lata 350ml',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl: '/bebidas/fanta-laranja-350ml.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=ef04a859-1750-4b4e-b9c2-24282bb1430e',
  },
  {
    id: 'fanta-uva-lata-350ml',
    name: 'Fanta Uva Lata 350ml',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl: '/bebidas/fanta-uva-350ml.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=87bb0059-c93f-4e6f-a17a-d2278998113d',
  },
  {
    id: 'refrigerante-sprite-lata-350ml',
    name: 'Refrigerante Sprite Lata 350ml',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl: '/bebidas/sprite-350ml.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=07386a41-af39-4e61-afc7-1991349469f8',
  },
  {
    id: 'refrigerante-schweppes-citrus-lata-350ml',
    name: 'Refrigerante Schweppes Citrus Lata 350ml',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl: '/bebidas/schweppes-citrus-350ml.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=86d16d81-7d56-4402-89aa-2c94080fdc37',
  },
  {
    id: 'agua-de-coco-quadrado-natural-200ml',
    name: 'Agua de Coco Quadrado Natural 200ml',
    category: 'Bebidas',
    price: 'R$ 8,00',
    imageUrl: '/bebidas/agua-de-coco-quadrado-200ml.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=bcdac060-5fb4-481f-907f-8376b6e237e6',
  },
  {
    id: 'h2oh-limao-500ml',
    name: 'H2oh Limão 500ml',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl: '/bebidas/h2oh-limao-500ml.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=4e814c43-509e-4e2f-92cb-cb7b14d9d45c',
  },
  {
    id: 'cha-matte-limao-leao-450ml',
    name: 'Chá Matte Limão Leão 450ml',
    category: 'Bebidas',
    price: 'R$ 11,00',
    imageUrl: '/bebidas/cha-matte-limao-leao-450ml.jpg',
    ifoodUrl:
      'https://www.ifood.com.br/delivery/sao-paulo-sp/maik-cafe-e-donuts-jardim-sao-paulo(zona-norte)/7a0776d8-35cb-4ca1-a38f-1e273a069651?prato=9ac8b185-33be-4a12-8234-f324265652ab',
  },
];
