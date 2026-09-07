import { NearbyPlace } from '../types';

export const STORE_DESTINATION_ADDRESS = 'Av. Luiz Dumont Villares, 1160, Santana, São Paulo - SP';

export const NEARBY_PLACES: NearbyPlace[] = [
  {
    id: 'metro-parada-inglesa',
    name: 'Estação Parada Inglesa',
    type: 'Metrô Linha 1-Azul',
    referenceText: 'Acesso rápido pela Av. Luiz Dumont Villares, a poucos minutos da loja no sentido Santana.',
    originAddress: 'Estação Parada Inglesa, Av. Luiz Dumont Villares - Parada Inglesa, São Paulo - SP',
    mapsUrl: `https://www.google.com/maps/dir/?api=1&origin=Estacao+Parada+Inglesa+Metr%C3%B4+SP&destination=Av.+Luiz+Dumont+Villares%2C+1160+-+Santana%2C+S%C3%A3o+Paulo+-+SP&travelmode=walking`,
    estimatedDistanceText: 'Aprox. 750 m a pé (10 min)',
  },
  {
    id: 'sesc-santana',
    name: 'SESC Santana',
    type: 'Centro Cultural & Lazer',
    referenceText: 'Importante ponto cultural e esportivo na mesma avenida (Av. Luiz Dumont Villares, 579).',
    originAddress: 'SESC Santana, Av. Luiz Dumont Villares, 579 - Santana, São Paulo - SP',
    mapsUrl: `https://www.google.com/maps/dir/?api=1&origin=SESC+Santana%2C+Av.+Luiz+Dumont+Villares%2C+579&destination=Av.+Luiz+Dumont+Villares%2C+1160+-+Santana%2C+S%C3%A3o+Paulo+-+SP&travelmode=driving`,
    estimatedDistanceText: 'Aprox. 1,4 km (4 min de carro)',
  },
];
