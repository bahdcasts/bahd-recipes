<?php

namespace App\Http\Controllers;

use Storage;
use App\Step;
use App\Recipe;
use App\Ingredient;
use Illuminate\Http\Request;

class RecipesController extends Controller
{
    public function __construct() {
        $this->middleware('auth')->except(['index', 'show']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('recipes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $image = $request->image->store('public');

        $recipe = auth()->user()->recipes()->create([
            'image' => Storage::url($image),
            'title' => $request->title,
            'description' => $request->description,
            'slug' => str_slug($request->title),
            'timeToCook' => $request->timeToCook
        ]);

        $ingredients = json_decode($request->ingredients);
        $steps = json_decode($request->procedure);

        $ingredientsIntoDatabase = [];
        $stepsIntoDatabase = [];        

        foreach ($ingredients as $key => $value) {
            array_push($ingredientsIntoDatabase, [
                'text' => $value,
                'recipe_id' => $recipe->id
            ]);
        }

        foreach ($steps as $key => $value) {
            array_push($stepsIntoDatabase, [
                'text' => $value,
                'recipe_id' => $recipe->id
            ]);
        }

        Step::insert($stepsIntoDatabase);
        Ingredient::insert($ingredientsIntoDatabase);

        return response()->json([
            'recipe' => $recipe->fresh()
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Recipe $recipe)
    {
        return view('recipes.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
