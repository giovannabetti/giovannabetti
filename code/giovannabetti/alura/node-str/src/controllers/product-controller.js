'use strict';

exports.post = (req, res, next) => {
  res.status(201).send(req.body);
};

exports.put = (req, res, next) => {
    // recovering params from url
    const id = req.params.id;
    res.status(201).send({
      id: id,
      item: req.body
    });
};

exports.delete = (req, res, next) => {
  res.status(200).send(req.body);
};
