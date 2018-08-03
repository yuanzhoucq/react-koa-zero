async function checkAuth(ctx, next) {
  const userRole = ctx.session.userrole || "guest";
  ctx.body = {userRole};
  await next()
}

module.exports = {
  checkAuth
};