function validateDate(date) {
  if (!date || date.trim() === "") {
    return ("La fecha de nacimiento es requerida");
  }
  const dateValidate = new Date(date);
  if (isNaN(dateValidate.getTime())) return ("La fecha de nacimiento no es válida");
  if (dateValidate > new Date())return ("La fecha no puede ser en el futuro");

  return dateValidate;
}


module.exports = { validateDate};
