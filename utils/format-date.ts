export const formatted_date = (required_date: string) => {
  const final_date = new Date(required_date);
  const formatted_date = final_date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formatted_date;
};
