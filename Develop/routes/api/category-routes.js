const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try {
    const Allcategory = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(Allcategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  try {
    const Allcategory = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!Allcategory) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(Allcategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  // create a new category
  try {
    const Allcategory = await Category.create(req.body);
    res.status(200).json(Allcategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  try {
    const Allcategory = await Category.update(
      req.body,
    {
      where: {
        category_id: req.params.id
      }
    }
  );
    res.status(200).json(Allcategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  try {
    const Allcategory = await Category.destroy({
      where: {
        category_id: req.params.id,
      },
    });

    if (!Allcategory) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(Allcategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
