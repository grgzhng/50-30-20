function newItemSubscribe(parent, args, context, info) {
  return context.db.subscription.item(
    { where: { mutation_in: ["CREATED"] } },
    info
  );
}

const newItem = {
  subscribe: newItemSubscribe
};

module.exports = {
  newItem
};
