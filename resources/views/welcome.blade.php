@extends('layouts.app')

@section('content')
<!-- The Jumbotron Area -->
<div id="jumbotron" class="jumbotron text-center">
        <h1 class="display-3 mb-5">
            <img src="{{ asset('img/logo.png') }}" class="jumbotron-logo-img mr-2" alt="">
        </h1>

        <p class="lead jumbotron-title display-4 wow bounceInUp" data-wow-duration="2s" style="color: white;">Making everyday cooking fun !</p>
        <br>
        <p class="lead">
            <!-- The home button 
                    If the user is authenticated, let him rather see a create recipe button
                -->
            <a href="login.html" class="btn btn-primary btn-lg">Sign in</a>
            <a href="login.html" class="btn btn-primary btn-lg">Join now</a>
            <!-- End of the home button -->
        </p>
    </div>
    <!-- End of the jumbotron area -->

    <!-- Top rated recipes section -->
    <div class="container-fluid px-5 my-5">
        <h1 class="display-4 text-center my-5 wow fadeInDown" style="padding: 30px 0px;">
            <i class="ion ion-star"></i>
            Top Rated Recipes</h1>
        <br>
        <div class="card-deck wow fadeIn" data-wow-duration="4s">
            <div class="card mb-3">
                <div class="img-zoom">
                    <img class="card-img-top" style="height: 250px;" src="{{ asset('img/meal-1.jpg') }}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">
                        <a href="single-recipe.html">Pressurized African Cassava Golden Grains ( Garri )</a>
                    </h5>
                    <hr>
                    <p class="text-sm mb-5">
                        <small>
                            <span class="text-muted">by</span> Elizabeth Funkirokeze</small>
                        <span class="text-muted float-right">
                            <i class="ion ion-clock"></i>
                            35 min</span>
                    </p>

                    <p class="h6 text-center">
                        <span class="mr-3 h5">
                            <i class="ion ion-happy-outline"></i> 12 </span>
                        <span class="mr-3 h5">
                            <i class="ion ion-sad-outline"></i> 5,301</span>
                        <span class="mr-3 h5">
                            <i class="ion ion-ios-heart"></i> 5,301</span>
                    </p>
                </div>
            </div>
            <div class="card mb-3">
                <div class="img-zoom">
                    <img class="card-img-top" style="height: 250px;" src="{{ asset('img/meal-2.jpg') }}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">
                        <a href="single-recipe.html">Emergency Jollof and coconut stew</a>
                    </h5>
                    <hr>
                    <p class="text-sm mb-5">
                        <small>
                            <span class="text-muted">by</span> Kati Frantz</small>
                        <span class="text-muted float-right">
                            <i class="ion ion-clock"></i>
                            2 min</span>
                    </p>
                    <p class="h6 text-center">
                        <span class="mr-3 h5">
                            <i class="ion ion-happy-outline"></i> 12 </span>
                        <span class="mr-3 h5">
                            <i class="ion ion-sad-outline"></i> 5,301</span>
                        <span class="mr-3 h5">
                            <i class="ion ion-ios-heart"></i> 5,301</span>
                    </p>
                </div>
            </div>
            <div class="card mb-3">
                <div class="img-zoom">
                    <img class="card-img-top" style="height: 250px;" src="{{ asset('img/meal-3.jpg') }}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">
                        <a href="single-recipe.html">Advanced Abacha and Egg sauce</a>
                    </h5>
                    <hr>
                    <p class="text-sm mb-5">
                        <small>
                            <span class="text-muted">by</span> Elizabeth Funkirokeze</small>
                        <span class="text-muted float-right">
                            <i class="ion ion-clock"></i>
                            35 min</span>
                    </p>
                    <p class="h6 text-center">
                        <span class="mr-3 h5">
                            <i class="ion ion-happy-outline"></i> 12 </span>
                        <span class="mr-3 h5">
                            <i class="ion ion-sad-outline"></i> 5,301</span>
                        <span class="mr-3 h5">
                            <i class="ion ion-ios-heart"></i> 5,301</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- End of top rated recipes section -->

    <!-- Top rated chefs section -->
    <div class="container px-5 my-5">
        <h1 class="display-4 text-center my-5 wow fadeInDown" style="padding: 30px 0px;">
            <i class="ion ion-person-stalker"></i>
            Most Popular Chefs</h1>
        <br>
        <div class="row wow fadeIn" data-wow-duration="4s">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-fluid img-responsive" src="http://i.pravatar.cc/300" alt="">
                    <div class="overlay">
                        <p class="my-auto">
                            <a href="profile.html">KATI FRANTZ</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-fluid img-responsive" src="http://i.pravatar.cc/300" alt="">
                    <div class="overlay">
                        <p class="my-auto">
                            <a href="profile.html">SELINA RYANS</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-fluid img-responsive" src="http://i.pravatar.cc/300" alt="">
                    <div class="overlay">
                        <p class="my-auto">
                            <a href="profile.html">ELLEN MICHEALS</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div class="hovereffect">
                    <img class="img-fluid img-responsive" src="http://i.pravatar.cc/300" alt="">
                    <div class="overlay">
                        <p class="my-auto">
                            <a href="profile.html">CLAUS LEBRONE</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End of top rated chefs section -->

    <!-- Most favorited recipes section -->
    <div class="container-fluid px-5 my-5">
        <h1 class="display-4 text-center my-5 wow fadeInDown" style="padding: 30px 0px;">
            <i class="ion ion-heart"></i>
            Most favorited Recipes</h1>
        <br>
        <div class="card-deck wow fadeIn" data-wow-duration="4s">
            <div class="card mb-3">
                <div class="img-zoom">
                    <img class="card-img-top" style="height: 250px;" src="{{ asset('img/meal-4.jpg') }}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">
                        <a href="single-recipe.html">Pressurized African Cassava Golden Grains ( Garri )</a>
                    </h5>
                    <hr>
                    <p class="text-sm mb-5">
                        <small>
                            <span class="text-muted">by</span> Elizabeth Funkirokeze</small>
                        <span class="text-muted float-right">
                            <i class="ion ion-clock"></i>
                            35 min</span>
                    </p>

                    <p class="h6 text-center">
                        <span class="mr-3 h5">
                            <i class="ion ion-happy-outline"></i> 12 </span>
                        <span class="mr-3 h5">
                            <i class="ion ion-sad-outline"></i> 5,301</span>
                        <span class="mr-3 h5">
                            <i class="ion ion-ios-heart"></i> 5,301</span>
                    </p>
                </div>
            </div>
            <div class="card mb-3">
                <div class="img-zoom">
                    <img class="card-img-top" style="height: 250px;" src="{{ asset('img/meal-5.jpg') }}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">
                        <a href="single-recipe.html">Emergency Jollof and coconut stew</a>
                    </h5>
                    <hr>
                    <p class="text-sm mb-5">
                        <small>
                            <span class="text-muted">by</span> Kati Frantz</small>
                        <span class="text-muted float-right">
                            <i class="ion ion-clock"></i>
                            2 min</span>
                    </p>
                    <p class="h6 text-center">
                        <span class="mr-3 h5">
                            <i class="ion ion-happy-outline"></i> 12 </span>
                        <span class="mr-3 h5">
                            <i class="ion ion-sad-outline"></i> 5,301</span>
                        <span class="mr-3 h5">
                            <i class="ion ion-ios-heart"></i> 5,301</span>
                    </p>
                </div>
            </div>
            <div class="card mb-3">
                <div class="img-zoom">
                    <img class="card-img-top" style="height: 250px;" src="{{ asset('img/meal-6.jpg') }}" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">
                        <a href="single-recipe.html">Advanced Abacha and Egg sauce</a>
                    </h5>
                    <hr>
                    <p class="text-sm mb-5">
                        <small>
                            <span class="text-muted">by</span> Elizabeth Funkirokeze</small>
                        <span class="text-muted float-right">
                            <i class="ion ion-clock"></i>
                            35 min</span>
                    </p>
                    <p class="h6 text-center">
                        <span class="mr-3 h5">
                            <i class="ion ion-happy-outline"></i> 12 </span>
                        <span class="mr-3 h5">
                            <i class="ion ion-sad-outline"></i> 5,301</span>
                        <span class="mr-3 h5">
                            <i class="ion ion-ios-heart"></i> 5,301</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- End of top rated recipes section -->
@endsection

@section('scripts')
<script src="{{ asset('js/vegas.min.js') }}"></script>
<script>
  $("#jumbotron").vegas({
      timer: false,
      shuffle: true,
      transition: 'fade',
      animation: 'kenburns',
      slides: [
          { src: "{{ asset('img/banner-1.jpg') }}" },
          { src: "{{ asset('img/banner-2.jpg') }}" },
          { src: "{{ asset('img/banner-3.jpg') }}" }
      ]
  });
</script>
@endsection