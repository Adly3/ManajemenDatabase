db.buku.updateOne(
  { isbn: "9786020322310" },
  { $set: { stok: 3 } }
);
