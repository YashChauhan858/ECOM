export const invalidEndPoint = (app) => {
  // catch 404 and forward to error handler
  app.use((request, response, next) => {
    response.status(404).send("No Endpoint Exist");
    next();
  });
};
