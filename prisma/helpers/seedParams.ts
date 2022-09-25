export const seedParams = {
  clientRound: 5,
  tripRound: { min: 1, max: 20 },
  stepRound: { min: 1, max: 5 },
  vehicleRound: { min: 1, max: 5 },
  warehouseRound: { min: 1, max: 3 },
  driverRound: { min: 1, max: 5 },
};

// Pour 5 clients, j'obtient entre 0 et 20 commandes de trajet
// Pour chaque trajet, j'ai entre 1 et 5 étapes
// Pour chaque étape, j'ai entre 1 et 3 véhicules
// Pour chaque véhicule j'ai un chaffeur

// J'ai entre 1 et 3 depots
// Pour chaque dépot j'ai entre 1 et 5 véhicules
// Pour chaque dépot j'ai entre 1 et 5 chauffeurs

// Pour chaque véhicule et chauffeur j'ai le meme dépot
