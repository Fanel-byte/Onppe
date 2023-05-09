const db = require('../utils/db');

// Récupérer tous les signalements
exports.getAllSignalements = (req, res) => {
  db.query("SELECT id , date , enfantid , citoyenid  descriptif , identitesecrete , m.designationar as motif FROM signalement s LEFT Join signalementmotif m on s.motifid= m.code ", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Une erreur s'est produite." });
    } else {
      res.status(200).json(result.rows);
    }
  });
};

// Récupérer un signalement par son ID
exports.getSignalementById = (req, res) => {
  const signalementId = req.params.id;
  db.query("SELECT * FROM signalement s LEFT JOIN signalementmotif m ON s.motifid = m.code LEFT JOIN typesignaleur t ON s.typesignaleurid = t.id LEFT JOIN enfant e ON s.enfantid = e.id WHERE s.id = $1", 
  [signalementId],
  (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Une erreur s'est produite." });
    } else if (result.rows.length === 0) {
      res.status(404).json({ message: "Signalement introuvable." });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
};

// Créer un nouveau signalement
exports.createSignalement = (req, res) => {
  const { id , citoyenid, motifid, enfantid  ,  descriptif, preuveid , typesignaleurid , identitesecrete} = req.body;
  db.query("INSERT INTO signalement (citoyenid, motifid, enfantid  ,  descriptif, preuveid , typesignaleurid, identitesecrete , date , heure) VALUES ($1, $2, $3, $4 , $5 ,$6 , $7 , NOW() , NOW()) RETURNING id",
    [citoyenid, motifid, enfantid  ,  descriptif, preuveid , typesignaleurid, identitesecrete ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Une erreur s'est produite." });
      } else {
        res.status(201).json(result.rows[0].id);
      }
    });
};

// Mettre à jour un signalement
exports.updateSignalement = (req, res) => {
  const signalementId = req.params.id;
  const { citoyen_id, motif_id, description, image } = req.body;
  db.query("UPDATE signalement SET citoyen_id = $1, motif_id = $2, description = $3, image = $4 WHERE id = $5 RETURNING *",
    [citoyen_id, motif_id, description, image, signalementId],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Une erreur s'est produite." });
      } else if (result.rows.length === 0) {
        res.status(404).json({ message: "Signalement introuvable." });
      } else {
        res.status(200).json(result.rows[0]);
      }
    });
};

// Supprimer un signalement
exports.deleteSignalement = (req, res) => {
  const signalementId = req.params.id;
  db.query("DELETE FROM signalement WHERE id = $1 RETURNING *", [signalementId], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Une erreur s'est produite." });
    } else if (result.rows.length === 0) {
      res.status(404).json({ message: "Signalement introuvable." });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
};
