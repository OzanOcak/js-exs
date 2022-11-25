const Person = ({ firstname, age, job }) => {
  var _firstname = firstname;
  var _age = age;
  var _job = job;

  return {
    getName: () => _firstname,
    getAge: () => _age,
    getJob: () => _job,

    setJob: (nextJob) => (_job = nextJob),
  };
};

const p = Person({ name: "tom", age: 22, job: "student" });
console.log(p.getJob());
p.setJob("software developer");
console.log(p.getJob());
