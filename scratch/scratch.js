function performPostRequest(e) {
    var resultElement = document.getElementById('postResult');
    var todoTitle = document.getElementById('todoTitle').value;
    resultElement.innerHTML = '';

    axios.post('http://jsonplaceholder.typicode.com/todos', {
            userId: '1',
            title: todoTitle,
            completed: false
        })
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response);
        })
        .catch(function (error) {
            resultElement.innerHTML = generateErrorHTMLOutput(error);
        });

    e.preventDefault();
}

                  // "http://lyle.smu.edu/~craley/3345/http/showResponse.php";
                //this.$root.$emit('bv::show::modal','2mod1');
                // alert(this.$refs.modRef.innerText);
                // this.$refs.modRef.show();
                //this.modalShow = true;
                //postTable(id,stat,num,func, e) 
                //this.$refs.modRef.title = "Hank";
                //document.getElementById('sMod').innerHTML= "Hank";
                //document.getElementById('mod1').setAttribute('title', 'Hank');
                //alert(this.$refs.t_num.innerText);
                
                //el.title = "Hank";