<!DOCTYPE html>
<html>
<?php
require '../php/components.php';
?>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>vue-code-template</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet"  type="text/css" href="../css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="../css/site.css">
</head>

<body>
<script type="text/x-template" id="item-template">
    <h4>Test Template</h4>
</script>



<?php
    echo $selectButton;
?>

    <div id="app-main" class = "container">
    <item></item>
    <div class="row">
        <div class="col-md-12 text-center">
            <h1>You are {{level}}
            </h1>
            <hr />
            <h3>Current XP:  {{xp }}</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <div class="row">
                <div class="col-md-6">
                    <button class="btn btn-success btn-block" @click="addXP">
                        <span class="glyphicon glyphicon-collapse-up"></span> Add XP</button>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <button class="btn btn-success btn-block" @click="decreaseXP">
                            <span class="glyphicon glyphicon-collapse-down" ></span> Decrease XP</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div>
<button @click="postRequest">Post</button>

        <sel-button title="D1" act="6" cnt="6"></sel-button>
        <button-counter></button-counter>
        <select-button title="D1" act="6" cnt="6"></select-button>
        <select-button title="E1" act="4" cnt="4"></select-button>
        <!--<blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></blog-post> -->

        <div class="og" id="A01" v-on:click="testClick('A01',$event)" ref="open">
            <h2>
                <span ref="t_name_A01">A01</span>
                <br />
                <span ref="t_number_A01">4</span>
            </h2>
        </div>
        <ul>
            <li>First Name: {{first}}</li>
            <li>Last Name: {{last}}</li>
            <li>Full Name: {{fullname}}</li>
        </ul>
        Full: <input type="text" v-model="fullname" >
        <br />
        First: <input type="text" v-model="first" />
        <br />
        Last: <input type="text" v-model="last" />
        <h3>Count: {{message}}</h3>
        <p>
            Visit:
            <a v-bind:href="url">{{cleanUrl}}</a>
        </p>
        <input type="text" class="form-control" v-model="url" />
        <button class="btn btn-primary" @click="humanizeUrl">Humanize Me</button>
        <h3>Count: {{count}}</h3>
        <input type="text" v-model="message" />
        <button class="btn btn-primary" @click="countUp">Count Up</button>
        <button class="btn btn-primary" @click="countDown">Count Dowm</button>
        <ul>
            <li style="list-style-type: none;" v-for="todo in todos">{{todo.id}}) {{todo.text}}</li>
        </ul>

    </div>

    <!-- built files will be auto injected -->

</body>
<script src="../js/vue.js" type="text/javascript"></script>
<script src="axios.min.js" type="text/javascript"></script>
<script src="app_s.js" type="text/javascript"></script>

</html>