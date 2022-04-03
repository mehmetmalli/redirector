const express = require('express');
const router = express.Router();
const { getAllRedirections } = require('../utils/redirections');

getAllRedirections().then(({realm, redirections}) => {

  router.post('/create', (req, res) => {
    
    const { key, target } = req.body;
    
    try {
      realm.write(() => {
        realm.create('Redirection', { key, target }, 'modified');
      });
      res.status(200).send({ message: 'Operation successful.' });
    } catch (error) {
      console.log("Error: ", error);
      res.status(500).send({ message: 'Operation failed.', error });
    }

  });

  router.get('/:key', (req, res) => {

    const { key } = req.params;

    const redirection = redirections.find(r => r.key === key);

    res.redirect(redirection ? redirection.target : '/');

  });
});

module.exports = router;