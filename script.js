function test() {

    alert("Hello")
}

function RenderStudents(){
    let ddl_students= document.getElementById('ddl_students')
    fetch('https://test-api-8tdd.onrender.com/students')
      .then(response => response.json())
      .then(json => console.log(json))
}

RenderStudents();