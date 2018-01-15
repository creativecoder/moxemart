export default ({ price }: { price: number }) => {
  const displayPrice = price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return <span>${displayPrice}</span>;
};
