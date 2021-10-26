const createError = require('http-errors');
const _ = require('lodash');
const { Phone } = require('../models');

module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.find().limit(5);

    res.status(200).send({ data: foundPhones });
  } catch (err) {
    next(err);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const foundPhone = await Phone.findById(phoneId);

    if (foundPhone) {
      return res.status(200).send({ data: foundPhone });
    }
    next(createError(404, 'Phone not found'));
  } catch (err) {
    next(err);
  }
};

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;

  try {
    const newPhoneInstance = new Phone(body);
    const createdPhone = await newPhoneInstance.save();
    console.log(`createdPhone`, createdPhone);
    const preparedPhone = _.omit(createdPhone, ['_id', '__v']);
    if (createdPhone) {
      res.status(200).send(preparedPhone);
      return;
    }
    next(createError(400, 'Bad request'));
  } catch (err) {
    next(err);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
    body,
  } = req;

  try {
    const updatedPhone = await Phone.findByIdAndUpdate({ _id: phoneId }, body, {
      runValidators: true,
    });

    if (updatedPhone) {
      return next();
    }
    next(createError(404, 'Phone not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const deletedPhone = await Phone.findOneAndDelete(phoneId);

    if (deletedPhone) {
      return res.status(200).send({ data: deletedPhone });
    }
    next(createError(404, 'Phone not found'));
  } catch (err) {
    next(err);
  }
};
