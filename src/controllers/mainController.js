const itemSchema = require('../schemas/itemSchema');
const userSchema = require('../schemas/userSchema');
const bcrypt = require('bcrypt');

module.exports = {
  createItem: async (req, res) => {
    console.log('req.body ===', req.body);
    const item = new itemSchema({
      _id: req.body.id,
      item: req.body.item_name,
      starting_bid: req.body.starting_bid,
      image: req.body.image,
      start_date: req.body.start_date,
      owner: req.body.owner,
      end_date: req.body.end_date,
    });
    await item.save();
    res.send({ ok: 'ok' });
  },
  getItems: async (req, res) => {
    const items = await itemSchema.find();
    res.send({ items });
  },
  getOneItem: async (req, res) => {
    const { id } = req.params.id;
    const items = await itemSchema.findById(req.params.id);
    res.send({ items });
  },
  register: async (req, res) => {
    const { email, passOne: password1 } = req.body;
    let password = await bcrypt.hash(password1, 8);
    const userExists = await userSchema.findOne({ email });
    if (userExists) {
      res.send({
        error: true,
        message: 'user already exists',
        data: null,
      });
      return;
    }

    // REGISTER NEW USER
    const user = new userSchema({ email, password });
    await user.save();

    res.send({ error: false, message: null, data: user });
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    // const user = await userSchema.findOne({ email, password });
    const user = await userSchema.findOne({ email });
    // jeigu bcryptas pasako, kad pass ne tokie pat, tai metam errora
    if (!bcrypt.compare(user.password, password)) {
      res.send({
        error: true,
        message: 'bad passwordinho brother',
        data: null,
      });
      return;
    }

    console.log('prijungta');
    res.send({ error: false, message: null, data: user });
  },
};
