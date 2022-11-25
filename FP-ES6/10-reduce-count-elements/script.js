const votes = [
  "Harry",
  "Rick",
  "Ben",
  "Ben",
  "Harry",
  "Ashley",
  "Connor",
  "Rick",
  "Ashley",
  "Rick",
  "Albert",
  "Ben",
  "Michael",
  "Rick",
  "Albert",
  "Karen",
  "Harry",
  "Karen",
  "Donna",
  "Ashley",
  "Albert",
  "Harry",
  "Dane",
  "Dane",
  "Rick",
  "Donna",
  "Mortimer",
];
const collectVotes = () =>
  votes.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: acc[curr] ? acc[curr] + 1 : 1,
    }),
    {}
  );
console.log(collectVotes());
