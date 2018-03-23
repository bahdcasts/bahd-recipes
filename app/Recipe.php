<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $guarded = [];

    protected $with = ['ingredients', 'steps', 'user'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function getImageAttribute($image) {
        return asset($image);
    }

    public function getRouteKeyName() {
        return 'slug';
    }

    public function ingredients() {
        return $this->hasMany(Ingredient::class);
    }

    public function steps() {
        return $this->hasMany(Step::class);
    }
}
