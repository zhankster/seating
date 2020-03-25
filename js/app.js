//var btn = `<div class="flex-container"><div class="og" @click="tblClick(2, $event)" ref="tbl"><h2><span ref="t_name">{{ title }}</span><br />`;
//btn += `<span ref="t_num">{{act}}</span></h2></div></div>`;
// var btn =`<div class="flex-container">
//             <div class="og" @click="tblClick(5, $event)" 
//             ref="tbl"><h2><span ref="t_name">{{ title }}</span><br />
//             <span ref="t_num">{{act}}</span></h2>
//             </div>
//         </div>`;

Vue.component('modal', {
            template: '#modal-01',
            props: ['show'],
            methods: {
                savePost: function () {
                    // Some save logic goes here...

                    this.$emit('close');
                }
            }
            });


Vue.component('select-button', {
    data: function () {
        return {
            count: 0,
            modalTitle:"",
            modalShow: false,
            btnId: ""
            //id : "B3"
        }
    },
    props: ['title', 'act', 'cnt', 'stat'],
    methods: {
        tblClick: function ( t_num,$event) {
            //console.log(this.$refs)
            var cls = this.$refs.tbl.className;
            //t_num = 
            clearBtns("numSeated");
            if (cls == "og") {
                var t = this.cnt;
                //alert(t);
                document.getElementsByClassName('modal-title')[0].innerText = this.$refs.t_name.innerText;
                var tc = this.$refs.t_num.innerText;
                document.getElementById('sTC').innerText = "This table will seat " + tc;
                //this.$emit('clicked', id);
                this.$root.$emit('bv::show::modal','2mod1');
                this.$refs.tbl.className = "fb";
                this.act = t;
            } else {
                this.modalShow = false;
                this.$refs.tbl.className = "og";
                this.act = this.$refs.t_num.innerText;
                //postTable(id,stat,num,func, e) 
            }
            console.log(this.$refs);
        },
        showModal: function() {
                this.$root.$emit('bv::show::modal','2mod1');
            }

    },
    computed: {
        tbl_id: function () {

        }

    },
    //template: '<button v-on:click="count++">This has been clicked {{count}} times</button>'
    template: "#selectBtn"
});

Vue.component('modal-01', {
    data: function () {
        return {
            count: 0,
            modalShow: false
           
        }
    },
    props: ['title', 'act', 'cnt'],
    methods: {
        focusMyElement(e) {
            this.$refs.focusThis.focus()
        }
    },
    computed: {
        tbl_id: function () {

        }

    },
    //template: '<button v-on:click="count++">This has been clicked {{count}} times</button>'
    template: "#mod01"
})


var app = new Vue({
    el: "#app-main",
    data: {
        appName: "Dine",
        isFull: false,
        url_table:"data/tables.xml",
        modalShow: false,
        showModal: false,
        selected: 'first',
        options: [
            { text: '1',  value: '1' },
            { text: '2',  value: '2' },
            { text: '3',  value: '3' },
            { text: '4',  value: '4' },
            { text: '5',  value: '5' },
            { text: '6',  value: '6' },
            { text: '7',  value: '7' },
            { text: '8',  value: '8' }
        ]
    },
    methods: {
        executeSearch: function (t, e) {
            var msg = this.query + " got a " + this.score + " on the test";
            alert(msg);
        },
        onBlockClick: function () {
            alert("Middle Click");
        },
        evaluateKey: function () {
            return false;
        },
        seatTable: function () {
            this.hideModal();
        },
        showModal: function () {
            this.$refs.modRef.show();
        },
        hideModal: function () {
            this.$refs.modRef.hide();
        },
        testClick: function (key, e) {
            //alert(e.target.innerText);
            //alert(this.$refs["t_name"].innerText);
            console.log(this.$refs["t_name_" + key].innerText);
            //alert(e.target.$refs["t_name"].innerText);

            var el = document.getElementById(key);
            var stat = el.title;
            if (stat === "Open"){
                el.title = "Full"
                el.className = "fb";
                this.modalShow = true;
            }
            else{
                el.title = "Open"
                el.className = "og";
                this.modalShow = false;
            }
            console.log(el.title);

            var svg = this.$refs["t_name_" + key];
            this.svgDOMX = svg.getBoundingClientRect().left;
            console.log(this.svgDOMX);
            //bootbox.alert("BBox Test");
        },
          	getxml: function () {
          	    var _this = this;
          	    var request = new XMLHttpRequest();
          	    console.log('requesting');
          	    request.onreadystatechange = function () {
          	        if (request.readyState === 4) {
          	            _this.response = request.responseText;
          	            console.log("ready state changed");
          	        }
          	    }
          	    request.open('GET', _this.url_table, true);
          	    request.send();
              },
              readXml: function () {
                axios.get("data/tables.xml")
                .then(response => {
                    var self = this;
                    parseString(response.data, function(){
                        self.events = result
                    });
                });
            },
    }
});

function postTable(id,stat,num,func, e) {
    var resultElement = document.getElementById('postResult');
    var todoTitle = document.getElementById('todoTitle').value;
    resultElement.innerHTML = '';
    
    axios.post('php/connection.php', {
      id: id,
      stat: stat,
      num: num,
      func:func
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
    
    e.preventDefault();
  }

function clearBtns(el){
  var ele = document.getElementsByName(el);
  for(var i=0;i<ele.length;i++)
     ele[i].checked = false;
}