function spreadClassRoom(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, assistant, students;
  if (hasTeachingAssistant) {
    [teacher, assistant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

let result = spreadClassRoom({
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
});

console.log(result);
