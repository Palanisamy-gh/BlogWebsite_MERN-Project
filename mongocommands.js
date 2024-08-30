// Retrive all categories
const categories = db.categories.find({}).toArray();

const categoryMap = {};
categories.forEach((category) => {
  categoryMap[category.name] = category._id;
});

db.posts.find({}).forEach((post) => {
  const categoryId = categoryMap[post.category];
  if (categoryId) {
    db.posts.updateOne({ _id: post._id }, { $set: { category: categoryId } });
  }
});
