  function somar() {

    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");

    document.getElementById("res").value = 
    Number(n1.value) + Number(n2.value);

    n1.value="";
    n2.value="";
  }

  function subtrair() {

  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");

  document.getElementById("res").value = 
  Number(n1.value) - Number(n2.value);

  n1.value="";
  n2.value="";
  }

  function multiplicar() {

  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");

  document.getElementById("res").value = 
  Number(n1.value) * Number(n2.value);

  n1.value="";
  n2.value="";
  }

  function dividir() {

  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");

  document.getElementById("res").value = 
  Number(n1.value) / Number(n2.value);

  n1.value="";
  n2.value="";
  }