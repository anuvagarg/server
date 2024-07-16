// ./src/api/user/controllers/logout.js
module.exports = {
  async logout(ctx) {
    try {
      // Invalidate the JWT token or perform any necessary logout operations
      ctx.cookies.set('token', null); // Clearing the token cookie, if applicable
      ctx.send({ message: 'Logout successful' });
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};
