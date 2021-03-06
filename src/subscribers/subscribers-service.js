const SubscribersService = {
  getAllSubscribers(knex) {
    return knex.select("*").from("subscribers");
  },
  getBySubscriberId(knex, id) {
    return knex.select("*").where("id", id).from("subscribers").first();
  },
  getSubscriberCountByCuratorId(knex, curator_id) {
    return knex.from("subscribers").where("curator_id", curator_id).count("*");
  },
  checkExisting(knex, newSubscriber) {
    return knex.select("*")
      .from("subscribers")
      .where("curator_id", newSubscriber.curator_id)
      .andWhere("phone_number", newSubscriber.phone_number)
      .first()
  },
  insertSubscriber(knex, newSubscriber) {
    return knex
      .insert(newSubscriber)
      .into("subscribers")
      .returning("*")
      .then((rows) => {
        return rows[0];
      });
  },
  deleteSubscriber(knex, id) {
    return knex.from("subscribers").where({ id }).delete();
  },
  getAllSubscribersByCuratorId(knex, curator_id) {
    return knex.from("subscribers").where("curator_id", curator_id).select("*");
  },
  deleteAllSubscribersByCuratorId(knex, curator_id) {
    return knex
      .from("subscribers")
      .where("curator_id", curator_id)
      .delete()
      .count();
  },
  deleteSubscriberByPhoneNumber(knex, phone_number) {
    return knex
      .from("subscribers")
      .where("phone_number", phone_number)
      .delete()
      .count();
  },
};

module.exports = SubscribersService;
