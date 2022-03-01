module.exports.email = new RegExp(
  [
  '^[\\w.!#$%&\'*+\\/=?^{|}~-]+',
  '@[a-zA-Z\\d]',
  '(?:[\\w-]{0,61}[a-zA-Z\\d])?',
  '(?:\\.[a-zA-Z\\d](?:[\\w-]{0,61}[a-zA-Z\\d])?)+$',
  ].join(''),
);

module.exports.password = /^.{8,}$/;
