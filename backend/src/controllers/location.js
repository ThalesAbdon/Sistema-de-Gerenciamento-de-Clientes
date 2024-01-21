const pool = require('../database/connection');

const calculateDistance = (x1, y1, x2, y2) => {
  // Fórmula da distância euclidiana
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

const findNearestNeighbor = (currentClient, remainingClients) => {
  let nearestNeighbor = null;
  let minDistance = Infinity;

  for (const client of remainingClients) {
    const distance = calculateDistance(
      currentClient.x,
      currentClient.y,
      client.x,
      client.y
    );

    if (distance < minDistance) {
      minDistance = distance;
      nearestNeighbor = client;
    }
  }

  return nearestNeighbor;
};

const findBestRoute = (clients) => {
  let currentClient = { x: 0, y: 0 }; // Empresa começa em (0, 0)
  const route = [];

  while (clients.length > 0) {
    const nearestNeighbor = findNearestNeighbor(currentClient, clients);
    route.push(nearestNeighbor);
    clients = clients.filter((client) => client !== nearestNeighbor);
    currentClient = nearestNeighbor;
  }

  return route;
};

const location = async (req, res) => {
  try {
    const { rows: clients } = await pool.query('SELECT * FROM clients');

    const bestRoute = findBestRoute(clients);
    return res.status(200).json(bestRoute);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = location;
