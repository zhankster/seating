<?php
function conn_db(){
    try {
    $host = $GLOBALS['db_host'];
    $db = $GLOBALS['db_name'];function performGetRequest2() 
  var resultElement = document.getElementById('getResult2');
  var todoId = document.getElementById('todoId').value;
  resultElement.innerHTML = '';

  axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
  .then(function (response) {
    console.log(response);
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
}function performGetRequest2() {
  var resultElement = document.getElementById('getResult2');
  var todoId = document.getElementById('todoId').value;
  resultElement.innerHTML = '';

  axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
  .then(function (response) {
    console.log(response);
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
}function performGetRequest2() {
  var resultElement = document.getElementById('getResult2');
  var todoId = document.getElementById('todoId').value;
  resultElement.innerHTML = '';

  axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
  .then(function (response) {
    console.log(response);
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
}

    function performGetRequest2() {
  var resultElement = document.getElementById('getResult2');
  var todoId = document.getElementById('todoId').value;
  resultElement.innerHTML = '';

  axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
  .then(function (response) {
    console.log(response);
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
}function performGetRequest2() {
  var resultElement = document.getElementById('getResult2');
  var todoId = document.getElementById('todoId').value;
  resultElement.innerHTML = '';

  axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
  .then(function (response) {
    console.log(response);
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
}function performGetRequest2() {
  var resultElement = document.getElementById('getResult2');
  var todoId = document.getElementById('todoId').value;
  resultElement.innerHTML = '';

  axios.get('http://jsonplaceholder.typicode.com/todos', {
    params: {
      id: todoId
    }
  })
  .then(function (response) {
    console.log(response);
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
} = new PDO("mysql:host=$host;dbname=$db;charset=utf8",  $GLOBALS['db_user'], $GLOBALS['db_pass']);

    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $connection;
    }
    catch(PDOException $e) {
        echo 'ERROR: ' . $e->getMessage();
    }
}

//$connection->exec('INSERT INTO users VALUES (1, "somevalue"');

//$affectedRows = $connection->exec('INSERT INTO users VALUES (1, "somevalue"');
//echo $affectedRows;

/*
foreach($connection->query('SELECT * FROM users') as $row) {
    echo $row['id'] . ' ' . $row['name'];
}
*/

$conn = conn_db();

//print_r($conn);

foreach($conn->query('SELECT * FROM tables') as $row) {
    echo $row['id'] . ' ' . $row['table_id'].'<br />';
?>

/* .circle::after {
  background: white none repeat scroll 0 0;
  /*border-radius: 50%; */
  /*
  content: " ";
  display: block;
  height: 100px;
  opacity: 0.15;
  position: absolute;
  width: 150px;
  left: 20px;
}
.circle {
  background-image: radial-gradient(
    ellipse at 50px 10px,
    #ffffff 0%,
    #fff 5%,
    #00ff00 100%
  ); */ß