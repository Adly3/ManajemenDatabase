db.buku.aggregate([
  {
    $group: {
      _id: "$kategori",
      total_stok: { $sum: "$stok" }
    }
  }
]);
