const express = require('express');

const router = express.Router();

const progressController = require('../controllers/progressController');

//ROUTE FOR GETTING PROGRESS ITEMS (GET) - /api/progress/
router.get('/',
  (req, res) => {
    console.log('Entered /progress/');
    res.status(200).json();
  }
);

//ROUTE FOR CREATING NEW PROGRESS ITEMS (POST) - /api/progress/:userID
router.post('/:userID',
  (req, res) => {
    console.log('Entered /progress/ - Creating new item');
    res.status(200).json();
  }
);

//ROUTE FOR DELETING NEW PROGRESS ITEMS (DELETE) - /api/progress/:progressID
router.delete('/:progressID',
  (req, res) => {
    console.log('Entered /progress/ - Deleting new item');
    res.status(200).json();
  }
);

//ROUTE FOR UPDATING NEW PROGRESS ITEMS (PUT) - /api/progress/:progressID
router.put('/:progressID',
  (req, res) => {
    console.log('Entered /progress/ - Updating new item');
    res.status(200).json();
  }
);


module.exports = router;