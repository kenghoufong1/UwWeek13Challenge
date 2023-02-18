const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try {
    const Alltag = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(Alltag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id',async (req, res) => {
  // find a single tag by its `id`
  try {
    const Alltag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!Alltag) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(Alltag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new tag
  try {
    const Alltag = await Tag.create(req.body);
    res.status(200).json(Alltag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try {
    const Alltag = await Tag.update(
      req.body,
    {
      where: {
        tag_id: req.params.id
      }
    }
  );
    res.status(200).json(Alltag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try {
    const Alltag = await Tag.destroy({
      where: {
        tag_id: req.params.id,
      },
    });

    if (!Alltag) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }
    res.status(200).json(Alltag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
