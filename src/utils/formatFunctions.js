export const formatDate = (date) => {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  return formattedDate;
};

export const formatNumber = (number, currency, useDecimals) => {
  let formattedNumber;

  if (useDecimals) {
    formattedNumber = number.toFixed(2);
  } else {
    formattedNumber = Math.round(number).toLocaleString();
  }

  if (currency) {
    formattedNumber = `${currency} ${formattedNumber}`;
  }

  return formattedNumber;
};
