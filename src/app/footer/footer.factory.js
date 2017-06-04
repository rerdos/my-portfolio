export const getCurrentYear = () => new Date().getFullYear().toString();

export const getCopyrightDuration = (createdIn) => {
  const currentYear = getCurrentYear();
  const inYearOfCreation = (createdIn === currentYear);
  const optional = inYearOfCreation ? ('') : (`- ${currentYear}`);
  return `${createdIn} ${optional}`
}