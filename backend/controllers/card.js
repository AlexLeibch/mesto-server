const Card = require('../models/card');

const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const Forbidden = require('../errors/forbidden');

const getCard = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(next);
};

const createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Некорректный запрос'));
      } else {
        next(err);
      }
    });
};

const deleteCard = (req, res, next) => {
  const id = req.params.cardId;
  Card.findById(id)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      if (card.owner.toString() !== req.user._id) {
        throw new Forbidden('Вы не можете удалить карточку другого пользователя');
      } else {
        Card.findByIdAndDelete(req.params.cardId)
          // eslint-disable-next-line no-shadow
          .then((card) => {
            res.status(200).send(card);
          })
          .catch(next);
      }
    })
    .catch((err) => {
      console.log('catch_card', err.message);
      next(err);
    });
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      res.send(card);
    })

    .catch((err) => {
      console.log('catch', err.message);
      next(err);
    });
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndDelete(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => {
      console.log('then', card);
      if (!card) {
        throw new NotFoundError('Карточка не найдена');
      }
      res.send(card);
    })
    .catch((err) => {
      console.log('catch', err.message);
      next(err);
    });
};

module.exports = {
  getCard,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
