<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css" integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        @viteReactRefresh
        @vite('resources/js/app.jsx')
        <style>
        body{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: #262626;
            overflow-x: hidden;
            color: white;
        }
        canvas{
            width: 1vw;
            height: 1vh;
        }
        ul {
            width: 15vw;
        }
        .container-fluid{
            display: flex;
            flex-direction: row;
            width: 100vw;
            justify-content: flex-end;
            align-items: center;
        }
        #root{
            background-color: #262626;
            overflow: hidden;
        }
        </style>
    </head>
    <body>
    <header class="header clearfix bg-262626" style="background-color:#262626">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#">
                <img src="{{ asset("logo.png") }}" alt="" width="200px" height="200px">
                </a>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Pricing</a>
                        </li>
                    </ul>
            </div>
        </nav>
    </header>
        <div id="root"></div>
        <h1>asdf</h1>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.min.js" integrity="sha512-ykZ1QQr0Jy/4ZkvKuqWn4iF3lqPZyij9iRv6sGqLRdTPkY69YX6+7wvVGmsdBbiIfN/8OdsI7HABjvEok6ZopQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </body>
</html>
