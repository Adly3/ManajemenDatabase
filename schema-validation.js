db.createCollection("buku_validated", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["isbn", "judul", "penulis", "kategori", "stok"],
      properties: {
        isbn: {
          bsonType: "string",
          description: "Harus berupa string (ISBN)"
        },
        judul: {
          bsonType: "string",
          description: "Judul buku wajib"
        },
        penulis: {
          bsonType: "string",
          description: "Penulis wajib"
        },
        kategori: {
          bsonType: "string",
          description: "Kategori buku wajib"
        },
        stok: {
          bsonType: "int",
          minimum: 0,
          description: "Stok harus >= 0"
        }
      }
    }
  }
});
