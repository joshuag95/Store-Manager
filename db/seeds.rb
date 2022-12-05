
puts "🌱 Seeding spices..."

Product.destroy_all
Store.destroy_all

product1 = Product.create(
    name: "FlatPhone",
    price: 500,
    inventory: 25,
    category: "phone",
    store_id: 1,
    image: "https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg"
)

product2 = Product.create(
    name: "FlatBookPro",
    price: 2000,
    inventory: 18,
    category: "laptop",
    store_id: 1,
    image: "https://www.cnet.com/a/img/resize/cf15df883a6cdfd994c1451e9b2698f859ed4c3a/hub/2017/06/06/349b7e65-a855-44f0-ae0a-6610ebca0809/apple-macbook-pro-12-inch-2017-4181.jpg?auto=webp&width=768"
)

product3 = Product.create(
    name: "FlatPods",
    price: 200,
    inventory: 57,
    category: "earbud",
    store_id: 1, 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL9nfli6atvI7gGqSsFRSOJo3c_Ydw25ne7w&usqp=CAU"
)

Store.create(
    name: "Flatapple Store",
)

puts "✅ Done seeding!"