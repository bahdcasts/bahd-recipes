<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Unica+One" rel="stylesheet">
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="{{ asset('css/vegas.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/animate.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
    <title>Bahd-recipes </title>
</head>

<body>
    <!-- The navigation bar begin -->
    <nav class="navbar navbar-expand-lg navbar-custom">
        <a class="navbar-brand" href="index.html">
            <img src="img/logo.png" class="navbar-logo-img mr-2" alt=""> Bahd-recipes
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

            </ul>

            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a href="create-recipe.html" class="nav-link create-recipe-link">Create recipe
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item mr-3">
                    <a class="nav-link" href="recipes.html">Recipes
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                </form>
            </ul>
        </div>
    </nav>
    <!-- The navigation bar ending -->
    @yield('content')
    <!--Begin page footer -->
    <footer class="footer">
        <p>Bahd-recipes app by bahdcoder @andela</p>
    </footer>
    <!-- End page footer -->

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
        crossorigin="anonymous"></script>
    <script src="{{ asset('js/vegas.min.js') }}"></script>
    <script src="{{ asset('js/wow.min.js') }}"></script>
    <script>
        new WOW().init();
        $("#jumbotron").vegas({
            timer: false,
            shuffle: true,
            transition: 'fade',
            animation: 'kenburns',
            slides: [
                { src: 'img/banner-1.jpg' },
                { src: 'img/banner-2.jpg' },
                { src: 'img/banner-3.jpg' }
            ]
        });
    </script>
</body>

</html>