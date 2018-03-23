@extends('layouts.app')

@section('content')
<div class="container my-5">
        <div class="row justify-content-center">
                <div class="col-8">
                        <!-- Begin card details -->
                        <div id="singleRecipe"></div>
                        <!-- End of card details  -->
                </div>
                <div class="col-4">
                        <h3 class="text-center my-5">Similar recipes</h3>
                        <div class="card mb-3">
                            <div class="img-zoom">
                                <img class="card-img-top" style="height: 200px;" src="img/meal-6.jpg" alt="Card image cap">                
                            </div>
                            <div class="card-body">
                                <h6 class="card-title text-center">
                                    <a href="single-recipe.html">Italian Pepperonni with mushroom coverings</a>
                                </h6>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="img-zoom">
                                <img class="card-img-top" style="height: 200px;" src="img/meal-2.jpg" alt="Card image cap">                
                            </div>
                            <div class="card-body">
                                <h6 class="card-title text-center">
                                    <a href="single-recipe.html">Pressurized African Cassava Golden Grains</a>
                                </h6>
                            </div>
                        </div>
                        <h3 class="text-center my-5">Top notch chefs</h3>
                        <ul class="list-group">
                            <li class="list-group-item"><span class="card-title">Kati Frantz</span></li>
                            <li class="list-group-item"><span class="card-title">Irene Myers</span></li>
                            <li class="list-group-item"><span class="card-title">Doctor Strange</span></li>
                            <li class="list-group-item"><span class="card-title">Nadine Almendi F.</span></li>
                        </ul>
                </div>
        </div>
    </div>
@endsection
