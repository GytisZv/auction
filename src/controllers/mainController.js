const itemSchema = require('../schemas/itemSchema');

module.exports = {
  createItem: async (req, res) => {
    const item = new itemSchema({
      _id: 0,
      item: '',
      abc: '',
      starting_bid: '',
      image: '',
      start_date: '',
      owner: '',
      end_date: '',
    });
    await user.save();
    res.send({ ok: 'ok' });
  },
  getItems: async (req, res) => {
    const items = await itemSchema.find();
    res.send({ items });
  },
};
