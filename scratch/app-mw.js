
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
            modalTitle:"Hank",
            modalShow: false
            //id : "B3"
        }
    },
    props: ['title', 'act', 'cnt', 'stat'],
    methods: {
        tblClick: function (t_num, $event) {
            //console.log(this.$refs)
            var cls = this.$refs.tbl.className;
            if (cls == "og") {
                this.$refs.tbl.className = "fb";
                this.act = t_num;
                this.modalShow = true;
                
            } else {
                this.$refs.tbl.className = "og";
                this.act = this.cnt;
            }
            console.log(this.$refs);
        },
        showModal: function() {
                this.$refs.modRef.show()
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
        showModal: false

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
          	}
    }
});