db.buku.find({
  $and: [
    { kategori: "Informatika" },
    { stok: { $gt: 0 } }
  ]
});

