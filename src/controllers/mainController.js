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
    console.log('item=', item);
    console.log(res);
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
        message: 'Vartotojo vardas jau naudojamas',
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
    const { email, password1 } = req.body;

    const user = await userSchema.findOne({ email });
    console.log('user after findone() ===', user);
    if (!user) {
      res.send({
        error: true,
        message: 'user doesnt exist',
        data: null,
      });
      console.log('user doesnt exist');
      return;
    }
    bcrypt.compare(password1, user.password, async (error, result) => {
      if (!result) {
        console.log('error ===', error);
        res.send({
          error: true,
          message: 'bad passwordinho brother',
          data: null,
        });
      } else {
        console.log('prijungta');
        res.send({ error: false, message: 'online', data: user });
      }
    });
  },
};
