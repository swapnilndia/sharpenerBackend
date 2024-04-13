const Cart = require("./cart");
const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      "INSERT INTO products (title, description, imageUrl, price) VALUES (?, ?, ?, ?)",
      [this.title, this.description, this.imageUrl, this.price]
    );
  }

  static deleteById(id) {
    db.execute("DELETE FROM products where id = ?", [id]);
    return db.execute(`SELECT * FROM products`);
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products");
  }

  static findById(id) {
    return db.execute(`SELECT * FROM products where id=?`, [id]);
  }
};
