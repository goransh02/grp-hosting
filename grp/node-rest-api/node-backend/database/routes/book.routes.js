const express = require('express');
const app = express();

const bookRoute = express.Router();
let Book = require('../model/Book');

// Add Book
bookRoute.route('/add-book').post((req, res, next) => {
      Book.create(req.body, (error, data) => {
            if (error) {
                  return next(error)
            } else {
                  res.json(data)
            }
      })
});
// Get all Book
bookRoute.route('/').get((req, res) => {
      Book.find((error, data) => {
            if (error) {
                  return next(error)
            } else {
                  res.json(data)
            }
      })
})

// Get Book
bookRoute.route('/read-book/:id').get((req, res, next) => {
      Book.findById(req.params.id, (error, data) => {
            if (error) {
                  return next(error)
            } else {
                  res.json(data)
            }
      })
})
bookRoute.route('/read-book/hi/:name').get((req, res, next) => {
      Book.findOne(req.params.name, (error, data) => {
            if (error) {
                  console.log("Bye")
                  return next(error)
            } else {
                  console.log("Hi")
                  res.json(data)
            }
      })
})


// Update Book
bookRoute.route('/update-book/:id').put((req, res, next) => {
      Book.findByIdAndUpdate(req.params.id, {
            $set: req.body
      }, (error, data) => {
            if (error) {
                  return next(error);
                  console.log(error)
            } else {
                  res.json(data)
                  console.log('Book updated successfully!')
            }
      })
})

// Delete Book
bookRoute.route('/delete-book/:id').delete((req, res, next) => {
      Book.findByIdAndRemove(req.params.id, (error, data) => {
            if (error) {
                  return next(error);
            } else {
                  res.status(200).json({
                        msg: data
                  })
            }
      })
})

//Find Book
// router.get('/user/:username', function(req, res, next) {
//   User.findOne({userName: req.params.username}, function(err, user) {
//          if(err)
//            console.log(err);
//          else
//            //do something with user
//     })
// });
bookRoute.route('/read-book/:name').put((req, res, next) => {
      Book.findOne(req.params.name, {
            $set: req.body
      }, (error, data) => {
            if (error) {
                  return next(error)
            } else {
                  res.json(data)
                  console.log("Hi")
            }
      })
})

module.exports = bookRoute;