const re = /^\s+$/;

export default input => {
  const invalid = input.filter(text => re.test(text) === false);

  console.log(invalid);

  if (invalid.length) {
    return true;
  }

  return false;
};
