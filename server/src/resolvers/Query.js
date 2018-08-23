function items(parent, args, context, info) {
  return context.db.query.items({}, info);
}

module.exports = {
  items
};
