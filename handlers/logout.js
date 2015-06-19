module.exports = function(req, reply) {
  reply.view("logout").state("loggeIn", "false").state("user", "blank").state("token", "blank");
};
