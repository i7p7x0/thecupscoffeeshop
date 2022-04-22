const Menu = require("../models/Menu");
const errors = require("../json/errors");
const successes = require("../json/successes");

// get json of menu with items
exports.getMenu = async (req, res, next) => {
  let menu;

  try {
    menu = await Menu.menu.find();
  } catch (err) {
    return res.json(errors.error.fatalError);
  }
  return res.json(menu);
};

// add new item to the menu
exports.postMenuItem = async (req, res, next) => {
  const { category, name, price } = req.body;
  const newItemObj = new Menu.item({ name: name, price: price });

  let existingCategory = await Menu.menu.findOne({ category: category });

  //   add an item for which the category does not exist
  if (existingCategory === null || existingCategory === undefined) {
    let menuItem = new Menu.menu({
      category: category,
      items: [newItemObj],
    });
    try {
      await menuItem.save();
    } catch (error) {
      return res.json(errors.error.fatalError);
    }
  }
  // add item to an existing category
  if (existingCategory !== null) {
    //   check if item to be added already exists in the menu
    let existingItem = existingCategory.items.find(
      (item) => item.name === name
    );
    // do not add the same item twice
    if (existingItem !== undefined) {
      return res.json(errors.error.itemAlreadyExistsError);
    }
    let items = existingCategory.items;
    items.push(newItemObj);

    // add new item to existing menu category
    try {
      await Menu.menu.replaceOne(
        { category: category },
        {
          category: category,
          items: items,
        }
      );
    } catch (error) {
      return res.json(errors.error.fatalError);
    }
  }
  return res.json(successes.success.added);
};
exports.patchMenuItem = (req, res, next) => {};
exports.deleteMenuItem = (req, res, next) => {};