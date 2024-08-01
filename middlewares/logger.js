const catchAsync = require("./../utils/catchAsync");

exports.logger = catchAsync(async (req, res, next) => {
  const data = JSON.stringify({
    method: req.method,
    originalUrl: req.originalUrl,
    // timeStamp: new Date().toLocaleDateString(),
    timeStamp: Date.now(),
  });

  console.log(data);

  next();
});
