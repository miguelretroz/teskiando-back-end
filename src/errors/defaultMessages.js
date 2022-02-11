module.exports.ALREADY_REGISTERED = (key) => `${key} já registrado`;
module.exports.INCORRECT_TYPE = (key, type) => `${key} deve ser "${type}"`;
module.exports.REQUIRED = (key) => `${key} é obrigatório`;
module.exports.INVALID_PATTERN = (key) => `${key} no formato incorreto`;
module.exports.MIN_LENGTH = (key, min) => `${key} deve ter ${min} ou mais caracteres`;
module.exports.PASSWORDS_MUST_BE_EQUAL = () => 'As senhas devem ser iguais';
module.exports.NOT_FOUND = (key) => `${key} não encontrado`;
module.exports.INCORRECT = (key) => `${key} incorret${key[key.length - 1] === 'a' ? 'a' : 'o'}`;
