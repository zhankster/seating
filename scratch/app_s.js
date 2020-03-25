var bCount = '<div><button v-on:click="count++">Da Button has been clicked {{count}} times</button>';
bCount += '<br /><span>{{count}}</span></div>';

var btn = `<div><div class="gg full" id="A01" v-on:click="testClick('A01',$event)" ref="open"><h2><span ref="t_name_A01">A01_</span><br />`;
btn += `<span ref="t_number_A01">{{ref}}</span></h2></div></div>`;

// var btn = '<div><div class="gg full" id="{{id}}" v-on:click="testClick(\'{{id}}\',$event)" ref="open"><h2><span ref="t_name_{{id}}">{{id}}</span><br />';
// btn += '<span ref="t_number_{{id}}">4</span></h2></div></div>';

// var btn = `<div><div class="og"  v-on:click="testClick({{ id }},$event)" ref="open"><h2><span ref="t_name_{{ id }}">{{ id }}</span><br />`;
// btn += `<span v-bind:ref="t_number_{{ id }}">4</span></h2></div></div>`;

var btn = `<div class="flex-container"><div class="og" @click="tblClick(2, $event)" ref="tbl"><h2><span ref="t_name">{{ title }}</span><br />`;
btn += `<span ref="t_num">{{act}}</span></h2></div></div>`;


Vue.component('select-button', {
    data: function () {
        return {
            count: 0
            //id : "B3"
        }
    },
    props: ['title', 'act','cnt', 'stat'],
    methods: {
        tblClick: function(t_num, $event){
            //console.log(this.$refs)
            var cls = this.$refs.tbl.className;
            if (cls == "og"){
            this.$refs.tbl.className = "fb";
            this.act = t_num;
            }
            else {
                this.$refs.tbl.className = "og";
                this.act = this.cnt;
            }
            console.log(this.$refs);
        }
    },
    computed: {
        tbl_id: function(){
            
        }

    },
    //template: '<button v-on:click="count++">This has been clicked {{count}} times</button>'
    template: btn
})


Vue.component('sel-button', {
    data: function () {
        return {
            count: 0
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
            } else {
                this.$refs.tbl.className = "og";
                this.act = this.cnt;
            }
            console.log(this.$refs);
        }
    },
    computed: {
        tbl_id: function () {

        }

    },
    template: "#selBtn" 
})

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    props: ['id'],
    //template: '<button v-on:click="count++">This has been clicked {{count}} times</button>'
    template: bCount,
    name: "sel-byn"
})

Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button>
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

Vue.component('item', {
    template: '#item-template'

})



var app = new Vue({
    el: "#app-main",
    data: {
        appName: "Dine",
        message: "Welcome to Vue",
        isFull: false,
        first: "",
        last: "",
        xp: 10,
        todos: [{
                text: "Learn Vue",
                id: 1
            },
            {
                text: "Watch more videos",
                id: 2
            },
            {
                text: "Write code",
                id: 3
            },
            {
                text: "Learn Vue",
                id: 1
            }, {
                text: "Watch more videos",
                id: 2
            }, {
                text: "Write code",
                id: 3
            },

        ],
        count: 0,
        url: "",
        cleanUrl: ""
    },
    computed:{
        level: function () {
            if (this.xp >= 200){
                return "Pro"
            } else if (this.xp >=100){
                return "Intermediate"
            } else if (this.xp >=100){
                return "Intermediate"
            } else if (this.xp >= 0) {
                return "Beginner"
            } else  {
                return "Banned"
            }

        },
        fullname: { 
            //getter functio
            get: function() {
                return this.first + ' ' + this.last;
            },
            set: function (value) {
                var name = value.split(' ');
                this.first = name[0];
                this.last = name[name.length -1];
            }
        }
    },
    methods: {
        postRequest: function (e) {
            performPostRequest(e);
        },
        addXP: function () {
            this.xp  += 10;
        },
        decreaseXP: function () {
            this.xp -= 10;
        },
        humanizeUrl: function () {
            this.cleanUrl = this.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
        },
        countUp: function () {
            this.count += 1;
        },
        countDown: function () {
            this.count -= 1;
        },
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
            console.log(this.$refs);

            //alert(e.target.innerText);
            //alert(this.$refs["t_name"].innerText);
            // console.log(this.$refs["t_name_" + key].innerText);
            // //alert(e.target.$refs["t_name"].innerText);

            // var svg = this.$refs["t_name_" + key];
            // this.svgDOMX = svg.getBoundingClientRect().left;
            // console.log(this.svgDOMX);
            //bootbox.alert("BBox Test");
        }
    }
});


function performPostRequest(e) {
    axios.post('post.php', {
        table : 'A1',
        status: 'status',
        num_dining: 4
    })
    .then(function (r) {
        //resultElement.innerHTML = generateSuccessHTMLOutput(response);
        var j = JSON.stringify(r);
        alert(r);
        //alert(r.data.Ben[0]);
        //alert(data.Ben);
    })
        .catch(function (error) {
            //resultElement.innerHTML = generateErrorHTMLOutput(error);
        });
    }

    //e.preventDefault();
